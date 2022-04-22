import React from 'react';

import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import VerifiedIcon from '@mui/icons-material/Verified';
import {
  Grid,
  Typography,
  Link,
  Paper,
  IconButton,
  Container,
  Divider,
} from '@mui/material';
import { PropTypes } from 'prop-types';

import user_profile from '../../assets/user_profile.png';
import user_profile_cover from '../../assets/user_profile_cover.png';
import UserProfileTabs from '../marketplace/components/UserProfileTabs';

const userData = [
  {
    name: 'Likes',
    number: '131.8K',
  },
  {
    name: 'Views',
    number: '2.6M',
  },
  {
    name: 'Created',
    number: '21K',
  },
  {
    name: 'Minted',
    number: '21.1K',
  },
];

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = React.useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Typography>
      {isReadMore ? text.slice(0, 280) + '... ' : text}
      <Link variant="" onClick={() => toggleReadMore()}>
        {isReadMore ? 'Read more' : 'Show less'}
      </Link>
    </Typography>
  );
};
ReadMore.propTypes = {
  children: PropTypes.string,
};

function UserProfile() {
  return (
    <Grid container item xs={12} sx={{ mt: { xs: '-40px', sm: '-80px' } }}>
      <img
        src={user_profile_cover}
        style={{
          width: '100%',
          height: '338px',
          objectFit: 'cover',
        }}
      />
      <Container>
        <Grid container display={'flex'} justifyContent="end" mt={-10}>
          <Paper opacity="50">
            <IconButton>
              <Instagram sx={{ fontSize: { xs: 20, sm: 25 } }} />
            </IconButton>
            <IconButton>
              <Twitter sx={{ fontSize: { xs: 20, sm: 25 } }} />
            </IconButton>
            <IconButton>
              <Facebook sx={{ fontSize: { xs: 20, sm: 25 } }} />
            </IconButton>
          </Paper>
        </Grid>
        <Grid container display="flex" justifyContent={'space-between'} mt={5}>
          <Grid item display={'flex'}>
            <Grid
              item
              sx={{
                mt: { xs: '-50px', sm: '-90px', md: '-100px' },
                width: { xs: '135px', sm: '200px', md: '245px' },
              }}
            >
              <img
                src={user_profile}
                style={{
                  border: '10px solid #271d5a',
                  borderRadius: '50%',
                  width: '100%',
                  height: 'auto',
                }}
              />
            </Grid>
            <Grid item m={3}>
              <Typography variant="h4" fontWeight={800}>
                Winston Art
              </Typography>
              <Grid display="flex" alignItems="center">
                <Typography variant="h6" sx={{ mr: 2 }}>
                  winston_art
                </Typography>
                <VerifiedIcon sx={{ color: '#3D96FF' }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item display="flex" sx={{ mt: { xs: 2, sm: 4 } }}>
            {userData?.map((item, index) => {
              return (
                <Grid item key={item.name} display="flex">
                  <Grid key={item.name + index} px={2}>
                    <Typography variant="subtitle2">{item.name}</Typography>
                    <Typography variant="subtitle1" fontWeight={700}>
                      {item.number}
                    </Typography>
                  </Grid>
                  {userData.length - 1 !== index ? (
                    <Divider orientation="vertical" sx={{ height: '50px' }} />
                  ) : null}
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item md={12} mt={5}>
          <ReadMore>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.Read More GeeksforGeeks: A Computer
            Science portal for geeks. It contains well written, well thought and
            well explained computer science, programming articles and quizzes.
            It provides a variety of services for you to learn, so thrive and
            also have fun! Free Tutorials, Millions of Articles, Live, Online
            and Classroom Courses ,Frequent Coding Competitions, Webinars by
            Industry Experts, Internship opportunities, and Job Opportunities.
            Knowledge is power!
          </ReadMore>
        </Grid>
        <Grid item md={12} mt={2}>
          <UserProfileTabs />
        </Grid>
      </Container>
    </Grid>
  );
}

export default UserProfile;
