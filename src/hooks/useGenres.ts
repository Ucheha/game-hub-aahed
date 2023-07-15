import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface GenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const { data, error, isLoading } = useData<Genre>("/genres");
  return { genres: data, error, isLoading };
};

export default useGenres;
