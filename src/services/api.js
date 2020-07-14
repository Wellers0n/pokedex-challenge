import axios from 'axios';
import constants from './../constants'

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export async function issueToken() {
  const response = await window.fetch(
    'https://api.croct.io/token',
    { headers: { 'X-Api-Key': constants.API_KEY } },
  );

  const { token } = await response.json();

  return token;
}

export async function callApiToGenerateToken(userId) {
  const response = await window.fetch(
    'https://api.croct.io/token' + (userId !== null ? `/${userId.toString()}` : ''),
    { headers: { 'X-Api-Key': constants.API_KEY } },
  );

  const { token } = await response.json();

  localStorage.setItem('token', token);

  return token;
}

export default api;
