const axios = require('axios');

const LOGIN_TOKEN_COOKIE = 'login-token';
const QUERY_BUILDER_PATH = 'bin/querybuilder.json'

class AEMClient {
  constructor(host, options = {}) {

    let axiosOptions = {};
    axiosOptions.baseURL = host;

    if (options.loginToken) {
      axiosOptions.headers = {
        Cookie: `${LOGIN_TOKEN_COOKIE}=${options.loginToken}`
      }
    } else if (options.user && options.password) {
      axiosOptions.auth = {
        username: options.user,
        password: options.password
      }
    } else {
      options.withCredentials = true;
    }

    this.axios = axios.create(axiosOptions);
  }

  getResource(resourcePath, depth) {
    const path = `${resourcePath}.${depth}.json`;
    return this.axios.get(path);
  }

  query(options) {
    return this.axios.get(`${QUERY_BUILDER_PATH}`, {
      params: options
    });
  }

}


module.exports = AEMClient;
