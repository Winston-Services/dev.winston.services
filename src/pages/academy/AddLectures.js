import React from 'react';

import {
  Grid,
  Card,
  TextField,
  Container,
  Autocomplete,
  Chip,
} from '@mui/material';
// import { useSelector } from 'react-redux';

// import { sectionSelector } from './../../store/academy';
// import AddSection from './components/AddSection';
import UploadFile from './../../components/common/UploadFile';

const allSkills = [
  'Photoshop',
  'Programming',
  'Gaming',
  'Development',
  'Designing',
];

function AddLectures() {
  // const sectionData = useSelector(sectionSelector);
  return (
    <Container>
      {/* {sectionData?.map((section, index) => (
        <Grid key={section.name + index} mb={2.5}>
          <AddSection
            section={section}
            sectionIndex={index}
            sectionCount={sectionData.length}
          />
        </Grid>
      ))} */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card
            elevation={0}
            sx={{ p: 3.75, display: 'flex', flexDirection: 'column', gap: 2.5 }}
          >
            <TextField
              fullWidth
              variant="outlined"
              label="Title"
              placeholder="Title Name"
            />
            <TextField
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              label="Title"
              placeholder="Title Name"
            />
            <Autocomplete
              multiple
              options={allSkills}
              freeSolo
              // onChange={(event, value) => console.log(value)}
              renderTags={(value, getTagProps) => (
                <Grid width="100%">
                  {value.map((option, index) => (
                    <Chip
                      key={option}
                      variant="filled"
                      label={option}
                      {...getTagProps({ index })}
                    />
                  ))}
                </Grid>
              )}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  {...params}
                  variant="outlined"
                  label="Skills"
                  placeholder="Enter skill name and press enter to add more skills"
                />
              )}
            />
            <Autocomplete
              multiple
              options={allSkills}
              freeSolo
              // onChange={(event, value) => console.log(value)}
              renderTags={(value, getTagProps) => (
                <Grid width="100%">
                  {value.map((option, index) => (
                    <Chip
                      key={option}
                      variant="filled"
                      label={option}
                      {...getTagProps({ index })}
                    />
                  ))}
                </Grid>
              )}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  {...params}
                  variant="outlined"
                  label="Tag"
                  placeholder="Enter tag name and press enter to add more tags"
                />
              )}
            />
            <TextField
              fullWidth
              multiline
              rows={8}
              variant="outlined"
              label="Summary"
              placeholder="What is the course about?"
            />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Price"
                  placeholder="Enter price"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Discount price"
                  placeholder="Enter discount price"
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <UploadFile
            name="image"
            title="Upload thumbnail"
            subtitle="You can upload maximum 200kb"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AddLectures;
