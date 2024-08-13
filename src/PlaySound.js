import React, { useState, useEffect } from 'react';
import './Pausa.css'
import { useAudioPlayer } from 'react-use-audio-player';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import sonido from './sound/sonidoJuego.mp3';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { load, play, pause, setVolume } = useAudioPlayer();

  useEffect(() => {
    load(sonido, {
      autoplay: false,
      loop: true,
    });
  }, [load]);

  useEffect(() => {
    if (isPlaying) {
      play();
      setVolume(1);
    } else {
      pause();
      setVolume(0);
    }
  }, [isPlaying, play, pause, setVolume]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='button-sonido'>
      <button className='icono-Sonido' onClick={togglePlayPause}>
        {isPlaying ? <FaVolumeUp size={100} color="white" /> : <FaVolumeMute size={100} color="white"/>}
      </button>
    </div>
  );
};

export default AudioPlayer;

