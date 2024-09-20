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
          subTitle: 'Operational',
        },
        {
          title: 'Client',
          subTitle: 'Operational',
        },
      ],
    },
    {
      title: 'Winston Dapp',
      content: [
        {
          title: 'Web Site',
          subTitle: 'Build v1.0.0',
        },
        {
          title: 'Web App',
          subTitle: 'Build v1.0.0',
        },
        {
          title: 'Desktop',
          subTitle: 'Build v1.0.0',
        },
      ],
    },
    {
      title: 'Winston Services',
      content: [
        {
          title: 'Fish4Fun Discord Game',
          subTitle: 'Operational',
        },
        {
          title: 'Winston Discord Bot',
          subTitle: 'Operational',
        },
        {
          title: 'Winston Shopping Cart',
          subTitle: 'Operational',
        },
        {
          title: 'Winston Crowd Funding',
          subTitle: 'Operational',
        },
        {
          title: 'Winston NFT Marketplace',
          subTitle: 'Degraded Performance',
        },
        {
          title: 'Winston Swap',
          subTitle: 'Degraded Performance',
        },
        {
          title: 'Winston Academy',
          subTitle: 'Operational',
        },
        {
          title: 'Winston Staking',
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
