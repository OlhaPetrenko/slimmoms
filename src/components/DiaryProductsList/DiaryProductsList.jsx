import PropTypes from 'prop-types';

const DiaryProductsList = ({ productList, onDeleteProductListItem }) => {
  return (
    <ul>
      {productList?.map(({ id, productName, grams }) => (
        <li key={id}>
          <p>{productName}</p>
          <p>{grams}</p>
          <p>Calorie content of the product</p>
          <button onClick={() => onDeleteProductListItem(id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default DiaryProductsList;

DiaryProductsList.propTypes = {
  DiaryProductsLis: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      grams: PropTypes.string.isRequired,
    })
  ),
  onDeletePhoneListItem: PropTypes.func,
};
