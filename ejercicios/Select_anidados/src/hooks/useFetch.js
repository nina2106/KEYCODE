import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching
      try {
        const res = await fetch(url, { signal });

        if (!res.ok) {
          // Construct a detailed error object
          const err = new Error(`Error ${res.status}: ${res.statusText}`);
          err.status = res.status;
          throw err;
        }

        const json = await res.json();

        if (!signal.aborted) {
          setData(json);
        }
      } catch (error) {
        if (!signal.aborted) {
          // Ensure error contains message
          setError(error.message || "An unexpected error occurred");
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // Clean up function to abort fetch request if the component unmounts
    return () => abortController.abort();
  }, [url]);

  return {
    data,
    error,
    loading,
  };
};
