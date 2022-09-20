import { instance } from './auth-api';

export const dailyRate = async data => {
  const { data: result } = await instance.post('/daily-rate', data);
  console.log(result);
  return result;
};

export const dailyUser = async ({ id, user }) => {
  const { data: result } = await instance.post(`/daily-rate/${id}`, user);
  console.log(result);
  return result;
};
