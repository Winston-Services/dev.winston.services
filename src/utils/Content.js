const ImageContent = {
  component: 'ImageContent',
  props: {
    src: 'https://picsum.photos/200/300',
  },
  children: [],
  content: null,
};

const VideoContent = {
  component: 'VideoContent',
  props: {
    src: 'https://picsum.photos/200/300',
  },
  children: [],
  content: null,
};

const MarkdownContent = {
  component: 'MarkdownContent',
  props: {
  },
  children: [],
  content: '# Hello, world!',
};

const SliderContent = {
  component: 'SliderContent',
  props: {},
  children: [
    {
      component: 'ImageContent',
      props: {
        src: 'https://picsum.photos/200/300',
      },
      children: [],
      content: null,
    },
  ],
  content: null,
};

export { ImageContent, VideoContent, MarkdownContent, SliderContent };
