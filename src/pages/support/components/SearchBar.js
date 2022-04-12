import React from 'react';

import { InputAdornment, TextField, Button, Typography } from '@mui/material';

function SearchBar() {
  return (
    <>
      <Typography variant="h5">How can we help you?</Typography>
      <TextField
        variant="standard"
        hiddenLabel
        fullWidth
        color="filled"
        placeholder="Search for articles..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                variant="contained"
                color="secondary"
                sx={{ borderRadius: '5px', height: '56px' }}
              >
                Search
              </Button>
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
        sx={{ borderRadius: '5px', height: '56px', pt: '12px', pr: 0, mt: 2 }}
      />
    </>
  );
}

export default SearchBar;
