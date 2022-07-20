import styles from "./css-modules/impunity.module.css";
import circlesAudio from "../resources/masooma/Wency/Audio_Loop.mp3";
import { useState, useEffect, useRef } from "react";
import lyrics from "./lyrics";

function Impunity() {
  const [audioPlayed, setAudioPlayed] = useState(false);
  const lyricContainRef = useRef();
  const onPlayHandler = (e) => setAudioPlayed(true);

  useEffect(() => {
    if (audioPlayed) {
      lyrics.forEach((lyric, idx) => {
        setTimeout(() => {
          console.log(lyric.lyric);
          lyricContainRef.current.children[idx].classList.add(styles.active);
          (idx > 0) ? 
            lyricContainRef.current.children[idx - 1].classList.remove(
              styles.active
            ) : 
            lyricContainRef.current.children[lyrics.length - 1].classList.remove(
              styles.active
          
        }, lyric.time * 1000);
      });
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
      <div className={styles.lyricsContain} ref={lyricContainRef}>
        {lyrics.map((lyric, idx) => (
          <span className={styles.lyricSpan} key={`lyric{${idx + 1}`}>
            {lyric.lyric}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Impunity;
