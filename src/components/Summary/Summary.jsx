import { useSelector } from 'react-redux';

import s from './Summary.module.scss';

const Summary = () => {
  const summDaySumm = useSelector(state => state.day.day.daySummary);
  const summNotAllowed = useSelector(
    state => state.dailyRate.notAllowedProducts
  );
  // let array = summNotAllowed.filter(({ el, idx }) => idx < 10);
  // console.log(array);
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
                  <td>
                    {Boolean(summDaySumm)
                      ? Math.max(summDaySumm.kcalLeft.toFixed(0), 0)
                      : `000`}
                  </td>

                  <td>kcal</td>
                </tr>
                <tr>
                  <td>Consumed</td>
                  <td>
                    {Boolean(summDaySumm)
                      ? summDaySumm.kcalConsumed.toFixed(0)
                      : `000`}
                  </td>
                  <td>kcal</td>
                </tr>
                <tr>
                  <td>Daily rate</td>
                  <td>
                    {Boolean(summDaySumm)
                      ? summDaySumm.dailyRate.toFixed(0)
                      : `000`}
                  </td>
                  <td>kcal</td>
                </tr>
                <tr>
                  <td>n% of normal</td>
                  <td>
                    {Boolean(summDaySumm)
                      ? summDaySumm.percentsOfDailyRate.toFixed(0)
                      : `000`}
                    %
                  </td>
                  <td>kcal</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={s.summary_recommendation}>
            <h2 className={s.summary_title}>Food not recommended</h2>
            <p className={s.summary_text}>
              {summNotAllowed?.slice(0, 5).join(', ')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
