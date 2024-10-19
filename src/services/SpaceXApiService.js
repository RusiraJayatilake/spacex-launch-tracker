import axios from "axios";

class SpaceXApiService {
  async get(endpoint) {
    const configs = {
      method: "GET",
      url: `https://api.spacexdata.com/v3${endpoint}`,
      headers: {},
    };
    const results = await axios(configs);
    return results && results.data;
  }
}

const spacexApiService = new SpaceXApiService();
export default spacexApiService;
