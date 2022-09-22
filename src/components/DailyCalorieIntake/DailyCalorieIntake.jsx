import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import s from './DailyCalorieIntake.module.scss';

const DailyCalorieIntake = () => {
  const dailyRate = useSelector(state => state.dailyRate.dailyRate);
  const navigate = useNavigate();

  return (
    <>
      <h2>Your recommended daily calorie intake is</h2>
      <span>{dailyRate}</span>
      <h3 className={s.border}>Foods you should not eat</h3>
      <ol>
        <li>Flour products</li>
        <li>Milk</li>
        <li>Red meat</li>
        <li>Smoked meats</li>
      </ol>
      <button className={s.button} onClick={() => navigate('/registration')}>
        Start losing weight
      </button>
    </>
  );
};

export default DailyCalorieIntake;
