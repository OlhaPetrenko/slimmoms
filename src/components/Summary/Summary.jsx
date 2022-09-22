import s from './Summary.module.scss';

const Summary = () => {
  return (
    <div className={s.summary}>
      <div className="container">
        <div className={s.summary_contant}>
          <div className={s.summary_table}>
            <h2 className={s.summary_title}>Summary for DATA</h2>
            <table className={s.summary_text}>
              <tbody>
                <tr>
                  <td>Left</td>
                  <td> 000</td>
                  <td>kcal</td>
                </tr>
                <tr>
                  <td>Consumed</td>
                  <td> 000</td>
                  <td>kcal</td>
                </tr>
                <tr>
                  <td>Daily rate</td>
                  <td> 000</td>
                  <td>kcal</td>
                </tr>
                <tr>
                  <td>n% of normal</td>
                  <td> 000</td>
                  <td>kcal</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={s.summary_recommendation}>
            <h2 className={s.summary_title}>Food not recommended</h2>
            <p className={s.summary_text}>Your diet will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
