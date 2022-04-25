import React from 'react';

import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

import { sectionSelector } from './../../store/academy';
import AddSection from './components/AddSection';

function AddLectures() {
  const sectionData = useSelector(sectionSelector);
  return (
    <div>
      {sectionData?.map((section, index) => (
        <Grid key={section.name + index} mb={2.5}>
          <AddSection
            section={section}
            sectionIndex={index}
            sectionCount={sectionData.length}
          />
        </Grid>
      ))}
    </div>
  );
}

export default AddLectures;
