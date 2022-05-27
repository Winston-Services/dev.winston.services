import React from 'react';

import {
  BorderColor,
  ContentCopy,
  Done,
  DragIndicator,
  Edit,
  InsertLink,
  Delete,
  AddBox,
  Queue,
} from '@mui/icons-material';
import {
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { uuid } from '../../../components/common/CommonFunction';
import {
  addCategory,
  addCurrentLessonEdit,
  addLesson,
  deleteLesson,
  splitCategory,
  updateLesson,
} from '../../../store/academy';

export default function LessonCard({
  lesson,
  categoryId,
  lessonIndex,
  categoryIndex,
  lessonLength,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [editLesson, setEditLesson] = React.useState({
    lessonIndex: -1,
    categoryIndex: -1,
    name: '',
  });

  return (
    <>
      <Grid
        key={lesson.name + lessonIndex}
        display={'flex'}
        alignItems="center"
        justifyContent={'space-between'}
        pl={3}
      >
        <Grid display={'flex'} alignItems="center" gap={1}>
          <IconButton>
            <DragIndicator sx={{ color: '#4C3B9C' }} />
          </IconButton>
          {editLesson.lessonIndex == lessonIndex &&
          editLesson.categoryIndex === categoryIndex ? (
            <>
              <TextField
                inputProps={{ style: { fontSize: 14 } }}
                sx={{ width: 'auto' }}
                variant="standard"
                value={editLesson.name}
                onChange={(e) =>
                  setEditLesson({
                    ...editLesson,
                    name: e.target.value,
                  })
                }
              />
            </>
          ) : (
            <Typography variant="subtitle2">{lesson.name}</Typography>
          )}

          {editLesson.lessonIndex == lessonIndex &&
          editLesson.categoryIndex === categoryIndex ? (
            <Tooltip placement="top" arrow={true} title={'Update lesson name'}>
              <IconButton
                onClick={() => {
                  dispatch(
                    updateLesson({
                      lessonIndex,
                      categoryIndex,
                      data: { name: editLesson.name },
                    })
                  );
                  setEditLesson({
                    ...editLesson,
                    lessonIndex: -1,
                    categoryIndex: -1,
                  });
                }}
              >
                <Done sx={{ color: '#C4C4C4' }} />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip placement="top" arrow={true} title={'Edit lesson name'}>
              <IconButton
                onClick={() => {
                  setEditLesson({
                    name: lesson.name,
                    categoryIndex,
                    lessonIndex,
                  });
                }}
              >
                <BorderColor
                  sx={{
                    color: '#C4C4C4',
                    width: '18px',
                    height: '18px',
                  }}
                />
              </IconButton>
            </Tooltip>
          )}
        </Grid>
        <Grid display="flex" alignItems={'center'}>
          <Tooltip
            placement="top"
            arrow={true}
            title={'Count lesson for course completion'}
          >
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked={lesson.isRequired}
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 18,
                      color: '#FFD215',
                    },
                  }}
                  onChange={(e) => {
                    const { checked } = e.target;
                    dispatch(
                      updateLesson({
                        lessonIndex,
                        categoryIndex,
                        data: { isRequired: checked },
                      })
                    );
                    console.log(checked);
                  }}
                />
              }
              label="Required"
            />
          </Tooltip>
          <Tooltip placement="top" arrow={true} title={'Edit lesson'}>
            <IconButton
              // onClick={() => navigate('/academy/add-lecture/edit-lesson/')}
              onClick={() => {
                navigate(`/academy/edit-lesson/${lesson.name}`);
                dispatch(
                  addCurrentLessonEdit({
                    categoryIndex,
                    id: lesson.id,
                    categoryId: categoryId,
                  })
                );
              }}
            >
              <Edit
                sx={{
                  color: '#C4C4C4',
                  width: '18px',
                  height: '18px',
                }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip placement="top" arrow={true} title={'Copy lesson'}>
            <IconButton
              onClick={() =>
                dispatch(
                  addLesson({
                    lessonIndex,
                    categoryIndex,
                    lessonData: { ...lesson, id: uuid() },
                  })
                )
              }
            >
              <ContentCopy
                sx={{
                  color: '#C4C4C4',
                  width: '18px',
                  height: '18px',
                }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip placement="top" arrow={true} title={'Lesson link'}>
            <IconButton>
              <InsertLink
                sx={{
                  color: '#C4C4C4',
                  width: '18px',
                  height: '18px',
                }}
              />
            </IconButton>
          </Tooltip>
          {lessonLength > 1 ? (
            <Tooltip placement="top" arrow={true} title={'Delete lesson'}>
              <IconButton
                onClick={() =>
                  dispatch(
                    deleteLesson({
                      categoryIndex,
                      lessonIndex,
                    })
                  )
                }
              >
                <Delete
                  sx={{
                    color: '#C4C4C4',
                    width: '18px',
                    height: '18px',
                  }}
                />
              </IconButton>
            </Tooltip>
          ) : null}
          <Tooltip placement="top" arrow={true} title={'Add lesson below'}>
            <IconButton
              onClick={() =>
                dispatch(
                  addLesson({
                    lessonIndex,
                    categoryIndex,
                    lessonData: {
                      id: uuid(),
                      name: 'Untitled lesson',
                      isRequired: false,
                    },
                  })
                )
              }
            >
              <AddBox
                sx={{
                  color: '#C4C4C4',
                  width: '18px',
                  height: '18px',
                }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip placement="top" arrow={true} title={'Add category below'}>
            <IconButton
              onClick={() => {
                lessonLength - 1 === lessonIndex
                  ? dispatch(
                      addCategory({
                        categoryIndex,
                        categoryData: {
                          id: uuid(),
                          name: 'Untitled category',
                          lesson: [
                            {
                              id: uuid(),
                              name: 'Untitled lesson',
                              isRequired: false,
                            },
                          ],
                        },
                      })
                    )
                  : dispatch(
                      splitCategory({
                        categoryIndex,
                        lessonIndex,
                      })
                    );
              }}
            >
              <Queue
                sx={{
                  color: '#C4C4C4',
                  width: '18px',
                  height: '18px',
                }}
              />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
}

LessonCard.propTypes = {
  lesson: PropTypes.object,
  categoryIndex: PropTypes.number,
  lessonIndex: PropTypes.number,
  lessonLength: PropTypes.number,
  moveCard: PropTypes.func,
  id: PropTypes.string,
  categoryId: PropTypes.string,
};
