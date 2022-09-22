import { useDispatch } from 'react-redux';

import Calendar from 'components/Calendar/Calendar';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import Summary from 'components/Summary/Summary';

import { productOperation } from 'redux/product/product-operations';

const DiaryPage = () => {
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(productOperation(data.productName));
  };
  return (
    <>
      <div className="container">
        <Calendar />
        <DiaryAddProductForm onSubmit={onSubmit} />
        <DiaryProductsList />
      </div>
      <Summary />
    </>
  );
};

export default DiaryPage;
