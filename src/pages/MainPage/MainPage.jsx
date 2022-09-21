// import { useDispatch } from 'react-redux';

// import { logInUser } from 'redux/auth/auth-operation';

import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import s from './MainPage.module.scss';

const MainPage = () => {
  // const dispatch = useDispatch();

  const onSubmit = data => {
    // dispatch(logInUser(data));
  };
  return (
    <div className={s.section}>
      <div className="container">
        <h1 className={s.formTitle}>
          Calculate your daily calorie intake right now
        </h1>
        <DailyCaloriesForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
export default MainPage;
