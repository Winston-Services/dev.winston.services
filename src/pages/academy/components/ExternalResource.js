import React from 'react';

import { DragIndicator, Edit, Delete, Link } from '@mui/icons-material';
import { Grid, Typography, IconButton, Card, Button } from '@mui/material';
import { Form, Formik } from 'formik';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import {
  updateExternalResource,
  deleteExternalResource,
} from '../../../store/academy';
import TextField from './../../../components/common/TextField';

function ExternalResource({
  externalResource,
  sectionIndex,
  lectureIndex,
  externalResourceIndex,
}) {
  const [isEdit, setIsEdit] = React.useState(false);
  const [initialValue] = React.useState({
    title: externalResource.title,
    url: externalResource.url,
  });
  const dispatch = useDispatch();

  const FORM_VALIDATION = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    url: Yup.string().required('URL is required').url('Invalid URL'),
  });
  return (
    <>
      {isEdit ? (
        <Card elevation={0} sx={{ background: '#382B78', p: 3.75 }}>
          <Grid>
            <Formik
              initialValues={{ ...initialValue }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                setIsEdit(false);
                return dispatch(
                  updateExternalResource({
                    sectionIndex,
                    lectureIndex,
                    externalResourceIndex,
                    externalResourceData: {
                      ...values,
                    },
                  })
                );
              }}
            >
              <Form>
                <TextField
                  name="title"
                  label={'Title'}
                  autoComplete="off"
                  placeholder={'Add Title'}
                />
                <TextField
                  name="url"
                  autoComplete="off"
                  label={'URL'}
                  placeholder={'https://example.com'}
                  sx={{ mt: 2 }}
                />
                <Grid mt={3} display="flex" justifyContent={'center'}>
                  <Button type="submit" variant="contained" color="secondary">
                    Edit Link
                  </Button>
                </Grid>
              </Form>
            </Formik>
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
                <IconButton href={externalResource.url} target={'_blank'}>
                  <Link />
                </IconButton>
              </Grid>
              <Typography variant="h6">{externalResource.title}</Typography>
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
