import { useDispatch } from 'react-redux';
import { dailyRateUserOperation } from 'redux/dailyRate/dailyRate-operations';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import Summary from 'components/Summary/Summary';

const CalculatorPage = () => {
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(dailyRateUserOperation(data));
  };
  return (
    <>
      <div className="container">
        <DailyCaloriesForm onSubmit={onSubmit} />
      </div>
      <Summary />
    </>
  );
};

export default CalculatorPage;
