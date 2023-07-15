import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d49bf99daa2d417a90b16a414930013a",
  },
});
