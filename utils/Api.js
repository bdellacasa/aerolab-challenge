const API_URL = 'https://coding-challenge-api.aerolab.co';
const API_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjM1NTBiYzc1MTI2YzAwNmQwOGJiMDgiLCJpYXQiOjE1OTczMjk1OTZ9.yPU50qkFsaUyw9GRp0-7hPkO4Gd54WS7z5le3E1prFo";

const getUrl = (path) => (`${API_URL}${path}`);

const headers = {
  "Content-Type": "application/json",
  "Accept": "application/json",
  "Authorization": `Bearer ${API_TOKEN}`
};

const body = (params) => ({ body: JSON.stringify(params) });

const request = async (path, method = "GET", param) => {
  const url = getUrl(path);
  const options = { method, headers, ...param };
  return await fetch(url, options)
    .then(result => {
      return result.json();
    })
    .catch(error => {
      console.log(`ERROR ${method} ${url}`, error)
    })
}

const getUser = () => request("/user/me");
const getProducts = () => request("/products");
const addPoints = (amount = 1000) => request("/user/points", "POST", body({ amount }));
const redeem = (productId) => request("/redeem", "POST", body({ productId }));

const API = {
  getUser,
  getProducts,
  addPoints,
  redeem,
};

export default API;