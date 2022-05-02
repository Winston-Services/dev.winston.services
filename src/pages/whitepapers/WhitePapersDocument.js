import React from 'react';

import { Container, Typography, Grid, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import pdfFile from './../../pdf/sample.pdf';

function WhitePapersDocument() {
  const [defaultPdfFile] = React.useState(pdfFile);
  const navigate = useNavigate();
  const pdfRef = React.createRef();

  return (
    <Container>
      <Grid display={'flex'} gap={2}>
        <Link
          variant="subtitle2"
          onClick={() => {
            navigate('/whitepapers');
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
        <Grid
          display={'flex'}
          gap={2}
          sx={{ cursor: 'pointer' }}
          onClick={() => {
            console.log(pdfRef.current);
          }}
        >
          <Typography>&lt;&gt;</Typography>
          <Typography>Embed</Typography>
          {/* <Link href={defaultPdfFile} underline="none">
            &lt;&gt; Embed
          </Link> */}
        </Grid>
      </Grid>
      <Grid mt={5} sx={{ width: { xs: '100%' } }}>
        <iframe ref={pdfRef} src={defaultPdfFile} width="100%" />
      </Grid>
    </Container>
  );
}

export default WhitePapersDocument;
