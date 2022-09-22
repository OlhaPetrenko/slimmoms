import { useDispatch } from 'react-redux';
import { dailyRateUserOperation } from 'redux/dailyRate/dailyRate-operations';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';

const CalculatorPage = () => {
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(dailyRateUserOperation(data));
  };
  return (
    <div>
      <DailyCaloriesForm onSubmit={onSubmit} />
    </div>
  );
};

export default CalculatorPage;
