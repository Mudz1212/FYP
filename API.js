const API = {};

const BASE_URL = "https://EchoesOfPeace.cloudfunctions.net";

API.getDuas = () => callFetch(`${BASE_URL}/duas`, "GET");

module.exports = API;

const callFetch = async (endpoint, method, dataObj = null) => {
  let requestObj = { method: method };

  if (dataObj)
    requestObj = {
      ...requestObj,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataObj),
    };

  try {
    const response = await fetch(endpoint, requestObj);
    let result = null;
    if (response.status !== 204) {
      result = await response.json();
    }

    return response.status >= 200 && response.status < 300
      ? { isSuccess: true, result }
      : { isSuccess: false, messages: result.message };
  } catch (error) {
    return { isSuccess: false, message: error.message };
  }
};
