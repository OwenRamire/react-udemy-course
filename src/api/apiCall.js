
const apiCall = async ({
  url,
  method = 'get',
  body,
  headers,
}) => {
  try {
    const response = await fetch(url, {method, body, headers});
    return response.json();
  } catch (err) {
    Promise.reject(err); // Throw an error if the API call fails
  }
};

export default apiCall;
