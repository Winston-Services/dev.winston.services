import React from 'react';

import { Edit, Delete, Add, DragIndicator, Done } from '@mui/icons-material/';
import {
  Grid,
  Typography,
  IconButton,
  createTheme,
  Tooltip,
  TextField,
  Button,
  Card,
} from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import MUIRichTextEditor from 'mui-rte';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';

import {
  addLecture,
  updateLecture,
  deleteLecture,
  addExternalResource,
} from './../../../store/academy';
import ExternalResource from './ExternalResource';

const myTheme = createTheme({});
function AddLecture({ lecture, sectionIndex, lectureIndex, lectureCount }) {
  const [isEdit, setIsEdit] = React.useState(false);
  const [isAddExternalResource, setIsAddExternalResource] =
    React.useState(false);
  const [externalResourceName, setExternalResourceName] = React.useState('');
  const [externalResourceLink, setExternalResourceLink] = React.useState('');
  const [externalResource, setExternalResource] = React.useState(false);
  const [name, setName] = React.useState(lecture?.name);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (lecture.externalResource.length === 0) {
      setIsAddExternalResource(true);
    }
  }, [lecture.externalResource.length]);
  return (
    <Card elevation={0} sx={{ background: '#382B78', p: 3.5 }}>
      <Grid display="flex" justifyContent={'space-between'}>
        <Grid display={'flex'} alignItems="center">
          {isEdit ? (
            <TextField
              error={name === ''}
              inputProps={{ style: { fontSize: 24 } }}
              sx={{ width: 150 }}
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
              helperText={name === '' && 'Invalid'}
            />
          ) : (
            <Typography variant="h5">{lecture?.name}</Typography>
          )}
          <Tooltip
            placement="bottom"
            arrow={true}
            title={'Edit lecture title'}
            sx={{ ml: 1 }}
            enterDelay={500}
            enterNextDelay={500}
          >
            {isEdit ? (
              <IconButton
                onClick={() => {
                  setIsEdit(false);
                  dispatch(
                    updateLecture({
                      sectionIndex,
                      lectureIndex,
                      name,
                    })
                  );
                }}
              >
                <Done />
              </IconButton>
            ) : (
              <IconButton onClick={() => setIsEdit(true)}>
                <Edit />
              </IconButton>
            )}
          </Tooltip>
          {lectureCount !== 1 && (
            <Tooltip
              placement="bottom"
              arrow={true}
              title={'Delete'}
              enterDelay={500}
              enterNextDelay={500}
            >
              <IconButton
                onClick={() =>
                  dispatch(deleteLecture({ sectionIndex, lectureIndex }))
                }
              >
                <Delete />
              </IconButton>
            </Tooltip>
          )}
        </Grid>
        <Grid display={'flex'} gap={2} alignItems="center">
          <Button startIcon={<Add />} variant="contained">
            Upload video
          </Button>
          <Button
            startIcon={<Add />}
            variant="contained"
            color={externalResource ? 'secondary' : 'primary'}
            onClick={() => setExternalResource(!externalResource)}
          >
            External resource
          </Button>
          <Grid>
            <Tooltip
              placement="bottom"
              arrow={true}
              title={'Add New Section'}
              enterDelay={500}
              enterNextDelay={500}
            >
              <IconButton
                onClick={() =>
                  dispatch(
                    addLecture({
                      sectionIndex: sectionIndex,
                      lectureIndex: lectureIndex + 1,
                      lectureData: {
                        name: 'lecture' + (lectureIndex + 2),
                        description: '',
                        externalResource: [],
                      },
                    })
                  )
                }
              >
                <Add />
              </IconButton>
            </Tooltip>
            <Tooltip
              placement="bottom"
              arrow={true}
              title={'Drag'}
              enterDelay={500}
              enterNextDelay={500}
            >
              <IconButton>
                <DragIndicator />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>

      {externalResource ? (
        <Card elevation={0} sx={{ mt: 2, px: 3, py: 2 }}>
          <Grid
            display="flex"
            justifyContent={'space-between'}
            alignItems="center"
          >
            <Typography variant="h6">External resource</Typography>
            {!isAddExternalResource && (
              <Tooltip
                placement="bottom"
                arrow={true}
                title={'Add new external resource'}
                enterDelay={500}
                enterNextDelay={500}
              >
                <IconButton onClick={() => setIsAddExternalResource(true)}>
                  <Add />
                </IconButton>
              </Tooltip>
            )}
          </Grid>

          {lecture.externalResource.map((externalResource, index) => (
            <Grid key={externalResource.name + index} mt={2.5}>
              <ExternalResource
                externalResource={externalResource}
                sectionIndex={sectionIndex}
                lectureIndex={lectureIndex}
                externalResourceIndex={index}
              />
            </Grid>
          ))}
          {isAddExternalResource && (
            <Card elevation={0} sx={{ mt: 2, background: '#382B78', p: 3.75 }}>
              <Grid>
                <TextField
                  fullWidth
                  variant="outlined"
                  label={'Title'}
                  placeholder={'Add Title'}
                  value={externalResourceName}
                  onChange={(e) => setExternalResourceName(e.target.value)}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  label={'URL'}
                  placeholder={'https://example.com'}
                  sx={{ mt: 3 }}
                  value={externalResourceLink}
                  onChange={(e) => setExternalResourceLink(e.target.value)}
                />
                <Grid mt={3} display="flex" justifyContent={'center'}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      setIsAddExternalResource(false);
                      setExternalResourceName('');
                      setExternalResourceLink('');
                      return dispatch(
                        addExternalResource({
                          sectionIndex: sectionIndex,
                          lectureIndex: lectureIndex,
                          externalResourceData: {
                            name: externalResourceName,
                            link: externalResourceLink,
                          },
                        })
                      );
                    }}
                  >
                    Add Link
                  </Button>
                </Grid>
              </Grid>
            </Card>
          )}
        </Card>
      ) : (
        <Card elevation={0} sx={{ minHeight: '200px', mt: 2, px: 2, py: 1 }}>
          <ThemeProvider theme={myTheme}>
            <MUIRichTextEditor
              label="Enter Description..."
              controls={['bold', 'italic', 'numberList', 'bulletList']}
            />
          </ThemeProvider>
        </Card>
      )}
    </Card>
  );
}
AddLecture.propTypes = {
  lecture: PropTypes.object,
  lectureCount: PropTypes.number,
  sectionIndex: PropTypes.number,
  lectureIndex: PropTypes.number,
};

export default AddLecture;
