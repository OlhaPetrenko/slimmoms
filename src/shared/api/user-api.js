import { setToken, instance } from './auth-api';

export const userInfo = async data => {
  setToken(data);
  const { data: result } = await instance.get('/user');
  console.log(result);
  return result;
};
