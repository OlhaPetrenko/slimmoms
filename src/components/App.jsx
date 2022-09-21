import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from './Header/Header';
// import DiaryAddProductForm from './DiaryAddProductForm/DiaryAddProductForm';
// import Calendar from './Calendar/Calendar';
import Summary from './Summary/Summary';

import UserRoutes from './UserRouts/UserRoutes';
import { refreshUser } from 'redux/auth/auth-operation';
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, []);

  return (
    <div>
      <>
        <Header />
        {/* <Calendar />
        <DiaryAddProductForm /> */}

        <UserRoutes />
        <Summary />
      </>
    </div>
  );
};

// import { registration } from 'shared/api/auth-api';
// import { login } from 'shared/api/auth-api';
// import { dailyRate } from 'shared/api/daily-rate-api';
// import { dailyUser } from 'shared/api/daily-rate-api';
// import { productSearch } from 'shared/api/product-api';
// import { dayProductPost } from 'shared/api/day-api';
// import { dayProductDelete } from 'shared/api/day-api';
// import { dayProductInfo } from 'shared/api/day-api';
// import { userInfo } from 'shared/api/user-api';

// registration({
//   email: 'user23467@example.com',
//   password: 'qwerty1234567',
//   username: 'Emma2344',
// });

// login({ email: 'user23467@example.com', password: 'qwerty1234567' });

// dailyRate({
//   weight: 100,
//   height: 170,
//   age: 30,
//   desiredWeight: 60,
//   bloodType: 1,
// });

// const data = {
//   id: '6329acc4e037c408de85120b',
//   user: {
//     weight: 100,
//     height: 170,
//     age: 30,
//     desiredWeight: 60,
//     bloodType: 1,
//   },
// };
// dailyUser(data);

// productSearch('мясо');

// dayProductPost({
//   date: '2022-09-21',
//   productId: '5d51694802b2373622ff552c',
//   weight: 100,
// });

// const data = {
//   dayId: '6329bfa4e037c408de85129c',
//   eatenProductId: '48d94903-fc2b-41ea-8036-f97b104629f1',
// };
// dayProductDelete(data);

// dayProductInfo({
//   date: '2022-09-20',
// });
