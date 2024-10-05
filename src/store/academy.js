import { createSlice } from '@reduxjs/toolkit';

import { uuid } from '../components/common/CommonFunction';
const skills = [
  'Photoshop',
  'Programming',
  'Gaming',
  'Development',
  'Design',
];
const tags = ['Blockchain', 'Economics', 'Math', 'Engineering', 'Art', 'Science', 'Technology'];

const courses = [
  {
    id: uuid(),
    step1: 'In person, informally',
    step2: 'I am a beginner',
    step3: 'Not at the moment',
    title: 'Winston Academy - Master Class',
    description: 'Learn to earn with Winston Crypto',
    difficultyLevel: 'Beginner',
    price: 0,
    currencySymbol: '$',
    duration: '1.5',
    rating: [
      {
        id: uuid(),
        stars: 4.5,
      },
    ],
    reviews: [
      {
        id: uuid(),
        review:
          'A comprehensive guide to understanding and implementing crypto payments in your applications.',
      },
    ],
    viewers: 99,
    thumbnail: 'https://picsum.photos/561/341?random=1',
    skills: ['Programming'],
    tags: ['Blockchain'],
    summary:'A comprehensive guide to Winston Academy\'s learn to earn program. Learn at your own pace and earn crypto.',
    discountPrice: '19.99',
    lectures: [
      {
        id: uuid(),
        name: 'Introduction to Winston',
        lesson: [
          {
            id: uuid(),
            name: 'Meet Winston.',
            summary:
              'Winston is your personal assistant to all things blockchain.',
            skills: [],
            tags: ['Blockchain', 'Crypto Currency'],
            isRequired: true,
            duration: '10',
            content: [
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>Learn to earn with Winston by your side. From learning the basics of blockchain to earning crypto by teaching others. Winston Academy is your source to learn to earn.</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'video',
                content:
                  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                ],
                config: null,
              },
            ],
            quiz: [
              {
                id: uuid(),
                question: '',
                options: [],
                correctAnswer: '',
              },
            ],
            answers: [
              {
                id: uuid(),
                question: 0,
                answer: '',
                correct: false,
              },
            ],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Your first lesson',
            summary:
              'Once you start to your journey, you will be able to access your first lesson and start learning to earn.',
            skills: [],
            tags: ['Blockchain', 'Crypto Currency'],
            isRequired: true,
            duration: '10',
            content: [
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>Learn to earn with Winston by your side. From learning the basics of blockchain to earning crypto by teaching others. Winston Academy is your source to learn to earn.</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'video',
                content:
                  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                ],
                config: null,
              },
            ],
            quiz: [
              {
                id: uuid(),
                question: '',
                options: [],
                correctAnswer: '',
              },
            ],
            answers: [
              {
                id: uuid(),
                question: 0,
                answer: '',
                correct: false,
              },
            ],
            completed: false,
          },
        ],
      },
    ],
    teacher: {
      name: '@dreamingrainbow',
      image: 'https://picsum.photos/260/300?random=1',
    },
    progress: 0,
    isTemplate: false,
    isSubmitted: true,
    isReviewed: false,
    isApproved: false,
    isPublished: false,
    isRejected: false,
    isSaved: true,
  },
  {
    id: uuid(),
    step1: 'In person, informally',
    step2: 'I am a beginner',
    step3: 'Not at the moment',
    title: 'A chance encounter.',
    description: 'A chance encounter with Winston can change your life.',
    difficultyLevel: '',
    price: 0,
    currencySymbol: '$',
    duration: '',
    rating: [],
    reviews: [],
    viewers: 0,
    thumbnail: '',
    skills: [],
    tags: ['NFTs', 'AI', 'Blockchain'],
    summary: 'A chance encounter with Winston can change your life. Education is key to a better future.',
    discountPrice: '',
    lectures: [
      {
        id: uuid(),
        name: 'Lecture 1',
        lesson: [
          {
            id: uuid(),
            name: 'Introduction to Winston',
            summary: 'Start your adventure with Winston. Learn all about blockchain, crypto currency, and more.',
            skills: [],
            tags: ['Blockchain', 'Crypto Currency'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Your second lesson',
            summary: 'Once you start to your journey, you will be able to access your first lesson and start learning to earn.',
            skills: [],
            tags: ['Blockchain', 'Crypto Currency'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Your third lesson',
            summary: 'Your now well on your way to becoming a blockchain expert.',
            skills: [],
            tags: ['Blockchain', 'Crypto Currency'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
        ],
      },

      {
        id: uuid(),
        name: 'Lecture 2',
        lesson: [
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
        ],
      },

      {
        id: uuid(),
        name: 'Lecture 3',
        lesson: [
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
        ],
      },
    ],
    teacher: {
      name: '@dreamingrainbow',
      image: 'https://picsum.photos/260/300?random=7',
    },
    progress: 0,
    isTemplate: false,
    isSubmitted: true,
    isReviewed: false,
    isApproved: false,
    isPublished: true,
    isRejected: false,
    isSaved: true,
  },
  {
    id: uuid(),
    step1: 'In person, informally',
    step2: 'I am a beginner',
    step3: 'Not at the moment',
    title: 'Course 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget sapien.',
    difficultyLevel: 'Beginner',
    price: 0,
    currencySymbol: '$',
    duration: '',
    rating: [],
    reviews: [],
    viewers: 0,
    thumbnail: '',
    skills: [],
    tags: [],
    summary: '',
    discountPrice: '',
    lectures: [
      {
        id: uuid(),
        name: 'Example Lecture',
        lesson: [
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
        ],
      },

      {
        id: uuid(),
        name: 'Example Lecture',
        lesson: [
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
        ],
      },

      {
        id: uuid(),
        name: 'Example Lecture',
        lesson: [
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
        ],
      },
    ],
    teacher: {
      name: '@dreamingrainbow',
      image: 'https://picsum.photos/260/300?random=7',
    },
    progress: 0,
    isTemplate: false,
    isSubmitted: true,
    isReviewed: false,
    isApproved: false,
    isPublished: true,
    isRejected: false,
    isSaved: true,
  },
  {
    id: uuid(),
    step1: 'In person, informally',
    step2: 'I am a beginner',
    step3: 'Not at the moment',
    title: 'Course 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget sapien.',
    difficultyLevel: 'Expert',
    price: 0,
    currencySymbol: '$',
    duration: '',
    rating: [],
    reviews: [],
    viewers: 0,
    thumbnail: '',
    skills: [],
    tags: [],
    summary: '',
    discountPrice: '',
    lectures: [
      {
        id: uuid(),
        name: 'Example Lecture',
        lesson: [
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
        ],
      },

      {
        id: uuid(),
        name: 'Example Lecture',
        lesson: [
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
        ],
      },

      {
        id: uuid(),
        name: 'Example Lecture',
        lesson: [
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
        ],
      },
    ],
    teacher: {
      name: '@dreamingrainbow',
      image: 'https://picsum.photos/260/300?random=7',
    },
    progress: 0,
    isTemplate: false,
    isSubmitted: true,
    isReviewed: false,
    isApproved: false,
    isPublished: true,
    isRejected: false,
    isSaved: true,
  },
  {
    id: uuid(),
    step1: 'In person, informally',
    step2: 'I am a beginner',
    step3: 'Not at the moment',
    title: 'Course 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget sapien.',
    difficultyLevel: 'Expert',
    price: 0,
    currencySymbol: '$',
    duration: '',
    rating: [],
    reviews: [],
    viewers: 0,
    thumbnail: '',
    skills: [],
    tags: [],
    summary: '',
    discountPrice: '',
    lectures: [
      {
        id: uuid(),
        name: 'Example Lecture',
        lesson: [
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
        ],
      },

      {
        id: uuid(),
        name: 'Example Lecture',
        lesson: [
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
        ],
      },

      {
        id: uuid(),
        name: 'Example Lecture',
        lesson: [
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
        ],
      },
    ],
    teacher: {
      name: '@dreamingrainbow',
      image: 'https://picsum.photos/260/300?random=7',
    },
    progress: 0,
    isTemplate: false,
    isSubmitted: true,
    isReviewed: false,
    isApproved: false,
    isPublished: true,
    isRejected: false,
    isSaved: true,
  },
  {
    id: uuid(),
    step1: 'In person, informally',
    step2: 'I am a beginner',
    step3: 'Not at the moment',
    title: 'Course 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget sapien.',
    difficultyLevel: 'Beginner',
    price: 0,
    currencySymbol: '$',
    duration: '',
    rating: [],
    reviews: [],
    viewers: 0,
    thumbnail: '',
    skills: [],
    tags: [],
    summary: '',
    discountPrice: '',
    lectures: [
      {
        id: uuid(),
        name: 'Example Lecture',
        lesson: [
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
        ],
      },

      {
        id: uuid(),
        name: 'Example Lecture',
        lesson: [
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
        ],
      },

      {
        id: uuid(),
        name: 'Example Lecture',
        lesson: [
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=2',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=5',
                  },

                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=6',
                  },
                ],
                config: null,
              },
            ],
            quiz: [],
            answers: [],
            completed: false,
          },
        ],
      },
    ],
    teacher: {
      name: '@dreamingrainbow',
      image: 'https://picsum.photos/260/300?random=7',
    },
    progress: 0,
    isTemplate: false,
    isSubmitted: true,
    isReviewed: false,
    isApproved: false,
    isPublished: true,
    isRejected: false,
    isSaved: true,
  },
];

const initialState = {
  courses: courses,
  activeCourse: null,
  activeLecture: null,
  activeLesson: null,
  courseEdit: null,
  lectureEdit: null,
  lessonEdit: null,
  lessonQuiz: null,
  lessonQuizAnswer: null,
  lessonContent: null,
  courseTemplate: {
    id: uuid(),
    step1: 'In person, informally',
    step2: 'I am a beginner',
    step3: 'Not at the moment',
    title: '',
    description: '',
    difficultyLevel: '',
    price: 0,
    currencySymbol: '$',
    duration: '',
    rating: [],
    reviews: [],
    viewers: 0,
    thumbnail: '',
    skills: [],
    tags: [],
    summary: '',
    discountPrice: '',
    lectures: [
      {
        id: uuid(),
        name: 'Example Lecture',
        lesson: [
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'video',
                content: '',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: '',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=1',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=2',
                  },
                ],
                config: null,
              },
            ],
            quiz: [
              {
                id: uuid(),
                question: '',
                options: [],
                correctAnswer: '',
              },
            ],
            answers: [
              {
                id: uuid(),
                question: 0,
                answer: '',
                correct: false,
              },
            ],
            completed: false,
          },
        ],
      },
    ],
    teacher: {
      name: '',
      image: '',
    },
    progress: 0,
    isTemplate: true,
    isSubmitted: false,
    isReviewed: false,
    isApproved: false,
    isPublished: false,
    isRejected: false,
    isSaved: false,
  },
  skills,
  tags,
};

export const academySlice = createSlice({
  name: 'academy',
  initialState,
  reducers: {
    setActiveCourse: (state, action) => {
      state.activeCourse = action.payload;
    },
    setActiveLecture: (state, action) => {
      state.activeLecture = action.payload;
    },
    setActiveLesson: (state, action) => {
      state.activeLesson = action.payload;
    },
    setCourseEdit: (state, action) => {
      state.courseEdit = action.payload;
    },
    setLectureEdit: (state, action) => {
      state.lectureEdit = action.payload;
    },
    setLessonEdit: (state, action) => {
      state.lessonEdit = action.payload;
    },
    addCourse: (state, action) => {
      state.courses.push(action.payload);
    },
    addLecture: (state, action) => {
      const course = state.courses.find(
        (course) => course.id === action.payload.courseId
      );
      course.lectures.push(action.payload.lecture);
    },
    addLesson: (state, action) => {
      const course = state.courses.find(
        (course) => course.id === action.payload.courseId
      );
      const lecture = course.lectures.find(
        (lecture) => lecture.id === action.payload.lectureId
      );
      lecture.lesson.push(action.payload.lesson);
    },
    addLessonContent: (state, action) => {
      const course = state.courses.find(
        (course) => course.id === action.payload.courseId
      );
      const lecture = course.lectures.find(
        (lecture) => lecture.id === action.payload.lectureId
      );
      const lesson = lecture.lesson.find(
        (lesson) => lesson.id === action.payload.lessonId
      );
      lesson.content.push(action.payload.content);
    },
    addLessonQuiz: (state, action) => {
      const course = state.courses.find(
        (course) => course.id === action.payload.courseId
      );
      const lecture = course.lectures.find(
        (lecture) => lecture.id === action.payload.lectureId
      );
      const lesson = lecture.lesson.find(
        (lesson) => lesson.id === action.payload.lessonId
      );
      lesson.quiz.push(action.payload.quiz);
    },
    addLessonQuizAnswer: (state, action) => {
      const course = state.courses.find(
        (course) => course.id === action.payload.courseId
      );
      const lecture = course.lectures.find(
        (lecture) => lecture.id === action.payload.lectureId
      );
      const lesson = lecture.lesson.find(
        (lesson) => lesson.id === action.payload.lessonId
      );
      lesson.quiz.push(action.payload.quiz);
    },
    updateCourse: (state, action) => {
      const course = state.courses.find(
        (course) => course.id === action.payload.id
      );
      course.title = action.payload.title;
      course.description = action.payload.description;
      course.difficultyLevel = action.payload.difficultyLevel;
      course.price = action.payload.price;
    },
    updateSkills: (state, action) => {
      state.skills = action.payload;
    },
    updateTags: (state, action) => {
      state.tags = action.payload;
    },
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    addTag: (state, action) => {
      state.tags.push(action.payload);
    },
    removeSkill: (state, action) => {
      state.skills = state.skills.filter((skill) => skill !== action.payload);
    },
    removeTag: (state, action) => {
      state.tags = state.tags.filter((tag) => tag !== action.payload);
    },
  },
});

export const {
  setActiveCourse,
  setActiveLecture,
  setActiveLesson,
  setCourseEdit,
  setLectureEdit,
  setLessonEdit,
  addCourse,
  addLecture,
  addLesson,
  addLessonContent,
  addLessonQuiz,
  addLessonQuizAnswer,
  createCourseFromTemplateAndEdit,
  updateCourse,
  updateSkills,
  updateTags,
  addSkill,
  addTag,
  removeSkill,
  removeTag,
} = academySlice.actions;
export const coursesSelector = (state) => state.academy.courses;
export const courseSelector = (state) => state.academy.activeCourse;
export const lectureSelector = (state) => state.academy.activeLecture;
export const lessonSelector = (state) => state.academy.activeLesson;
export const courseEditSelector = (state) => state.academy.courseEdit;
export const lectureEditSelector = (state) => state.academy.lectureEdit;
export const lessonEditSelector = (state) => state.academy.lessonEdit;
export const lessonQuizSelector = (state) => state.academy.lessonQuiz;
export const lessonQuizAnswerSelector = (state) =>
  state.academy.lessonQuizAnswer;
export const lessonContentSelector = (state) => state.academy.lessonContent;
export const courseTemplateSelector = (state) => state.academy.courseTemplate;
export const skillsSelector = (state) => state.academy.skills;
export const tagsSelector = (state) => state.academy.tags;

const academy = academySlice.reducer;
export default academy;
