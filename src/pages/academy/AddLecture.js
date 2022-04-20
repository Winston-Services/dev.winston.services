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
} from '@mui/material';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import BoldIcon from './../../assets/bold_icon.png';

function lecture() {
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
          >
            <IconButton>
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip placement="bottom" arrow={true} title={'Delete'}>
            <IconButton>
              <Delete />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid>
          <Tooltip placement="bottom" arrow={true} title={'Add New Section'}>
            <IconButton>
              <Add />
            </IconButton>
          </Tooltip>
          <Tooltip placement="bottom" arrow={true} title={'...'}>
            <IconButton>
              <Dehaze />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      <Typography variant="subtitle1" mt={3} mb={2}>
        Lecture Description
      </Typography>
      <Paper elevation={0}>
        <Editor
          toolbar={{
            options: ['inline', 'textAlign'],
            inline: {
              inDropdown: false,
              options: ['bold', 'italic', 'underline'],
              bold: { icon: BoldIcon, className: undefined },
            },
            textAlign: { inDropdown: false },
          }}
          customStyleMap={{
            redBackground: {
              backgroundColor: 'red',
            },
          }}
        />
      </Paper>
    </Paper>
  );
}

function AddLecture() {
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
            >
              <IconButton>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip placement="bottom" arrow={true} title={'Delete'}>
              <IconButton>
                <Delete />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid>
            <Tooltip placement="bottom" arrow={true} title={'Add New Section'}>
              <IconButton>
                <Add />
              </IconButton>
            </Tooltip>
            <Tooltip placement="bottom" arrow={true} title={'...'}>
              <IconButton>
                <Dehaze />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid mt={3.5}>{lecture()}</Grid>
      </Card>
    </Container>
  );
}

export default AddLecture;
