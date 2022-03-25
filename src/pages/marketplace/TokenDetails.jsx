import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Link,
  Paper,
  Chip,
  IconButton,
  Collapse,
  Box,
} from '@mui/material';
import TokenDetailsTable from './components/TokenDetailsTable';

import ProductImage from '../../assets/product_image.png';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const nftDetails = [
  ['Background', 'Purple'],
  ['Mouth', 'Lower Teeth'],
  ['Nose', 'Heart'],
  ['Body', 'Pink'],
  ['Hat', 'Villa'],
  ['Mouth', 'Lower Teeth'],
  ['Nose', 'Heart'],
];

function TokenDetails() {
  const [open, setOpen] = React.useState(false);
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item md={8}>
          <Typography variant="h3">Details</Typography>

          <Grid display={'flex'} mt={7}>
            <Typography variant="subtitle1" sx={{ width: '250px' }}>
              Owner
            </Typography>
            <Link variant="subtitle1">
              cro1f7umg64a0hzqdevg3z8wfnm4f3lm3q4p5yljez
            </Link>
          </Grid>
          <Grid display={'flex'} mt={2}>
            <Typography variant="subtitle1" sx={{ width: '250px' }}>
              Denom ID
            </Typography>
            <Typography variant="subtitle1">
              c27a3f21d814ca345981f81e8aafc16bb
            </Typography>
          </Grid>
          <Grid display={'flex'} mt={2}>
            <Typography variant="subtitle1" sx={{ width: '250px' }}>
              Denom Name
            </Typography>
            <Typography variant="subtitle1">
              c27a3f21d814ca345981f81e8aafc16bb
            </Typography>
          </Grid>
          <Grid display={'flex'} mt={2}>
            <Typography variant="subtitle1" sx={{ width: '250px' }}>
              Token ID
            </Typography>
            <Typography variant="subtitle1">edition1</Typography>
          </Grid>
          <Grid display={'flex'} mt={2}>
            <Typography variant="subtitle1" sx={{ width: '250px' }}>
              NFT Name
            </Typography>
            <Typography variant="subtitle1">PsychoKitty #8841</Typography>
          </Grid>
          <Grid display={'flex'} mt={2}>
            <Typography variant="subtitle1" sx={{ width: '250px' }}>
              Creator
            </Typography>
            <Link variant="subtitle1">
              cro1vaye3e4gn89f5mw9gjlsuft38m3t35v0s67rcg
            </Link>
          </Grid>

          <Grid container mt={6.25} spacing={2.5}>
            {nftDetails.map((item, index) => {
              return (
                <Grid item lg={3} key={item[0] + index}>
                  <Paper elevation={0} sx={{ p: 2.5, textAlign: 'center' }}>
                    <Typography>{item[0]}</Typography>
                    <Typography mt={2.5}>{item[1]}</Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
          <Grid mt={6.25}>
            <Paper elevation={0} sx={{ p: 2.5 }}>
              <Typography variant="h6">Transactions</Typography>
              <TokenDetailsTable />
            </Paper>
          </Grid>
        </Grid>
        <Grid item md={4}>
          <img
            src={ProductImage}
            style={{
              width: '100%',
              borderRadius: '20px',
            }}
          />
          <Typography variant="h5" fontWeight={'800'} sx={{ mt: 4 }}>
            PsychoMolly #3671
          </Typography>
          <Typography variant="subtitle2" sx={{ mt: 0.5 }}>
            Unique, algorithmically generated PsychoMolly living on the
            blockchain.
          </Typography>

          <Grid sx={{ mt: 2.5 }}>
            <Chip variant="filled" label="Art" sx={{ mr: 1.25 }} />
            <Chip variant="filled" label="Market Place" />
          </Grid>

          <Paper elevation={0} sx={{ p: 2.5, mt: 5 }}>
            <Grid display="flex" alignItems={'center'}>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <RemoveIcon
                    sx={{ background: '#EF5DA8', borderRadius: '25px' }}
                  />
                ) : (
                  <AddIcon
                    sx={{ background: '#EF5DA8', borderRadius: '25px' }}
                  />
                )}
              </IconButton>
              <Typography variant="subtitle1" ml={1}>
                Metadata
              </Typography>
            </Grid>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box>
                <Typography>Coming soon..!</Typography>
                <Typography>Coming soon..!</Typography>
                <Typography>Coming soon..!</Typography>
                <Typography>Coming soon..!</Typography>
                <Typography>Coming soon..!</Typography>
                <Typography>Coming soon..!</Typography>
                <Typography>Coming soon..!</Typography>
                <Typography>Coming soon..!</Typography>
                <Typography>Coming soon..!</Typography>
                <Typography>Coming soon..!</Typography>
              </Box>
            </Collapse>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TokenDetails;
