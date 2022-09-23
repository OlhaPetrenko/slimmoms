import s from './calendar.module.scss';

const Calendar = () => {
  return (
    <input
      type="date"
      name="Date"
      id="davaToday"
      className={s.calendar}
      // value=""
    ></input>
  );
};

export default Calendar;
