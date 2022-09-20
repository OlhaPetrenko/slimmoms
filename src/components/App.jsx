import DiaryAddProductForm from './DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from './DiaryProductsList/DiaryProductsList';

export const App = () => {
  // const productList = useSelector(store => {
  //   const filteredProduct = store.contacts.items.filter(item =>
  //     item.name.toLowerCase().includes(store.filter.toLocaleLowerCase())
  //   );
  //   return filteredProduct;
  // });

  // const onAddProduct = data => {
  //   const action = addItems(data);
  //   dispatch(action);
  // };

  return (
    <div className="container">
      <DiaryAddProductForm
      // onSubmit={onAddProduct}
      />
      <DiaryProductsList
      // productList={productList} onDeleteProductListItem={onDelContact}
      />
    </div>
  );
};
