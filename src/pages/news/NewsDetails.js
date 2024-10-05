import React from 'react';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {
  Grid,
  Typography,
  Container,
  Button,
  Chip,
  IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import ImageData1 from './../../assets/news_tab_image_1.png';
import { ReactComponent as ShareIcon } from './../../assets/share_icon.svg';

function NewsDetails() {
  const navigate = useNavigate();
  
  return (
    <Container>
      <Grid
        item
        xs
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Button
          sx={{ px: 3, py: 1.5 }}
          startIcon={<ArrowBackIosIcon />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
        <Typography variant="subtitle2">3 Days Ago</Typography>
      </Grid>
      <Grid container item xs={12} mt={3}>
        <img
          src={ImageData1}
          alt="graph"
          width="100%"
          height="500px"
          style={{ borderRadius: '20px' }}
        />
        {/* <img src={graph} alt="graph" className="blurImage" />
        <img src={graph} alt="graph" className="overImage" /> */}
      </Grid>

      <Grid
        item
        xs
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mt={2.5}
      >
        <Chip variant="filled" label="NFT Category" />
        <Grid item display="flex" alignItems="center" gap={1.5}>
          <Grid item display="flex" alignItems="center">
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <Typography>500K</Typography>
          </Grid>
          <Grid item display="flex" alignItems="center">
            <IconButton>
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography>800K</Typography>
          </Grid>
          <Grid item display="flex" alignItems="center">
            <IconButton>
              <ShareIcon />
            </IconButton>
            <Typography>10K</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid display="flex" flexDirection="column" gap={4} mt={3}>
        <Typography variant="h3">
          The Non-Fungible Token Bible: Everything you need to know about NFTs
        </Typography>
        <Typography variant="subtitile1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Typography>
        <Typography variant="subtitile1">
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout. The
          point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using &apos;Content here,
          content here&apos;, making it look like readable English.
        </Typography>
        <Typography variant="subtitile1">
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for &apos;lorem
          ipsum&apos; will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like).
        </Typography>
      </Grid>
    </Container>
  );
}

export default NewsDetails;
