import { instance, setToken } from './auth-api';

export const productSearch = async data => {
  setToken(data.token);
  // console.log(data.token);
  // console.log(data.product);
  const { data: result } = await instance.get(
    `/product?search=${data.product}`
  );
  // console.log(result);
  return result;
};
