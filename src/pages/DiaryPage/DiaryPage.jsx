import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import s from './DiaryPage.module.scss';

import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import Summary from 'components/Summary/Summary';

import {
  dayProductInfoOperation,
  dayProductPostOperation,
} from 'redux/day/day-operations';

const DiaryPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const dailyRateId = useSelector(state => state.dailyRate.id);
  const date = startDate.toLocaleDateString('en-CA');

  if (!dailyRateId) {
    return <Navigate to="/calculator" />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    dispatch(dayProductInfoOperation({ date }));
  }, [date, dispatch]);

  const onSubmit = data => {
    const dataPost = { date, ...data };
    dispatch(dayProductPostOperation(dataPost));
  };

  return (
    <>
      <div className="container">
        <section className={s.section}>
          <DatePicker
            className={s.DatePicker}
            selected={startDate}
            onChange={date => setStartDate(date)}
          />
          <DiaryAddProductForm onSubmit={onSubmit} />
          <DiaryProductsList date={date} />

          <Summary date={date} />
        </section>
      </div>
    </>
  );
};

export default DiaryPage;
