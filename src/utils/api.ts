const makeApiRequest = async(
  endpoint: string,
  method: string = "GET",
  data?: any
  // ): Promise<ICountry[]> => {
): Promise<Response> => { 
  const baseUrl = "https://restcountries.com/v3.1";

  const requestOptions: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      // Agrega aquí cualquier otro encabezado necesario, como tokens de autorización, etc.
    },
  };

  if (method !== "GET") {
    if (data) {
      requestOptions.body = JSON.stringify(data);
    } else {
      requestOptions.body = JSON.stringify({});
    }
  }

  return fetch(`${baseUrl}${endpoint}`, requestOptions)
};

export default makeApiRequest;
