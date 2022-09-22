import { useDispatch } from 'react-redux';
import { dailyRateUserOperation } from 'redux/dailyRate/dailyRate-operations';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';

import Calendar from 'components/Calendar/Calendar';

import { productOperation } from 'redux/product/product-operations';

const DiaryPage = () => {
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(dailyRateUserOperation(data));
    dispatch(productOperation(data.productName));
  };
  return (
    <div className="container">
      <DailyCaloriesForm onSubmit={onSubmit} />
      <Calendar />
      <DiaryAddProductForm onSubmit={onSubmit} />

      <DiaryProductsList />
    </div>
  );
};

export default DiaryPage;
