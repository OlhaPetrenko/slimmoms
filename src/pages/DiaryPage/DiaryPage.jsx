import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import Calendar from 'components/Calendar/Calendar';

const DiaryPage = () => {
  return (
    <div className="container">
      <Calendar />
      <DiaryAddProductForm />
      <DiaryProductsList />
    </div>
  );
};

export default DiaryPage;
