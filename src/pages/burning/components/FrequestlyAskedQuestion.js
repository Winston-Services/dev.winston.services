import React from 'react';

import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Grid,
} from '@mui/material';

function FrequestlyAskedQuestion() {
  const [expanded, setExpanded] = React.useState('What is Coin Burn?');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const data = [
    {
      question: 'What is Coin Burn?',
      answer: [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      ],
    },
    {
      question: 'How does coin burn work?',
      answer: [
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      ],
    },
    {
      question: 'Formula calculation of coin burn?',
      answer: [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      ],
    },
  ];

  return (
    <div>
      <Typography variant="h5" mb={2}>
        Frequestly asked question
      </Typography>
      {data.map((items) => (
        <Accordion
          variant="transparent"
          disableGutters
          elevation={0}
          key={items.question}
          expanded={expanded === items.question}
          onChange={handleChange(items.question)}
        >
          <AccordionSummary
            variant="transparent"
            expandIcon={<ExpandMore />}
            sx={{ py: 1 }}
            aria-controls={`${items.question}-content`}
          >
            <Typography variant="h6">{items.question}</Typography>
          </AccordionSummary>
          <AccordionDetails variant="transparent" sx={{ py: 1 }}>
            {items.answer.map((answer) => (
              <Grid key={items.question + answer} mb={2.5}>
                <Typography variant="subtitle1">{answer}</Typography>
              </Grid>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default FrequestlyAskedQuestion;
