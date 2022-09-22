import { useDispatch } from 'react-redux';

import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
<<<<<<< Updated upstream
=======
import Calendar from 'components/Calendar/Calendar';

import { productOperation } from 'redux/product/product-operations';

>>>>>>> Stashed changes
const DiaryPage = () => {
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(productOperation(data.productName));
  };
  return (
    <div className="container">
<<<<<<< Updated upstream
      <DiaryAddProductForm />
=======
      <Calendar />
      <DiaryAddProductForm onSubmit={onSubmit} />
>>>>>>> Stashed changes
      <DiaryProductsList />
    </div>
  );
};

export default DiaryPage;
