import { useSelector } from 'react-redux';

import s from './Summary.module.scss';

const Summary = ({ date }) => {
  const summDaySumm = useSelector(state => state.day.daySummary);
  const summNotAllowed = useSelector(
    state => state.dailyRate.notAllowedProducts
  );

  const summInfo = Object.keys(summDaySumm);
  console.log(summInfo);
  return (
    <div className={s.summary}>
      <div className={s.summary_contant}>
        <div className={s.summary_table}>
          <h2 className={s.summary_title}>Summary for {date}</h2>
          <table className={s.summary_text}>
            <tbody>
              <tr>
                <td className={s.summary_column}>Left</td>
                <td>
                  {summInfo.length > 0
                    ? Math.max(summDaySumm.kcalLeft.toFixed(0), 0)
                    : `000`}
                </td>

                <td>kcal</td>
              </tr>
              <tr>
                <td>Consumed</td>
                <td>
                  {summInfo.length > 0
                    ? summDaySumm.kcalConsumed.toFixed(0)
                    : `000`}
                </td>
                <td>kcal</td>
              </tr>
              <tr>
                <td>Daily rate</td>
                <td>
                  {summInfo.length > 0
                    ? summDaySumm.dailyRate.toFixed(0)
                    : `000`}
                </td>
                <td>kcal</td>
              </tr>
              <tr>
                <td>n% of normal</td>
                <td>
                  {summInfo.length > 0
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
  );
};

export default Summary;
