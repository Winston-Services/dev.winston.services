import React from 'react';

import {
  Button,
  Card,
  Container,
  Grid,
  Typography,
  Paper,
  Link,
} from '@mui/material';

import WinstonIcon from './../../assets/assets_winston_icon.svg';
import WhitePaperCard from './components/WhitePaperCard';

import './index.css';

const whitePaperData = [
  {
    image: '',
    title: 'Winston Whitepaper1',
    subtitle: '',
    page: 17,
    size: 1.27,
    pdfName: './assets/pdf/sample.pdf',
  },
  {
    image: '',
    title: 'Winston Whitepaper2',
    subtitle:
      'Winston Smart Chain: A Parallel Winston Chain to Enable Smart Contracts',
    page: 17,
    size: 1.27,
    pdfName: './assets/pdf/sample.pdf',
  },
];

const winstonLegalData = [
  {
    image: '',
    title: 'Winston articles of organization',
    subtitle: '',
    page: 17,
    size: 1.27,
    pdfName: './assets/pdf/MAD_Computer_Consulting_LLC_NDA.pdf',
  },
  {
    image: '',
    title: 'Winston non-disclosure agreement',
    subtitle:
      'Winston Smart Chain: A Parallel Winston Chain to Enable Smart Contracts',
    page: 17,
    size: 1.27,
    pdfName: './assets/pdf/MAD_Computer_Consulting_LLC_NDA.pdf',
  },
];

function WhitePapers() {
  const [viewDocument, setViewDocument] = React.useState({
    isViewDocument: false,
  });
  return !viewDocument.isViewDocument ? (
    <Container>
      <Typography variant="h3">Whitepaper</Typography>

      <Typography variant="h5" mt={5}>
        Winston Update
      </Typography>
      <Card elevation={0} sx={{ p: 2.5, my: 2 }}>
        <Grid container display="flex" alignItems={'center'}>
          <Grid container item md={9} display="flex" gap={2}>
            <Grid item>
              <Paper elevation={0} className="gradientPaper">
                <img
                  src={WinstonIcon}
                  style={{ height: '90px', width: '90px' }}
                />
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              sm={9}
              display="flex"
              flexDirection={'column'}
              gap={1}
            >
              <Typography variant="h5">Winston</Typography>
              <Typography variant="subtile1">Price: $500</Typography>
              <Typography variant="subtile1">
                Winston character is a NFT built on Ethereum, introduced by the
                Winston.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            display="flex"
            sx={{ justifyContent: { xs: 'start', md: 'end' } }}
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{ my: 2, width: { xs: '100%', sm: 'auto' } }}
            >
              Buy Winston NFT
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Grid mt={5}>
        <Typography variant="h5">Whitepaper Documents</Typography>
        <WhitePaperCard
          data={whitePaperData}
          name="whitePaperData"
          setViewDocument={setViewDocument}
        />
      </Grid>
      <Grid mt={5}>
        <Typography variant="h5">Winston Legal Documents</Typography>
        <WhitePaperCard
          data={winstonLegalData}
          name="winstonLegalData"
          setViewDocument={setViewDocument}
        />
      </Grid>
    </Container>
  ) : (
    <Container>
      <Grid display={'flex'} gap={2}>
        <Link
          variant="subtitle2"
          onClick={() => {
            setViewDocument({
              isViewDocument: false,
            });
          }}
        >
          Whitepaper
        </Link>
        <Typography variant="subtitle2">/</Typography>
        <Link variant="subtitle2">Whitepaper Document</Link>
      </Grid>
      <Grid
        display={'flex'}
        justifyContent="space-between"
        alignItems="center"
        my={2}
        sx={{ width: '100%' }}
      >
        <Typography variant="h3">Winston Whitepaper</Typography>
        <Grid display={'flex'} gap={2} sx={{ cursor: 'pointer' }}>
          <Typography>&lt;&gt;</Typography>
          <Typography>Embed</Typography>
          {/* <Link href={defaultPdfFile} underline="none">
            &lt;&gt; Embed
          </Link> */}
        </Grid>
      </Grid>
      <Grid mt={5} sx={{ width: { xs: '100%' } }}>
        <iframe src={viewDocument.data.pdfName} width="100%" />
      </Grid>
    </Container>
  );
}

export default WhitePapers;
