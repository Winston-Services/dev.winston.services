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
      title: 'Winston app wallet',
      content: [
        {
          title: 'Buy',
          subTitle: 'Operational',
        },
        {
          title: 'Sell',
          subTitle: 'Operational',
        },
        {
          title: 'Send',
          subTitle: 'Operational',
        },
        {
          title: 'Withdrawals',
          subTitle: 'Operational',
        },
        {
          title: 'Deposits',
          subTitle: 'Operational',
        },
        {
          title: 'Fiat Wallets',
          subTitle: 'Operational',
        },
      ],
    },
    {
      title: 'Winston app',
      content: [
        {
          title: 'Main Page',
          subTitle: 'Operational',
        },
        {
          title: 'Track Coins',
          subTitle: 'Operational',
        },
        {
          title: 'Notifications',
          subTitle: 'Degraded Performance',
        },
        {
          title: 'Onboarding',
          subTitle: 'Operational',
        },
        {
          title: 'Card and Staking',
          subTitle: 'Operational',
        },
      ],
    },
    {
      title: 'Winston exchange (Spot/Derivatives)',
      content: [
        {
          title: 'API Server - Spot/Margin',
          subTitle: 'Operational',
        },
        {
          title: 'API Server - Derivatives',
          subTitle: 'Operational',
        },
        {
          title: 'Web Server - Spot/Margin',
          subTitle: 'Operational',
        },
        {
          title: 'Web Server - Derivatives',
          subTitle: 'Operational',
        },
        {
          title: 'Withdrawals',
          subTitle: 'Degraded Performance',
        },
        {
          title: 'Deposits',
          subTitle: 'Degraded Performance',
        },
        {
          title: 'Exchange App',
          subTitle: 'Operational',
        },
      ],
    },
    {
      title: 'NFT',
      content: [
        {
          title: 'NFT Login',
          subTitle: 'Operational',
        },
        {
          title: 'NFT Website',
          subTitle: 'Operational',
        },
        {
          title: 'NFT Purchase',
          subTitle: 'Operational',
        },
        {
          title: 'NFT Sale',
          subTitle: 'Operational',
        },
        {
          title: 'NFT Withdraw',
          subTitle: 'Operational',
        },
      ],
    },
    {
      title: 'Pay',
      content: [
        {
          title: 'Pay Your Friends',
          subTitle: 'Operational',
        },
        {
          title: 'Giftcard',
          subTitle: 'Operational',
        },
        {
          title: 'Airtime',
          subTitle: 'Operational',
        },
        {
          title: 'Checkout, Invoice, Subscriptions',
          subTitle: 'Operational',
        },
        {
          title: 'Refunds',
          subTitle: 'Operational',
        },
        {
          title: 'Merchant Dashboard',
          subTitle: 'Operational',
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
