import { instance } from './auth-api';

export const dayProductPost = async data => {
  const { data: result } = await instance.post('/day', data);
  console.log(result);
  return result;
};
//!!! Доработать
// export const dayProductDelete = async data => {
//   console.log(data);
//   const { data: result } = await instance.delete('/day', data);
//   console.log(result);
//   return result;
// };

export const dayProductInfo = async date => {
  const { data: result } = await instance.post('/day/info', date);
  console.log(result);
  return result;
};
