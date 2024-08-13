import { useState, useEffect } from 'react';
import axios from 'axios';

function useAxios({ url, method = 'get', body = null }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        let response;

        if (method === 'get') {
          response = await axios.get(url);
        } else if (method === 'post') {
          response = await axios.post(url, body);
        } else if (method === 'put') {
          response = await axios.put(url, body);
        } else if (method === 'delete') {
          response = await axios.delete(url);
        } else {
          throw new Error(`Unsupported method: ${method}`);
        }

        if (isMounted) {
          setData(response.data);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, method, body]);

  return { data, loading, error };
}

export default useAxios;
