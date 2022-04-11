import React from 'react';

import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
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
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
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
      <Grid container display={'flex'} justifyContent="center">
        <Grid item md={8} textAlign={'center'}>
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
              sx={{ transform: 'scale(1.8)', m: 12 }}
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
          <Grid mt={5} display="flex" justifyContent="center" gap={2}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                navigate('/feedback/thankyou');
              }}
            >
              Send feedback
            </Button>
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
