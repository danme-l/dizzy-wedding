import { useState, useCallback } from 'react';
import axios from 'axios';

function useFetchGuestList() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGuestList = useCallback(async (token) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${apiUrl}/guests/list`);

      if (response.data && response.data.length > 0) {
        setList(response.data);
        return true; // guest group found
      } else {
        setList([]);
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

  return { list, fetchGuestList, loading, error };
}

export default useFetchGuestList;
