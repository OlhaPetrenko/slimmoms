import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { productOperation } from 'redux/product/product-operations';

import s from './add-product-form.module.scss';

function DiaryAddProductForm({ onSubmit }) {
  const [productName, setName] = useState('');
  const [grams, setGrams] = useState('');
  const [productId, setProductId] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const arrProducts = useSelector(state => state.product.items);
  const productNameInputId = nanoid();
  const gramsInputId = nanoid();
  const days = String(startDate.getDate()).padStart(2, '0');
  const month = String(startDate.getMonth() + 1).padStart(2, '0');
  const year = String(startDate.getFullYear());

  const date = `${year}-${month}-${days}`;

  const onClickFetch = e => {
    setName(e.target.value);
    if (e.target.value.replace(/ /g,'')) {
      dispatch(productOperation(e.target.value));
    }
  };

  const onClickTakeNameProduct = ({ target }) => {
    setName(target.innerText);
    setProductId(target.id);
  };

  const hendleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'productName':
        setName(value);
        break;

      case 'grams':
        setGrams(value);
        break;
      default:
        return;
    }
  };

  const onClickSubmit = e => {
    e.preventDefault();
    const data = {
      date,
      productId,
      weight: grams,
    };
    console.log(data);
    onSubmit(data);
    reset();
  };

  const reset = () => {
    setName('');
    setGrams('');
  };

  return (
    <>
      <form onSubmit={ onClickSubmit } className={ s.form }>
        <DatePicker
          selected={ startDate }
          onChange={ date => setStartDate(date) }
        />
        <input
          onChange={ onClickFetch }
          value={ productName }
          className={ s.input1 }
          type="text"
          name="productName"
          placeholder="Enter product name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example - Poultry meat"
          required
          id={ productNameInputId }
        />

        <input
          onChange={ hendleInputChange }
          value={ grams }
          className={ s.input2 }
          type="number"
          name="grams"
          placeholder="Grams"
          pattern="^\d+(?:\.\d+)?\s*(?:grams)$"
          required
          id={ gramsInputId }
        />
        <button className={ s.btn1 } type="submit">
          Add
        </button>

        <button className={ s.btn2 } type="submit"></button>
      </form>
      <ul>
        { productName &&
          arrProducts?.map(el => (
            <li key={ el._id } onClick={ onClickTakeNameProduct } id={ el._id }>
              { el.title.ru }
            </li>
          )) }
      </ul>
    </>
  );
}

export default DiaryAddProductForm;

DiaryAddProductForm.propTypes = {
  onSubmit: PropTypes.func,
};
