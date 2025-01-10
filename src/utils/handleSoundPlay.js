const handleSoundPlay = (
  soundUrl = 'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3'
) => {
  // console.log('Play Sound');
  const audio = new Audio(soundUrl);
  audio.play();
};

export default handleSoundPlay;
