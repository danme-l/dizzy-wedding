import { useState, useCallback } from 'react';
import axios from 'axios';

function useFetchGuestGroup() {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGuestGroup = useCallback(async (token) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${apiUrl}/passwords/${token}`);

      if (response.data && response.data.length > 0) {
        setGuests(response.data);
        return true; // guest group found
      } else {
        setGuests([]);
        setError("No guests found.");
        return false;
      }
    } catch (err) {
      console.error(err);
      setError("Invalid or expired link.");
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  return { guests, fetchGuestGroup, loading, error };
}

export default useFetchGuestGroup;
