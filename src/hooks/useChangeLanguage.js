import { useDispatch } from 'react-redux';
import i18n from '../utils/i18n';
import { setLanguage } from '../store/i18n';

const useChangeLanguage = () => {
  const dispatch = useDispatch();

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language, () => {
      dispatch(setLanguage(i18n.language));
    });
  };

  return handleChangeLanguage;
};

export default useChangeLanguage;
