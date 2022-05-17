import React from 'react';

import {
  AddBox,
  ContentCopy,
  Queue,
  Delete,
  DragIndicator,
  Edit,
  InsertLink,
  Done,
  BorderColor,
} from '@mui/icons-material';
import {
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { uuid } from '../../../components/common/CommonFunction';
import {
  addCategory,
  addLesson,
  courseSelector,
  deleteCategory,
  deleteLesson,
  updateCategory,
  updateLesson,
} from '../../../store/academy';

function CourseCard() {
  const navigate = useNavigate();
  const courseData = useSelector(courseSelector);
  const dispatch = useDispatch();
  const [editCategory, setEditCategory] = React.useState({
    categoryIndex: -1,
    name: '',
  });

  const [editLesson, setEditLesson] = React.useState({
    lessonIndex: -1,
    categoryIndex: -1,
    name: '',
  });
  return (
    <Card
      elevation={0}
      sx={{
        p: 2.5,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      {courseData.category.map((category, categoryIndex) => (
        <Grid
          key={category.name + categoryIndex}
          display="flex"
          flexDirection={'column'}
          gap={1}
        >
          <Grid
            display={'flex'}
            alignItems="center"
            justifyContent={'space-between'}
          >
            <Grid display={'flex'} alignItems="center" gap={1}>
              {editCategory.categoryIndex === categoryIndex ? (
                <>
                  <TextField
                    inputProps={{ style: { fontSize: 20 } }}
                    sx={{ width: 'auto' }}
                    variant="standard"
                    value={editCategory.name}
                    onChange={(e) =>
                      setEditCategory({
                        ...editCategory,
                        name: e.target.value,
                      })
                    }
                  />
                </>
              ) : (
                <>
                  <IconButton>
                    <DragIndicator sx={{ color: '#4C3B9C' }} />
                  </IconButton>
                  <Typography variant="h6">{category.name}</Typography>
                </>
              )}
              {editCategory.categoryIndex === categoryIndex ? (
                <IconButton
                  onClick={() => {
                    setEditCategory({
                      ...editCategory,
                      categoryIndex: -1,
                    });
                    dispatch(
                      updateCategory({
                        categoryIndex,
                        name: editCategory.name,
                      })
                    );
                  }}
                >
                  <Done sx={{ color: '#C4C4C4' }} />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => {
                    setEditCategory({
                      name: category.name,
                      categoryIndex,
                    });
                  }}
                >
                  <BorderColor
                    sx={{
                      color: '#C4C4C4',
                      height: '20px',
                      width: '20px',
                    }}
                  />
                </IconButton>
              )}
            </Grid>
            <Grid>
              <IconButton
                onClick={() =>
                  dispatch(
                    addCategory({
                      categoryIndex,
                      categoryData: category,
                    })
                  )
                }
              >
                <ContentCopy
                  sx={{
                    color: '#C4C4C4',
                    height: '20px',
                    width: '20px',
                  }}
                />
              </IconButton>
              {courseData.category.length > 1 ? (
                <IconButton
                  onClick={() => dispatch(deleteCategory(categoryIndex))}
                >
                  <Delete
                    sx={{
                      color: '#C4C4C4',
                      height: '20px',
                      width: '20px',
                    }}
                  />
                </IconButton>
              ) : null}
            </Grid>
          </Grid>
          {category.lesson.map((lesson, lessonIndex) => (
            <Grid
              key={lesson.name + lessonIndex}
              display={'flex'}
              alignItems="center"
              justifyContent={'space-between'}
              pl={3}
            >
              <Grid display={'flex'} alignItems="center" gap={1}>
                {editLesson.lessonIndex == lessonIndex &&
                editLesson.categoryIndex === categoryIndex ? (
                  <>
                    <TextField
                      inputProps={{ style: { fontSize: 17 } }}
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
                  <>
                    <IconButton>
                      <DragIndicator sx={{ color: '#4C3B9C' }} />
                    </IconButton>
                    <Typography variant="subtitle1">{lesson.name}</Typography>
                  </>
                )}

                {editLesson.lessonIndex == lessonIndex &&
                editLesson.categoryIndex === categoryIndex ? (
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
                ) : (
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
                )}
              </Grid>
              <Grid display="flex" alignItems={'center'}>
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
                <IconButton
                  onClick={() => navigate('/academy/add-lecture/edit/')}
                >
                  <Edit
                    sx={{
                      color: '#C4C4C4',
                      width: '18px',
                      height: '18px',
                    }}
                  />
                </IconButton>
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
                <IconButton>
                  <InsertLink
                    sx={{
                      color: '#C4C4C4',
                      width: '18px',
                      height: '18px',
                    }}
                  />
                </IconButton>
                {category.lesson.length > 1 ? (
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
                ) : null}
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
                <IconButton
                  onClick={() =>
                    dispatch(
                      addCategory({
                        categoryIndex,
                        categoryData: {
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
                  }
                >
                  <Queue
                    sx={{
                      color: '#C4C4C4',
                      width: '18px',
                      height: '18px',
                    }}
                  />
                </IconButton>
              </Grid>
            </Grid>
          ))}
        </Grid>
      ))}
    </Card>
  );
}

export default CourseCard;
