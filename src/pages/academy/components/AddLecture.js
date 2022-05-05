import React from 'react';

import { Edit, Delete, Add, DragIndicator, Done } from '@mui/icons-material/';
import {
  Grid,
  Typography,
  IconButton,
  createTheme,
  Tooltip,
  Button,
  Card,
} from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import { Form, Formik } from 'formik';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import TextField from './../../../components/common/TextField';
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
  const [initialValue, setInitialValue] = React.useState({
    title: '',
    url: '',
  });

  const [uploadVideo, setUploadVideo] = React.useState(false);
  const [externalResource, setExternalResource] = React.useState(false);
  const [name, setName] = React.useState(lecture?.name);
  const dispatch = useDispatch();

  const FORM_VALIDATION = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    url: Yup.string().required('URL is required').url('Invalid URL'),
  });

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
                  if (name) {
                    setIsEdit(false);
                    dispatch(
                      updateLecture({
                        sectionIndex,
                        lectureIndex,
                        name,
                      })
                    );
                  }
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
          <Button
            startIcon={<Add />}
            variant="contained"
            color={uploadVideo ? 'secondary' : 'primary'}
            onClick={() => {
              setExternalResource(false);
              setUploadVideo(!uploadVideo);
              return;
            }}
          >
            Upload video
          </Button>
          <Button
            startIcon={<Add />}
            variant="contained"
            color={externalResource ? 'secondary' : 'primary'}
            onClick={() => {
              setUploadVideo(false);
              setExternalResource(!externalResource);
              return;
            }}
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
      {externalResource && (
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
                <Formik
                  initialValues={{ ...initialValue }}
                  validationSchema={FORM_VALIDATION}
                  onSubmit={(values) => {
                    console.log('add link submit');
                    setIsAddExternalResource(false);
                    setInitialValue({
                      title: '',
                      url: '',
                    });
                    return dispatch(
                      addExternalResource({
                        sectionIndex: sectionIndex,
                        lectureIndex: lectureIndex,
                        externalResourceData: {
                          ...values,
                        },
                      })
                    );
                  }}
                >
                  <Form>
                    <TextField
                      fullWidth
                      name="title"
                      label={'Title'}
                      autoComplete="off"
                      placeholder={'Add Title'}
                    />
                    <TextField
                      fullWidth
                      name="url"
                      autoComplete="off"
                      label={'URL'}
                      placeholder={'https://example.com'}
                      sx={{ mt: 2 }}
                    />
                    <Grid mt={3} display="flex" justifyContent={'center'}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                      >
                        Add Link
                      </Button>
                    </Grid>
                  </Form>
                </Formik>
              </Grid>
            </Card>
          )}
        </Card>
      )}
      {uploadVideo && (
        <Grid container spacing={3} mt={0}>
          <Grid item md={6}>
            <Card elevation={0} sx={{ p: 3 }}>
              <Typography>Upload a video</Typography>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card elevation={0} sx={{ p: 3 }}>
              <Typography>Upload thumbnail</Typography>
            </Card>
          </Grid>
        </Grid>
      )}
      {!externalResource && !uploadVideo && (
        <Card elevation={0} sx={{ minHeight: '200px', mt: 2, px: 2, py: 1 }}>
          <ThemeProvider theme={myTheme}></ThemeProvider>
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
