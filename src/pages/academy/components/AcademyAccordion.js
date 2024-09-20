import React from 'react';

import { ExpandMore } from '@mui/icons-material';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
  Grid,
  Link,
} from '@mui/material';
import { useNavigate } from 'react-router';

// import { ReactComponent as PlayCircleIcon } from './../../../assets/play_circle.svg';

function AcademyAccordion() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState('Introduction');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const data = [
    {
      title: 'Introduction',
      content: [
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockOpenIcon fontSize="8px" />,
          view: 'Preview',
        },
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockOpenIcon fontSize="8px" />,
          view: 'Preview',
        },
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockOpenIcon fontSize="8px" />,
          view: 'Preview',
        },
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockOpenIcon fontSize="8px" />,
          view: 'Preview',
        },
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockOpenIcon fontSize="8px" />,
          view: 'Preview',
        },
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockIcon fontSize="8px" />,
          view: 'Lock',
        },
      ],
    },
    {
      title: 'How do crypto payments work?',
      content: [
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockOpenIcon fontSize="8px" />,
          view: 'Preview',
        },
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockOpenIcon fontSize="8px" />,
          view: 'Preview',
        },
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockOpenIcon fontSize="8px" />,
          view: 'Preview',
        },
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockOpenIcon fontSize="8px" />,
          view: 'Preview',
        },
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockOpenIcon fontSize="8px" />,
          view: 'Preview',
        },
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockIcon fontSize="8px" />,
          view: 'Lock',
        },
      ],
    },
    {
      title: 'Crypto cards for payments',
      content: [
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockOpenIcon fontSize="8px" />,
          view: 'Preview',
        },
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockOpenIcon fontSize="8px" />,
          view: 'Preview',
        },
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockOpenIcon fontSize="8px" />,
          view: 'Preview',
        },
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockOpenIcon fontSize="8px" />,
          view: 'Preview',
        },
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockOpenIcon fontSize="8px" />,
          view: 'Preview',
        },
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockIcon fontSize="8px" />,
          view: 'Lock',
        },
      ],
    },
    {
      title: 'What are the advantages of crypto payments?',
      content: [
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockOpenIcon fontSize="8px" />,
          view: 'Preview',
        },
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockOpenIcon fontSize="8px" />,
          view: 'Preview',
        },
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockOpenIcon fontSize="8px" />,
          view: 'Preview',
        },
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockOpenIcon fontSize="8px" />,
          view: 'Preview',
        },
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockOpenIcon fontSize="8px" />,
          view: 'Preview',
        },
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockIcon fontSize="8px" />,
          view: 'Lock',
        },
      ],
    },
    {
      title: 'What are the disadvantages of cryptocurrency payments?',
      content: [
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockOpenIcon fontSize="8px" />,
          view: 'Preview',
        },
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockOpenIcon fontSize="8px" />,
          view: 'Preview',
        },
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockOpenIcon fontSize="8px" />,
          view: 'Preview',
        },
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockOpenIcon fontSize="8px" />,
          view: 'Preview',
        },
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockOpenIcon fontSize="8px" />,
          view: 'Preview',
        },
        {
          title: 'Introduction how to design a NFT card',
          icon: <LockIcon fontSize="8px" />,
          view: 'Lock',
        },
      ],
    },
  ];

  return (
    <div>
      {data.map((items, index) => (
        <Accordion
          variant="transparent"
          disableGutters
          elevation={0}
          key={items.title + index}
          expanded={expanded === items.title}
          onChange={handleChange(items.title)}
        >
          <AccordionSummary
            variant="transparent"
            expandIcon={<ExpandMore />}
            sx={{ py: 1 }}
            aria-controls={`${items.title}-content`}
          >
            <Typography variant="h5">{items.title}</Typography>
          </AccordionSummary>
          <AccordionDetails variant="transparent" sx={{ py: 1 }}>
            {items.content.map((item, index) => (
              <Grid
                container
                key={items.title + item.title + index}
                display="flex"
                justifyContent="space-between"
                alignItems={'center'}
                sx={{ pb: 2.5 }}
              >
                <Grid
                  item
                  display="flex"
                  alignItems="center"
                  gap={1.25}
                  // sx={{ width: { xs: 0.45, sm: 0.7, md: 'auto' } }}
                >
                  {/* <Grid
                    display={'flex'}
                    alignItems="center"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                  >
                    <PlayCircleIcon />
                  </Grid> */}
                  <Link
                    // noWrap
                    variant="h6"
                    onClick={() => navigate('/academy/lesson-details')}
                  >
                    {item.title}
                  </Link>
                </Grid>

                <Grid pr={0.5}>
                  {item.icon}
                  {/* <Link variant="subtitle1">{item.view}</Link> */}
                </Grid>
              </Grid>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
      <Grid textAlign="center" mt={1} mb={3}>
        <Button
          variant="contained"
          color="secondary"
          sx={{ width: { xs: '100%', sm: 'auto' }, m: 1 }}
          onClick={() => navigate('/certificate')}
        >
          Get your NFT certificate
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate('/academy/rating')}
          sx={{ width: { xs: '100%', sm: 'auto' }, m: 1 }}
        >
          Give a rating
        </Button>
      </Grid>
    </div>
  );
}

export default AcademyAccordion;
