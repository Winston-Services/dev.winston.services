import React, { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Container, Grid, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

import { ReactComponent as AddCourseIcon } from './../../assets/add_course_icon.svg';
import { ReactComponent as BeginnerIcon } from './../../assets/beginner_icon.svg';
import { ReactComponent as ExpertIcon } from './../../assets/expert_icon.svg';
import { ReactComponent as IntermediateIcon } from './../../assets/intermediate_icon.svg';

const topics = [
  'Altcoin1',
  'Altcoin2',
  'Altcoin3',
  'Altcoin4',
  'Altcoin5',
  'Altcoin6',
  'Binance1',
  'Binance2',
  'Binance3',
  'Binance4',
  'Binance5',
  'Binance6',
];

const levels = [
  {
    difficultyLevel: 'Beginner',
    difficultyLevelIcon: <BeginnerIcon />,
  },
  {
    difficultyLevel: 'Intermediate',
    difficultyLevelIcon: <IntermediateIcon />,
  },
  {
    difficultyLevel: 'Expert',
    difficultyLevelIcon: <ExpertIcon />,
  },
];

function AddCourse() {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState();
  return (
    <Container>
      <Grid container>
        <Grid item md={6}>
          <AddCourseIcon style={{ width: '90%' }} />
        </Grid>
        <Grid item md={6}>
          <Grid>
            <Typography variant="h6">Pick a one topics</Typography>
            <Grid container spacing={2} mt={1}>
              {topics.map((topic, index) => {
                return (
                  <Grid item lg={3} key={topic + index}>
                    <Button
                      onClick={() =>
                        setSelectedTopic((oldArray) => {
                          if (selectedTopic.includes(topic)) {
                            const index = selectedTopic.findIndex(function (
                              value
                            ) {
                              return value === topic;
                            });
                            selectedTopic.splice(index, 1);
                            return [...selectedTopic];
                          } else return [...oldArray, topic];
                        })
                      }
                      variant="contained"
                      color={
                        selectedTopic.includes(topic) ? 'secondary' : 'primary'
                      }
                      endIcon={
                        selectedTopic.includes(topic) ? (
                          <RemoveIcon />
                        ) : (
                          <AddIcon />
                        )
                      }
                    >
                      {topic}
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid mt={6.25}>
            <Typography variant="h6">Select difficulty level</Typography>
            <Grid container spacing={2} mt={1}>
              {levels.map((level) => {
                return (
                  <Grid item key={level.difficultyLevel}>
                    <Button
                      variant="contained"
                      color={
                        selectedLevel === level.difficultyLevel
                          ? 'secondary'
                          : 'primary'
                      }
                      startIcon={level.difficultyLevelIcon}
                      onClick={() => {
                        setSelectedLevel(level.difficultyLevel);
                      }}
                    >
                      {level.difficultyLevel}
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid mt={6.25} display="flex" gap={2}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate('/academy/add-course/upload-video')}
            >
              Done
            </Button>
            <Button variant="contained" color="primary">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AddCourse;
