import { baseUrl } from "../Config";
import axios from "axios";

export default {
  //get
  async getRequest(url, params = null) {
    axios.defaults.headers = {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const request = axios({
      url: baseUrl + url,
      method: "GET",
      params: params,
    });
    const returnData = request
      .then((response) => response)
      .catch(function (error) {
        console.log(error);
        return [];
      });
    return returnData;
  },

  //commen request
  async postRequest(url, data = {}) {
    axios.defaults.headers = {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const request = axios({ url: baseUrl + url, method: "POST", data: data });
    const returnData = request.then((response) => response);
    return returnData;
  },

  //commen request
  async postRequestNoToken(url, data) {
    axios.defaults.headers = {
      "Access-Control-Allow-Origin": "*",
    };
    const request = axios({ url: baseUrl + url, method: "POST", data: data });
    const returnData = request.then((response) => response);
    return returnData;
  },
};
