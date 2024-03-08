import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

const useGetData = (
  URL: string
): {
  data: any;
  error: string | null;
  loading: boolean;
} => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse = await axios.get(URL);

        if (response.status === 200) {
          setData(response.data);
        } else {
          setError(`Request failed with status code ${response.status}`);
        }
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};

export { useGetData };
