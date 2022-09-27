import { Link } from 'react-router-dom';
import s from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <main>
      <div className="container">
        <h3 className={s.title}>404 Page not found</h3>
        <Link to="/main">
          <button type="button" className={s.button}>
            Go to main page
          </button>
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
