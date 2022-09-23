import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import s from './DailyCalorieIntake.module.scss';

const DailyCalorieIntake = () => {
  const dailyRate = useSelector(state => state.dailyRate.dailyRate);
  const navigate = useNavigate();

  return (
    <>
      <h2 className={s.title}>
        Your recommended daily
        <br /> calorie intake is
      </h2>
      <p className={s.dailyRate}>
        {Number.parseInt(dailyRate)} <span className={s.kcal}>kcal</span>
      </p>
      <h3 className={s.titleList}>Foods you should not eat</h3>
      <ol>
        <li className={s.item}>Flour products</li>
        <li className={s.item}>Milk</li>
        <li className={s.item}>Red meat</li>
        <li className={s.item}>Smoked meats</li>
      </ol>
      <button className={s.button} onClick={() => navigate('/registration')}>
        Start losing weight
      </button>
    </>
  );
};

export default DailyCalorieIntake;
