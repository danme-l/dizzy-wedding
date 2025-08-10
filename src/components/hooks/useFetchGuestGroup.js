import { useState } from 'react';
import axios from 'axios';


function useFetchGuestGroup() {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchGuestGroup = async (pw) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    setLoading(true);
    setError(null);

    console.log(apiUrl)

    try {
      const response = await axios.get(`${apiUrl}/passwords/${pw}`);
      if (response.data && response.data.length > 0) {
        setGuests(response.data);
        return true; // fetch was successful and guests w/ that password found
      } else {
        setGuests([]);
        setError("No guests found.");
        return false; // no guests were found
      }
    } catch (err) {
      setError(err);
      return false; // fetch failed
    } finally {
      setLoading(false);
    }
  };

  return { guests, fetchGuestGroup, loading, error };
}

export default useFetchGuestGroup;