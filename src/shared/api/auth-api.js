import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://slimmom-backend.goit.global',
});

const setToken = (accessToken = '') => {
  instance.defaults.headers.authorization = `Bearer ${accessToken}`;
};

export const registration = async data => {
  const { data: result } = await instance.post('/auth/register', data);
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/auth/login', data);
  setToken(result.accessToken);
  console.log(result);
  return result;
};

export const logout = async () => {
  const { data: result } = await instance.post('/auth/logout');
  setToken('');
  return result;
};

export const refresh = async sid => {
  const { data: result } = await instance.post('/auth/refresh', sid);
  setToken(result.accessToken);
  return result;
};
