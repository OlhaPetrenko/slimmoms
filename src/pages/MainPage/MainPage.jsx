import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import s from './MainPage.module.scss';

const MainPage = () => {
  // const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const onSubmit = data => {
    // dispatch(logInUser(data));
  };
  return (
    <>
      <div className={s.section}>
        <div className="container">
          <h1 className={s.formTitle}>
            Calculate your daily calorie intake right now
          </h1>
          <DailyCaloriesForm onSubmit={onSubmit} />
        </div>
      </div>
      <>
        <button className={s.button} onClick={openModal}>
          Start losing weight
        </button>
        {modalOpen && (
          <Modal close={closeModal}>
            <h2>Your recommended daily calorie intake is</h2>
            <span>2800 ккал</span>
            <h3 className={s.border}>Foods you should not eat</h3>
            <ol>
              <li>Flour products</li>
              <li>Milk</li>
              <li>Red meat</li>
              <li>Smoked meats</li>
            </ol>
          </Modal>
        )}
      </>
    </>
  );
};
export default MainPage;
