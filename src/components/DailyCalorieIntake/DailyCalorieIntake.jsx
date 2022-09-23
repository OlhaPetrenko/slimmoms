import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import s from './DailyCalorieIntake.module.scss';

const DailyCalorieIntake = () => {
  const dailyRate = useSelector(state => state.dailyRate.dailyRate);
  const summNotAllowed = useSelector(
    state => state.dailyRate.notAllowedProducts
  );
  const LogInUser = useSelector(state => state.user.isLogin);
  const navigate = useNavigate();

  const navigation = () => {
    if (LogInUser) {
      return navigate('/diary');
    }
    return navigate('/registration');
  };
  return (
    <>
      <h2 className={s.title}>
        Your recommended daily
        <br /> calorie intake is
      </h2>
      <div className={s.wrapper}>
        <p className={s.dailyRate}>
          {Number.parseInt(dailyRate)} <span className={s.kcal}>kcal</span>
        </p>
        <h3 className={s.titleList}>Foods you should not eat</h3>
        <ol className={s.list}>
          <li className={s.item}>{summNotAllowed[0]}</li>
          <li className={s.item}>{summNotAllowed[1]}</li>
          <li className={s.item}>{summNotAllowed[2]}</li>
          <li className={s.item}>{summNotAllowed[3]}</li>
        </ol>
      </div>

      <button className={s.button} onClick={navigation}>
        Start losing weight
      </button>
    </>
  );
};

export default DailyCalorieIntake;
