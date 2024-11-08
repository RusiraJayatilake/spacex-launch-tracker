import axios from "axios";

// api version 3
const getV3 = async (endpoint, options = {}) => {
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
};

// api version 4
const getV4 = async (endpoint, options = {}) => {
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
};

export default { getV3, getV4 };
