import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import s from './add-product-form.module.scss';

function DiaryAddProductForm({ onSubmit }) {
  const [productName, setName] = useState('');
  const [grams, setGrams] = useState('');

  const productNameInputId = nanoid();
  const gramsInputId = nanoid();

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
      productName,
      grams,
    };
    onSubmit(data);
    reset();
  };

  const reset = () => {
    setName('');
    setGrams('');
  };

  return (
    <form onSubmit={onClickSubmit} className={s.form}>
      <input
        onChange={hendleInputChange}
<<<<<<< Updated upstream
        // value={productName}
        className={s.input}
=======
        value={productName}
        className={s.input1}
>>>>>>> Stashed changes
        type="text"
        name="productName"
        placeholder="Enter product name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example - Poultry meat"
        required
        id={productNameInputId}
      />
      <input
        onChange={hendleInputChange}
<<<<<<< Updated upstream
        // value={grams}
        className={s.input}
=======
        value={grams}
        className={s.input2}
>>>>>>> Stashed changes
        type="number"
        name="grams"
        placeholder="Grams"
        pattern="^\d+(?:\.\d+)?\s*(?:grams)$"
        required
        id={gramsInputId}
      />
      <button className={s.btn} type="submit">
        Add
      </button>
    </form>
  );
}

export default DiaryAddProductForm;

DiaryAddProductForm.propTypes = {
  onSubmit: PropTypes.func,
};
