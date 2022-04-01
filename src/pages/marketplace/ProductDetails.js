import React from 'react';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FlagIcon from '@mui/icons-material/Flag';
import LinkIcon from '@mui/icons-material/Link';
import RedoIcon from '@mui/icons-material/Redo';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Typography,
  Paper,
  Grid,
  Button,
  Container,
  Chip,
  IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import ProductDetailsEthereum from '../../assets/product_details_ethereum.svg';
import ProductImage from '../../assets/product_image.png';
import ProductDetailTabs from './components/ProductDetailTabs';

function ProductDetails() {
  const navigate = useNavigate();
  const [isSticky, setSticky] = React.useState(true);

  const stickyRef = React.useRef(null);
  React.useEffect(() => {
    const handleScroll = () => {
      if (
        window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
      ) {
        if (isSticky === true) setSticky(false);
      } else {
        setSticky(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <Grid container sx={{ mt: { xs: 4, md: 12 } }}>
        <Grid item lg={12} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Button
            sx={{ p: 0 }}
            startIcon={<ArrowBackIosIcon />}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 3 }} ref={stickyRef}>
        <Grid item md={5} lg={5} sx={{ pr: { xs: 0, md: 3 } }}>
          <img
            src={ProductImage}
            style={{
              width: '100%',
              borderRadius: '20px',
            }}
          />
        </Grid>
        <Grid item md={7} lg={7}>
          <Grid
            display="flex"
            sx={{
              justifyContent: { xs: 'normal', sm: 'space-between' },
              flexDirection: { xs: 'column', sm: 'row' },
              mt: { xs: 2, sm: 0 },
            }}
          >
            <div>
              <Typography variant="h5">$451</Typography>
              <Typography variant="h5" fontWeight={'800'} sx={{ mt: 1 }}>
                PsychoMolly #3671
              </Typography>
            </div>
            <Grid sx={{ mt: { xs: 3, sm: 0 } }}>
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton>
                <VisibilityIcon />
              </IconButton>
              <IconButton>
                <RedoIcon />
              </IconButton>
              <IconButton>
                <FlagIcon />
              </IconButton>
            </Grid>
          </Grid>

          <Typography variant="subtitle2" sx={{ mt: 2 }}>
            Unique, algorithmically generated PsychoMolly living on the
            blockchain.
          </Typography>

          <Grid sx={{ mt: 2.5 }}>
            <Chip variant="filled" label="Art" sx={{ mr: 1.25 }} />
            <Chip variant="filled" label="Market Place" />
          </Grid>

          <Paper
            elevation={0}
            sx={{
              p: 2,
              borderRadius: 2,
              width: { xs: '100%', sm: '331px' },
              mt: 2.5,
            }}
          >
            <Typography variant="subtitle1">
              Sale ends February 11, 2022 at 9:50am IST
            </Typography>

            <Grid container display="flex" columnSpacing={2} sx={{ mt: 2 }}>
              <Grid item>
                <Typography variant="subtitle1">Days</Typography>
                <Typography variant="h5" fontWeight={700}>
                  02
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">Hours</Typography>
                <Typography variant="h5" fontWeight={700}>
                  15
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">Minutes</Typography>
                <Typography variant="h5" fontWeight={700}>
                  48
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">Hours</Typography>
                <Typography variant="h5" fontWeight={700}>
                  25
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          <Grid
            display={'flex'}
            alignItems={'center'}
            sx={{ mt: { xs: 2, sm: 3 } }}
          >
            <Typography variant="subtitle1" sx={{ mr: 1 }}>
              View Crypto.org Chain details
            </Typography>
            <LinkIcon />
          </Grid>

          <ProductDetailTabs />
        </Grid>
      </Grid>
      <div style={{ height: 180 }}>
        <Grid
          sx={{ mt: 3.75 }}
          container
          className={`${
            isSticky
              ? 'buyNowContainer buyNowContainerSticky'
              : 'buyNowContainer'
          }`}
        >
          <Grid item lg={12} sx={{ width: '100%' }}>
            <Paper
              elevation={0}
              sx={{ borderRadius: 1.25, p: { xs: 2.5, md: 3.5 } }}
            >
              <Container sx={{ p: 0 }}>
                <Grid
                  display="flex"
                  sx={{
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Grid display="flex" sx={{ width: '100%' }}>
                    <Grid sx={{ mr: 2.5 }}>
                      <img
                        src={ProductImage}
                        style={{ width: 100, height: 100, borderRadius: 5 }}
                      />
                    </Grid>
                    <div>
                      <Typography variant="h5">PsychoMolly #3671</Typography>

                      <Grid
                        display="flex"
                        alignItems="center"
                        sx={{ mt: 1.25 }}
                      >
                        <Grid sx={{ mr: 2.5 }}>
                          <img src={ProductDetailsEthereum} />
                        </Grid>
                        <Grid>
                          <Typography
                            variant="subtitle2"
                            sx={{ display: { xs: 'none', md: 'block' } }}
                          >
                            Minimum bid
                          </Typography>
                          <Grid display="flex">
                            <Typography variant="h5">0.5 </Typography>
                            <Typography
                              variant="subtitle2"
                              sx={{ alignSelf: 'end', ml: 0.5 }}
                            >
                              ($1,574.39)
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<ShoppingCartOutlinedIcon />}
                    sx={{
                      mt: { xs: 2, sm: 0 },
                      width: { xs: '100%', sm: '182px' },
                    }}
                  >
                    Buy Now
                  </Button>
                </Grid>
              </Container>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
export default ProductDetails;
