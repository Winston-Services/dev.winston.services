import { useSnackbar } from 'notistack';

const useAppSnackbar = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleClick = (message = 'I love snacks.') => {
    enqueueSnackbar(message);
  };

  const handleClickVariant =
    (message = 'This is a success message!', variant) =>
    () => {
      // variant could be success, error, warning, info, or default
      enqueueSnackbar(message, { variant });
    };

  return {
    enqueueSnackbar,
    closeSnackbar,
    handleClick,
    handleClickVariant,
  };
};

export default useAppSnackbar;
