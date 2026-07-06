import { useState, useEffect, useCallback } from "react";

/**
 * Custom hook for fetching API data.
 *
 * @param {string} url
 * @param {object} options
 * @returns {{
 *   data:any,
 *   loading:boolean,
 *   error:string|null,
 *   refetch:Function
 * }}
 */

export default function useFetch(
  url,
  options = {}
) {
  const [data, setData] = useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState(null);

  const fetchData = useCallback(async () => {
    if (!url) return;

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        url,
        options
      );

      if (!response.ok) {
        throw new Error(
          `HTTP Error ${response.status}`
        );
      }

      const result =
        await response.json();

      setData(result);
    } catch (err) {
      setError(
        err.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
}