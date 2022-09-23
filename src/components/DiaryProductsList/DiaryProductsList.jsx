import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { dayProductDeleteOperation } from "redux/day/day-operations.js"


const DiaryProductsList = () => {
  const productList = useSelector(state => state.day.day.eatenProducts)
  const productId = useSelector(state => state.day.day)
  const dispatch = useDispatch()

  const onDeleteProductListItem = e => {
    const data = {
      dayId: e.target.id,
      eatenProductId: e.target.name,
    }
    dispatch(dayProductDeleteOperation(data))

  }
  return (
    <ul>
      { productList?.map(({ title, weight, kcal, id, }) => (
        <li key={ id }>
          <p>{ title }</p>
          <p>{ weight }g</p>
          <p>{ kcal }kcal</p>
          <button id={ productId.daySummary } name={ id }
            onClick={ onDeleteProductListItem }>X</button>
        </li>
      ))
      }
    </ul >
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
