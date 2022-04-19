import React, { useState } from 'react';

import { Container, Typography, Grid, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import pdfFile from './../../pdf/sample.pdf';

function WhitePapersDocument() {
  const [defaultPdfFile] = useState(pdfFile);
  const navigate = useNavigate();

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
        <Grid display={'flex'} gap={2} sx={{ cursor: 'pointer' }}>
          <Typography>&lt;&gt;</Typography>
          <Typography>Embed</Typography>
        </Grid>
      </Grid>
      <Grid mt={5} sx={{ width: { xs: '100%' } }}>
        <iframe src={defaultPdfFile} width="100%" />
      </Grid>
    </Container>
  );
}

export default WhitePapersDocument;
