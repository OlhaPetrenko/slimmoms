// import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './DailyCaloriesForm.module.scss';

function DailyCaloriesForm({ onSubmit }) {
  const [height, setHeight] = useState(null);
  const [age, setAge] = useState(null);
  const [weight, setWeight] = useState(null);
  const [desiredWeight, setDesiredWeight] = useState(null);
  const [blood, setBlood] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const data = { height, age, weight, desiredWeight, blood };

    onSubmit(data);
    setHeight(null);
    setAge(null);
    setWeight(null);
    setDesiredWeight(null);
    setBlood(null);
  }

  function handleChange(event) {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'height':
        setHeight(value);
        break;
      case 'age':
        setAge(value);
        break;
      case 'weight':
        setWeight(value);
        break;
      case 'desiredWeight':
        setDesiredWeight(value);
        break;
      case 'blood':
        setBlood(value);
        break;
      default:
        return;
    }
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.helper}>
        <input
          className={s.input}
          type="number"
          name="height"
          required
          autoFocus
          // autoComplete="off"
          value={height}
          placeholder="Height*"
          onChange={handleChange}
        />

        <input
          className={s.input}
          type="number"
          name="age"
          required
          value={age}
          placeholder="Age *"
          onChange={handleChange}
        />

        <input
          className={s.input}
          type="number"
          name="weight"
          required
          value={weight}
          placeholder="Current weight *"
          onChange={handleChange}
        />
        <button type="submit" className={s.btnActiveLeft}>
          Start losing weight
        </button>
      </div>

      <div className={s.helper}>
        <input
          className={s.input}
          type="number"
          name="desiredWeight"
          required
          value={desiredWeight}
          placeholder="Desired weight *"
          onChange={handleChange}
        />
        <div>
          <p className={s.radioText}>Blood type *</p>
          <div className={s.radioGroup}>
            <label className={s.radioLabel}>
              <input
                className={s.radioInput}
                type="radio"
                name="blood"
                value="1"
                onChange={handleChange}
              />
              <span className={s.radioSpan}>1</span>
            </label>
            <label className={s.radioLabel}>
              <input
                className={s.radioInput}
                type="radio"
                name="blood"
                value="2"
                onChange={handleChange}
              />
              <span className={s.radioSpan}>2</span>
            </label>
            <label className={s.radioLabel}>
              <input
                className={s.radioInput}
                type="radio"
                name="blood"
                value="3"
                onChange={handleChange}
              />
              <span className={s.radioSpan}>3</span>
            </label>
            <label className={s.radioLabel}>
              <input
                className={s.radioInput}
                type="radio"
                name="blood"
                value="4"
                onChange={handleChange}
              />
              <span className={s.radioSpan}>4</span>
            </label>
          </div>
        </div>

        <button type="submit" className={s.btnActiveRight}>
          Start losing weight
        </button>
      </div>
    </form>
  );
}

export default DailyCaloriesForm;

// DailyCaloriesForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
