import { instance } from './auth-api';

export const userInfo = async () => {
  const { data: result } = await instance.get('/user');
  console.log(result);
  return result;
};
