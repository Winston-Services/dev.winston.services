import React from 'react';

export const useToolbar = () => {
  const [open, setOpen] = React.useState(false);
  const [buttons, setButtons] = React.useState({});

  const handleToggleToolbar = (id) => {
    if (!buttons[id]) {
      setButtons((prevButtons) => ({
        ...Object.fromEntries(
          Object.keys(prevButtons).map((key) => [key, false])
        ),
        [id]: true,
      }));
      if (!open) {
        setOpen(true);
      }
    } else {
      if (open) {
        setButtons((prevButtons) => ({
          ...Object.fromEntries(
            Object.keys(prevButtons).map((key) => [key, false])
          ),
          [id]: false,
        }));
        setOpen(false);
      }
    }
  };

  const handleCloseToolbar = () => {
    setOpen(false);
    setButtons((prevButtons) =>
      Object.fromEntries(Object.keys(prevButtons).map((key) => [key, false]))
    );
  };

  return {
    open,
    buttons,
    setButtons,
    handleToggleToolbar,
    handleCloseToolbar,
  };
};

export default useToolbar;
