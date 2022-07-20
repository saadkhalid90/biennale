import styles from "./css-modules/impunity.module.css";
import circlesAudio from "../resources/masooma/Wency/Audio_Loop.mp3";
import { useState, useEffect } from "react";
import lyrics from "./lyrics";

function Impunity() {
  const [audioPlayed, setAudioPlayed] = useState(false);
  const onPlayHandler = (e) => setAudioPlayed(true);

  useEffect(() => {
    if (audioPlayed) {
      for (const lyric of lyrics) {
      }
      setTimeout(() => {
        console.log("3 seconds");
      }, 3000);
      setTimeout(() => {
        console.log("10 seconds");
      }, 10000);
      setTimeout(() => {
        console.log("5 seconds");
      }, 5000);
    }
  }, [audioPlayed]);

  return (
    <div className={styles.pageContain}>
      <div className={styles.panomContain} />
      <div className={styles.fixedVideoContain}>
        <div className={styles.videoContain}>
          <iframe
            src="https://player.vimeo.com/video/730983265?muted=1&autoplay=1&loop=1"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; picture-in-picture"
            title="Impunity"
          ></iframe>
        </div>
        <audio className="circles_audio" controls loop onPlay={onPlayHandler}>
          <source src={circlesAudio} type="audio/mpeg" />
        </audio>
      </div>
      <div className={styles.lyricsContain}>
        {lyrics.map((lyric, idx) => (
          <span key={`lyric{${idx + 1}`}>{lyric.lyric}</span>
        ))}
      </div>
    </div>
  );
}

export default Impunity;
