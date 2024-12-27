import React from 'react';

import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Grid,
  Link,
} from '@mui/material';

function NetworkStatusAccordion() {
  const [expanded, setExpanded] = React.useState('');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const data = [
    {
      title: 'Winston Socket Server',
      content: [
        {
          title: 'Node',
          subTitle: '1',
        },
        {
          title: 'Clients',
          subTitle: '1',
        },
      ],
    },
    {
      title: 'Winston Dapp',
      content: [
        {
          title: 'Winston Academy',
          subTitle: 'In Development',
        },
        {
          title: 'Winston Voting',
          subTitle: 'In Development',
        },
        {
          title: 'Winston Swap',
          subTitle: 'In Development',
        },
        {
          title: 'Winston Crowd Funding',
          subTitle: 'In Development',
        },
        {
          title: 'Winston NFT Marketplace',
          subTitle: 'In Development',
        },
        {
          title: 'Winston Staking',
          subTitle: 'In Development',
        },
        {
          title: 'Winston Bingo',
          subTitle: 'In Development',
        },
        {
          title: 'Winston Lottery',
          subTitle: 'In Development',
        },
      ],
    },
    {
      title: 'Winston Services',
      content: [
        {
          title: 'Winston Shopping Cart',
          subTitle: 'Demo',
        },
        {
          title: 'Fish4Fun',
          subTitle: 'Operational',
        },
        {
          title: 'Winston on Discord',
          subTitle: 'Operational',
        },
        
      ],
    },
    {
      title: 'Powered By Winston',
      content: [
        {
          title: 'Winston Wallet',
          subTitle: 'In Development',
        },
        {
          title: 'Billing Services',
          subTitle: 'In Development',
        },
        {
          title: 'Merchant Services',
          subTitle: 'In Development',
        },
        {
          title: 'Card Services',
          subTitle: 'In Development',
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
            <Typography variant="h6">{items.title}</Typography>
          </AccordionSummary>
          <AccordionDetails variant="transparent" sx={{ py: 1 }}>
            {items.content.map((item, index) => (
              <Grid
                key={items.title + item.title + index}
                display="flex"
                justifyContent="space-between"
                sx={{ pb: 2.5 }}
              >
                <Grid display="flex" alignItems="center" gap={1.25}>
                  <Link variant="h6">{item.title}</Link>
                </Grid>

                <Grid gap={3} sx={{ display: { md: 'flex', xs: 'none' } }}>
                  <Grid display="flex" alignItems="center" gap={1}>
                    <Typography variant="subtitle1">{item.subTitle}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default NetworkStatusAccordion;
