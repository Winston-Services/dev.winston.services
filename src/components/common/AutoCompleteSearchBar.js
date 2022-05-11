import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, TextField, InputAdornment, Paper } from '@mui/material';
import { PropTypes } from 'prop-types';

function AutoCompleteSearchBar({
  data,
  searchBy,
  searchInput,
  setSearchInput,
  setSearchData,
}) {
  React.useEffect(() => {
    setSearchData(
      searchInput
        ? data.filter((row) => {
            return row[searchBy]
              .toString()
              .toLowerCase()
              .includes(searchInput.toLowerCase());
          })
        : data
    );
  }, [data, searchBy, searchInput, setSearchData]);

  const CustomPaper = (props) => {
    return (
      <Paper
        {...props}
        sx={{
          width: 'calc(100% + 50px)',
          ml: '-25px',
          borderRadius: '0 0 20px 20px',
        }}
      />
    );
  };

  return (
    <Autocomplete
      freeSolo
      PaperComponent={CustomPaper}
      options={data.map((option) => option[searchBy].toString())}
      onChange={(e, v) => setSearchInput(v)}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            variant="standard"
            fullWidth
            color="filled"
            placeholder="Search"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
            sx={{
              ...(params.inputProps['aria-expanded'] === true && {
                borderRadius: '20px 20px 0 0',
              }),
            }}
          />
        );
      }}
    />
  );
}

AutoCompleteSearchBar.propTypes = {
  data: PropTypes.array,
  searchBy: PropTypes.string,
  searchInput: PropTypes.string,
  setSearchInput: PropTypes.func,
  setSearchData: PropTypes.func,
};

export default AutoCompleteSearchBar;
