import { instance } from './auth-api';

export const productSearch = async data => {
  const { data: result } = await instance.get(`/product?search=${data}`);
  console.log(result);
  return result;
};
