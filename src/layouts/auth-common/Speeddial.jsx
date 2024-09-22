import * as React from 'react';

import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import SaveIcon from '@mui/icons-material/Save';
import ShareIcon from '@mui/icons-material/Share';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { useNavigate } from 'react-router-dom';

export default function Speeddial() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = (action) => {
    if (!action) {
      setOpen(false);
    }
    switch (action.name) {
      case 'News':
        navigate('/news');
        break;
      case 'Receive':
        navigate('/dashboard/receive');
        break;
      case 'Send':
        navigate('/dashboard/send');
        break;
      default:
        setOpen(false);
    }
  };

  const actions = [
    { icon: <PrintIcon />, name: 'Send' },
    { icon: <ShareIcon />, name: 'Receive' },
    { icon: <SaveIcon />, name: 'Messages' },
    { icon: <FileCopyIcon />, name: 'News' },
  ];

  return (
    <SpeedDial
      ariaLabel="SpeedDial"
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
      }}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          tooltipOpen
          onClick={() => handleClose(action)}
        />
      ))}
    </SpeedDial>
  );
}
