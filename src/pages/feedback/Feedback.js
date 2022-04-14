import React from 'react';

import {
  SentimentDissatisfied,
  SentimentSatisfied,
  SentimentSatisfiedAlt,
  SentimentVeryDissatisfied,
  SentimentVerySatisfied,
} from '@mui/icons-material';
import {
  Typography,
  Container,
  Grid,
  Rating,
  TextField,
  Button,
} from '@mui/material';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router';

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfied sx={{ fontSize: 50 }} />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfied sx={{ fontSize: 50 }} />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfied sx={{ fontSize: 50 }} />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAlt sx={{ fontSize: 50 }} />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfied sx={{ fontSize: 50 }} />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return (
    <span {...other} style={{ padding: '5px' }}>
      {customIcons[value].icon}
    </span>
  );
}

function Feedback() {
  const navigate = useNavigate();
  return (
    <Container>
      <Grid item textAlign={'center'}>
        <Typography variant="h3">
          Feel free to drop us your feedback.
        </Typography>
        <Typography variant="h5" mt={2}>
          How satisfied are you overall with the support of Winston.
        </Typography>
        <Grid textAlign={'center'}>
          <Rating
            name="highlight-selected-only"
            defaultValue={2}
            sx={{ my: 12 }}
            IconContainerComponent={IconContainer}
            highlightSelectedOnly
          />
        </Grid>
        <Grid sx={{ px: { xs: 0, md: 6, lg: 10 } }}>
          <TextField
            fullWidth
            variant="outlined"
            multiline={true}
            rows={12}
            label={'Message'}
            placeholder={'Please tell us your reason for giving this score'}
          />
        </Grid>
        <Grid
          container
          mt={5}
          display="flex"
          justifyContent={'center'}
          sx={{
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 1, sm: 2 },
          }}
        >
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                navigate('/feedback/thankyou');
              }}
            >
              Send feedback
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" type="submit">
              No! I don’t want to give feedback
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Feedback;
