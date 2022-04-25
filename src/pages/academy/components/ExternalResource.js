import React from 'react';

import { DragIndicator, Edit, Delete, Link } from '@mui/icons-material';
import {
  Grid,
  Typography,
  IconButton,
  Card,
  TextField,
  Button,
} from '@mui/material';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';

import {
  updateExternalResource,
  deleteExternalResource,
} from '../../../store/academy';

function ExternalResource({
  externalResource,
  sectionIndex,
  lectureIndex,
  externalResourceIndex,
}) {
  const [isEdit, setIsEdit] = React.useState(false);
  const [name, setName] = React.useState(externalResource.name);
  const [url, setUrl] = React.useState(externalResource.link);
  const dispatch = useDispatch();
  return (
    <>
      {isEdit ? (
        <Card elevation={0} sx={{ background: '#382B78', p: 3.75 }}>
          <Grid>
            <TextField
              fullWidth
              variant="outlined"
              label={'Title'}
              placeholder={'Add Title'}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              fullWidth
              variant="outlined"
              label={'URL'}
              placeholder={'https://example.com'}
              sx={{ mt: 3 }}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <Grid mt={3} display="flex" justifyContent={'center'}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  setIsEdit(false);
                  return dispatch(
                    updateExternalResource({
                      sectionIndex,
                      lectureIndex,
                      externalResourceIndex,
                      externalResourceData: {
                        name,
                        link: url,
                      },
                    })
                  );
                }}
              >
                Edit Link
              </Button>
            </Grid>
          </Grid>
        </Card>
      ) : (
        <Card elevation={0} sx={{ background: '#382B78', px: 2, py: 1 }}>
          <Grid display={'flex'} justifyContent="space-between">
            <Grid display={'flex'} alignItems="center" gap={1}>
              <Grid>
                <IconButton>
                  <DragIndicator />
                </IconButton>
                <IconButton href={externalResource.link} target={'_blank'}>
                  <Link />
                </IconButton>
              </Grid>
              <Typography variant="h6">{externalResource.name}</Typography>
            </Grid>
            <Grid>
              <IconButton onClick={() => setIsEdit(true)}>
                <Edit />
              </IconButton>
              <IconButton
                onClick={() =>
                  dispatch(
                    deleteExternalResource({
                      sectionIndex,
                      lectureIndex,
                      externalResourceIndex,
                    })
                  )
                }
              >
                <Delete />
              </IconButton>
            </Grid>
          </Grid>
        </Card>
      )}
    </>
  );
}

ExternalResource.propTypes = {
  externalResource: PropTypes.object,
  sectionIndex: PropTypes.number,
  lectureIndex: PropTypes.number,
  externalResourceIndex: PropTypes.number,
};

export default ExternalResource;
