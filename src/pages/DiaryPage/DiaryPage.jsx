import { useDispatch } from 'react-redux';

import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import Summary from 'components/Summary/Summary';

import {
  dayProductInfoOperation,
  dayProductPostOperation,
} from 'redux/day/day-operations';

const DiaryPage = () => {
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(dayProductPostOperation(data));

    dispatch(dayProductInfoOperation({ date: data.date }));
  };
  return (
    <>
      <div className="container">
        <DiaryAddProductForm onSubmit={onSubmit} />
        <DiaryProductsList />
      </div>

      <Summary />
    </>
  );
};

export default DiaryPage;
