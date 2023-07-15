import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
}

interface GenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<GenreResponse>("/genres", { signal: controller.signal })
      .then((response) => {
        setGenres(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;