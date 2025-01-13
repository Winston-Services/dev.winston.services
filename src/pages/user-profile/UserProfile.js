import React from 'react';
import { useParams } from 'react-router-dom';

import { Facebook, Instagram, Twitter, Verified } from '@mui/icons-material';
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

import useUser from '../../hooks/useUser';
import useApi from '../../hooks/useApi';

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = React.useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Typography>
      {isReadMore ? text.slice(0, 280) + '... ' : text}
      <Link
        variant="body2"
        onClick={() => toggleReadMore()}
        sx={{ ml: 1, cursor: 'pointer' }}
      >
        {isReadMore ? 'Read more' : 'Show less'}
      </Link>
    </Typography>
  );
};
ReadMore.propTypes = {
  children: PropTypes.string,
};

function UserProfile() {
  const user = useUser();
  const api = useApi();
  const [getUserProfile] = api.endpoints.getUserProfile.useLazyQuery();
  const [userProfile, setUserProfile] = React.useState(null);
  const [userProfileLoading, setUserProfileLoading] = React.useState(false);
  const [userProfileError, setUserProfileError] = React.useState(null);
  const [userData, setUserData] = React.useState([]);
  const { userId } = useParams();

  React.useEffect(() => {
    if (userProfileLoading) return;
    setUserProfileLoading(true);
    const fetchUserProfile = async () => {
      if (!userId && !user.profile.username) {
        setUserProfileLoading(false);
        return;
      };
      try {
        const res = await getUserProfile(userId ? userId : user.profile.username);
        console.log(res.data);
        const { likes, views, shares } = res.data.data.profile;
        setUserData([
          {
            name: 'Likes',
            number: likes.length <= 1000 ? likes : `${Math.round(likes / 1000)}k`
          },
          {
            name: 'Views',
            number: views.length <= 1000 ? views : `${Math.round(views / 1000)}k`
          },
          {
            name: 'Shares',
            number: shares.length <= 1000 ? shares : `${Math.round(shares / 1000)}k`
          },
        ]);
        setUserProfile(res.data.data.profile);
        setUserProfileLoading(false);
      } catch (error) {
        console.log(error);
        setUserProfileError(error);
        setUserProfileLoading(false);
      }
    };
    fetchUserProfile();
  }, [getUserProfile, userId, user.info.email]); // Added dependencies to useEffect

  if (userProfileLoading) {
    return <div>Loading...</div>;
  }
  if (userProfileError) {
    return <div>Error: {userProfileError.message}</div>;
  }
  if (!userProfile) {
    return <div>The username or profile was not found</div>;
  }
  // console.log(userProfile);
  return (
    <Grid container item xs={12} sx={{ mt: { xs: '-40px', sm: '-80px' } }}>
      <img
        src={userProfile.banner ? userProfile.banner : user_profile_cover}
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
                src={userProfile.avatar ? userProfile.avatar : user_profile}
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
                {userProfile.username}
              </Typography>
              <Grid display="flex" alignItems="center">
                <Typography variant="h6" sx={{ mr: 2 }}>
                  {userProfile.bio}
                </Typography>
                <Verified sx={{ color: '#3D96FF' }} />
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
