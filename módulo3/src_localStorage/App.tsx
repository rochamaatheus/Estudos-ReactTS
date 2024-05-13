import React from 'react';
import videoSrc from './video.mp4';
import useLocalStorage from './useLocalStorage';

function App() {
  const video = React.useRef<HTMLVideoElement>(null);
  const [volume, setVolume] = useLocalStorage('volume', '0');

  React.useEffect(() => {
    if (!video.current) return;
    if (+volume >= 0 && +volume <= 1) video.current.volume = +volume;
  }, [volume]);

  return (
    <div>
      {volume}
      <div className="flex">
        <button onClick={() => setVolume('0')}>0</button>
        <button onClick={() => setVolume('0.5')}>50</button>
        <button onClick={() => setVolume('1')}>100</button>
        <button onClick={() => setVolume('2')}>200 (N)</button>
      </div>
      <video
        style={{ width: '50rem' }}
        controls
        ref={video}
        src={videoSrc}
      ></video>
    </div>
  );
}

export default App;
