import { useState } from 'react';
import axios from 'axios'; 

/**
 * expected payload :
 * [
 *   {
 *     guest_id: 12,           // invited guest FK, null for a plus one
 *     invited_id: null,       // null for invited guest, guest_id of host for plus one
 *     food_choice: 'beef',    // string or FK to food table
 *     attending: true         // boolean for attendance
 *     plus_one_name: 'alice'  // name for the guest
 *   },
 *   ...
 * ]
 */

export function useSubmitRSVP() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitRSVP = async (rsvpArray) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // POST to api
      const response = await axios.post(`${apiUrl}/rsvps`, rsvpArray);

      // great success very nice
      if (response.status === 200 || response.status === 201) {
        setSuccess(true);
      }
    } catch (err) {
      console.error('Error submitting RSVP:', err);
      setError(err.response?.data?.message || 'An error occurred while submitting RSVPs.');
    } finally {
      setLoading(false);
    }
  };

  return { submitRSVP, loading, error, success };
}