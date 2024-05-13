import React from 'react';
import videoSrc from './video.mp4';

/*
Adicione funcionalidades ao player de vídeo:

1 - Use um estado reativo para verificar se o vídeo está tocando ou não. ✔
2 - Função para avançar o vídeo em +2s. ✔
3 - Função para alterar o playbackRate do vídeo. ✔
4 - Função para entrar/sair do modo pictureInPicture.✔
5 - Função para alternar o som (mudo/não mudo) do vídeo.✔
*/

function App() {
  const video = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayPause = () => {
    if (!video.current) return;
    else if (isPlaying) video.current.pause();
    else video.current.play();
  };

  const handleSkip = () => {
    if (!video.current) return;
    else video.current.currentTime += 2;
  };

  const handleRateChange = (speed: number) => {
    if (!video.current) return;
    else if (speed > 2) return;
    else video.current.playbackRate = speed;
  };

  const pictureInPicture = async () => {
    if (!video.current) return;
    else if (document.pictureInPictureElement)
      await document.exitPictureInPicture();
    else await video.current.requestPictureInPicture();
  };

  const mute = () => {
    if (!video.current) return;
    else video.current.muted = !video.current.muted;
  };

  return (
    <div>
      <div className="flex">
        {isPlaying ? (
          <button onClick={handlePlayPause}>Pause</button>
        ) : (
          <button onClick={handlePlayPause}>Play</button>
        )}
        <button onClick={handleSkip}>+2s</button>
        <button onClick={() => handleRateChange(1)}>1x</button>
        <button onClick={() => handleRateChange(2)}>2x</button>
        <button onClick={pictureInPicture}>PiP</button>
        <button onClick={mute}>Mute</button>
      </div>
      <video
        controls
        ref={video}
        src={videoSrc}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      ></video>
    </div>
  );
}

export default App;
