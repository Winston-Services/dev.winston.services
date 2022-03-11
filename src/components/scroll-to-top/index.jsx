import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history }) {
  useEffect(() => {
    const scrollListener = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      scrollListener();
    };
  }, []);

  return null;
}

export default withRouter(ScrollToTop);
