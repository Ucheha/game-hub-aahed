import APIClient, { FetchResponse } from "./api-client";
import { Platform } from "./platforms-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export default new APIClient<FetchResponse<Game>>("/games");
