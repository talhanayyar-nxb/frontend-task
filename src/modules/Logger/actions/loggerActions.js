import axios from "axios";

export const fetchLoggersListing = async () =>  {
  const response = await axios.get(`https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f`);
  return response;
};

