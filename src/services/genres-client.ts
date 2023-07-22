import APIClient, { FetchResponse } from "./api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const genresService = new APIClient<FetchResponse<Genre>>("/genres");
export default genresService;
