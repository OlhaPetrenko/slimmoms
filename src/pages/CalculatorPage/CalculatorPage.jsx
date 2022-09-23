import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { dailyRateUserOperation } from 'redux/dailyRate/dailyRate-operations';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import Summary from 'components/Summary/Summary';

const CalculatorPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = data => {
    dispatch(dailyRateUserOperation(data));
    navigate('/diary');
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
