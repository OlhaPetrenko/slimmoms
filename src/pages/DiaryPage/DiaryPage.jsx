import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
const DiaryPage = () => {
  return (
    <div className="container">
      <DiaryAddProductForm />
      <DiaryProductsList />
    </div>
  );
};

export default DiaryPage;
