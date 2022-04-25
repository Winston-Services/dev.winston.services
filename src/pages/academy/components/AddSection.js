import React from 'react';

import { Edit, Delete, Add, DragIndicator, Done } from '@mui/icons-material/';
import {
  Container,
  Card,
  Grid,
  Typography,
  Tooltip,
  IconButton,
  TextField,
} from '@mui/material';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';

import {
  addSection,
  updateSection,
  deleteSection,
} from './../../../store/academy';
import AddLecture from './AddLecture';

function AddSection({ section, sectionIndex, sectionCount }) {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = React.useState(false);
  const [name, setName] = React.useState(section?.name);

  return (
    <Container>
      <Card elevation={0} sx={{ p: 3.5 }}>
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
              <Typography variant="h5">{section?.name}</Typography>
            )}
            <Tooltip
              placement="bottom"
              arrow={true}
              title={'Edit section title'}
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
                        updateSection({
                          sectionIndex,
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
            {sectionCount !== 1 && (
              <Tooltip
                placement="bottom"
                arrow={true}
                title={'Delete'}
                enterDelay={500}
                enterNextDelay={500}
              >
                <IconButton
                  onClick={() => dispatch(deleteSection(sectionIndex))}
                >
                  <Delete />
                </IconButton>
              </Tooltip>
            )}
          </Grid>
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
                    addSection({
                      sectionIndex: sectionIndex + 1,
                      sectionData: {
                        name: 'section' + (sectionIndex + 2),
                        lecture: [
                          {
                            name: 'lecture1',
                            description: '',
                            externalResource: [],
                          },
                        ],
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
        {section?.lecture?.map((lecture, index) => (
          <Grid key={section.name + lecture.name + index} mt={3.5}>
            <AddLecture
              lecture={lecture}
              sectionIndex={sectionIndex}
              lectureIndex={index}
              lectureCount={section.lecture.length}
            />
          </Grid>
        ))}
      </Card>
    </Container>
  );
}

AddSection.propTypes = {
  section: PropTypes.object,
  sectionCount: PropTypes.number,
  sectionIndex: PropTypes.number,
};

export default AddSection;
