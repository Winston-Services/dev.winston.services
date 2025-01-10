const handleTextToSpeechPlay = (
  text,
  voice,
  voiceRate,
  voicePitch,
  voiceVolume
  // voiceLanguage,
) => {
  const synth = window.speechSynthesis;
  const speech = new SpeechSynthesisUtterance(text);
  if (synth.speaking) {
    synth.cancel();
  }
  const voices = window.speechSynthesis.getVoices();
  if (voice === 'female') {
    const femaleVoice = voices.find((voice) => voice.name.includes('Female'));
    if (femaleVoice) {
      speech.voice = femaleVoice;
    }
  }
  /*
    speech.lang = voiceLanguage;
  */
  speech.rate = voiceRate;
  speech.pitch = voicePitch;
  speech.volume = voiceVolume;
  synth.speak(speech);
  // console.log('Play Text to Speech: ', speech);
};

export default handleTextToSpeechPlay;
