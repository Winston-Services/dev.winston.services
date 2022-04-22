import React from 'react';

import { Edit, Delete, Add, Dehaze } from '@mui/icons-material/';
import {
  Container,
  Card,
  Typography,
  Grid,
  IconButton,
  Tooltip,
  Paper,
  createTheme,
} from '@mui/material';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { ThemeProvider } from '@mui/styles';
import MUIRichTextEditor from 'mui-rte';
import { PropTypes } from 'prop-types';

const myTheme = createTheme({});

function AddLecture() {
  return (
    <Paper elevation={0} sx={{ background: '#382B78', p: 3.5 }}>
      <Grid display="flex" justifyContent={'space-between'}>
        <Grid display={'flex'} alignItems="center">
          <Typography variant="h6">Lecture </Typography>
          <Tooltip
            placement="bottom"
            arrow={true}
            title={'Edit'}
            sx={{ ml: 1 }}
            enterDelay={500}
            enterNextDelay={500}
          >
            <IconButton>
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip
            placement="bottom"
            arrow={true}
            title={'Delete'}
            enterDelay={500}
            enterNextDelay={500}
          >
            <IconButton>
              <Delete />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid>
          <Tooltip
            placement="bottom"
            arrow={true}
            title={'Add New Section'}
            enterDelay={500}
            enterNextDelay={500}
          >
            <IconButton>
              <Add />
            </IconButton>
          </Tooltip>
          <Tooltip
            placement="bottom"
            arrow={true}
            title={'...'}
            enterDelay={500}
            enterNextDelay={500}
          >
            <IconButton>
              <Dehaze />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      <Typography variant="subtitle1" mt={3} mb={2}>
        Lecture Description
      </Typography>
      <ThemeProvider theme={myTheme}>
        <Paper elevation={0} sx={{ minHeight: '200px', px: 2, py: 1 }}>
          <MUIRichTextEditor
            label="Enter Description..."
            controls={['bold', 'italic', 'numberList', 'bulletList']}
          />
        </Paper>
      </ThemeProvider>
    </Paper>
  );
}

function AddSection() {
  return (
    <Container>
      <Card elevation={0} sx={{ p: 3.5 }}>
        <Grid display="flex" justifyContent={'space-between'}>
          <Grid display={'flex'} alignItems="center">
            <Typography variant="h5">Introduction</Typography>
            <Tooltip
              placement="bottom"
              arrow={true}
              title={'Edit'}
              sx={{ ml: 1 }}
              enterDelay={500}
              enterNextDelay={500}
            >
              <IconButton>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip
              placement="bottom"
              arrow={true}
              title={'Delete'}
              enterDelay={500}
              enterNextDelay={500}
            >
              <IconButton>
                <Delete />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid>
            <Tooltip
              placement="bottom"
              arrow={true}
              title={'Add New Section'}
              enterDelay={500}
              enterNextDelay={500}
            >
              <IconButton>
                <Add />
              </IconButton>
            </Tooltip>
            <Tooltip
              placement="bottom"
              arrow={true}
              title={'...'}
              enterDelay={500}
              enterNextDelay={500}
            >
              <IconButton>
                <Dehaze />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid mt={3.5}>{AddLecture()}</Grid>
      </Card>
    </Container>
  );
}

function AddLectures({ sectionData, setSectionData }) {
  console.log(sectionData);
  React.useEffect(() => {
    setSectionData({
      numberOfSection: 1,
      sectionData: [
        {
          sectionName: 'Section',
          numberOfLecture: 1,
          lectureData: [
            {
              lectureName: 'lecture',
              lectureDescription: '',
            },
          ],
        },
      ],
    });
  }, [setSectionData]);
  return AddSection();
}

AddLectures.propTypes = {
  sectionData: PropTypes.object,
  setSectionData: PropTypes.func,
};

export default AddLectures;
