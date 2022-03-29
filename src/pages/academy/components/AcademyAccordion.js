import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
  Grid,
  Link,
} from '@mui/material';

import { ReactComponent as PlayCircleIcon } from './../../../assets/play-circle.svg';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ExpandMore } from '@mui/icons-material';
import { useNavigate } from 'react-router';

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
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
      ],
    },
    {
      title: 'How do crypto payments work?',
      content: [
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
      ],
    },
    {
      title: 'Crypto cards for payments',
      content: [
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
      ],
    },
    {
      title: 'What are the advantages of crypto payments?',
      content: [
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
      ],
    },
    {
      title: 'What are the disadvantages of cryptocurrency payments?',
      content: [
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
        {
          title: 'Introduction how to design a NFT card within 25 min',
          rating: '4.7 (121 review)',
          duration: '5 min',
        },
      ],
    },
  ];

  return (
    <div>
      {data.map((items, index) => (
        <Accordion
          disableGutters
          elevation={0}
          key={items.title + index}
          expanded={expanded === items.title}
          onChange={handleChange(items.title)}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            sx={{ px: 4, py: 1 }}
            aria-controls={`${items.title}-content`}
          >
            <Typography variant="h6">{items.title}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 4, py: 1 }}>
            {items.content.map((item, index) => (
              <Grid
                key={items.title + item.title + index}
                display="flex"
                justifyContent="space-between"
                sx={{ pb: 2.5 }}
              >
                <Grid display="flex" alignItems="center" gap={1.25}>
                  <PlayCircleIcon />
                  <Link variant="h6">{item.title}</Link>
                </Grid>

                <Grid gap={3} sx={{ display: { md: 'flex', xs: 'none' } }}>
                  <Grid display="flex" alignItems="center" gap={1}>
                    <StarIcon sx={{ color: '#FFD215' }} />
                    <Typography variant="subtitle1">{item.rating}</Typography>
                  </Grid>
                  <Grid display="flex" alignItems="center" gap={1}>
                    <AccessTimeIcon />
                    <Typography variant="subtitle1">{item.duration}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
            {data.length - 1 === index ? (
              <Grid
                display="flex"
                gap={2.5}
                justifyContent="center"
                mt={1}
                mb={3}
              >
                <Button variant="contained" color="secondary">
                  Get your NFT certificate
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => navigate('/academy/voting')}
                >
                  Give a voting
                </Button>
              </Grid>
            ) : (
              ''
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default AcademyAccordion;
