import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { dailyRateUserOperation } from 'redux/dailyRate/dailyRate-operations';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import Summary from 'components/Summary/Summary';
import Modal from 'components/Modal/Modal';
import DailyCalorieIntake from 'components/DailyCalorieIntake/DailyCalorieIntake';

const CalculatorPage = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const onSubmit = data => {
    dispatch(dailyRateUserOperation(data));
    // navigate('/diary');
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div className="container">
        <DailyCaloriesForm onSubmit={onSubmit} />

        <Summary />
      </div>
      {modalOpen && (
        <Modal close={closeModal}>
          <DailyCalorieIntake />
        </Modal>
      )}
    </>
  );
};

export default CalculatorPage;
