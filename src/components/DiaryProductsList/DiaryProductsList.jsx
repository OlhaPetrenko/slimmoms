import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  dayProductDeleteOperation,
  dayProductInfoOperation,
} from 'redux/day/day-operations.js';

const DiaryProductsList = ({ date }) => {
  const productList = useSelector(state => state.day.day.eatenProducts);
  const productDayId = useSelector(state => state.day.day.id);
  const dispatch = useDispatch();

  const onDeleteProductListItem = id => {
    const data = {
      dayId: productDayId,
      eatenProductId: id,
    };
    dispatch(dayProductDeleteOperation(data));
    dispatch(dayProductInfoOperation({ date }));
  };
  return (
    <ul>
      {productList?.map(({ title, weight, kcal, id }) => {
        return (
          <li key={id}>
            <p>{title}</p>
            <p>{weight}g</p>
            <p>{kcal}kcal</p>
            <button onClick={() => onDeleteProductListItem(id)}>X</button>
          </li>
        );
      })}
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
