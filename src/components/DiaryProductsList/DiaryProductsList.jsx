import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import s from './DiaryProductsList.module.scss';

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
    <div>
      <ul className={s.productsList}>
        {productList?.map(({ title, weight, kcal, id }) => {
          return (
            <li key={id} className={s.productsItem}>
              <p className={s.productsItem_title}>{title}</p>
              <p className={s.productsItem_weight}>{weight} g</p>
              <p className={s.productsItem_cal}>
                {Math.max(kcal.toFixed(0), 0)} kcal
              </p>
              <button
                onClick={() => onDeleteProductListItem(id)}
                className={s.btn}
              ></button>
            </li>
          );
        })}
      </ul>
    </div>
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
