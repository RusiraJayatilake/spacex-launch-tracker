import axios from "axios";

class SpaceXApiService {
  // api version 3
  async getV3(endpoint, options = {}) {
    const { slug = "", queryParam = {} } = options; // destructure from options
    let base_url = `https://api.spacexdata.com/v3${endpoint}`;

    // if slug
    if (slug) {
      base_url += `/${slug}`;
    }

    // if query
    const queryString = new URLSearchParams(queryParam).toString();
    if (queryString) {
      base_url += `?${queryString}`;
    }

    try {
      // axios configs
      const configs = {
        method: "GET",
        url: base_url,
        headers: {},
      };

      const results = await axios(configs);
      return results && results.data;
    } catch (err) {
      console.error("error fetching", err);
    }
  }

  // api version 4
  async getV4(endpoint, options = {}) {
    const { slug = "" } = options; // destructure from options
    let base_url = `https://api.spacexdata.com/v4${endpoint}`;

    // if slug
    if (slug) {
      base_url += `/${slug}`;
    }

    // // if query
    // const queryString = new URLSearchParams(queryParam).toString();
    // if (queryString) {
    //   base_url += `?${queryString}`;
    // }

    try {
      // axios configs
      const configs = {
        method: "GET",
        url: base_url,
        headers: {},
      };

      const results = await axios(configs);
      return results && results.data;
    } catch (err) {
      console.error("error fetching", err);
    }
  }
}

const spacexApiService = new SpaceXApiService();
export default spacexApiService;
