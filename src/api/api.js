import { API_KEY, API_URL } from "./config";

const getData = async (L = 15, P = 5, O = 'DESC') => {
  const response = await fetch(`${API_URL}?limit=${L}&page=${P}&order=${O}`, {
    headers: { Authentication: API_KEY }
  });
  return await response.json();
}


export default getData;
