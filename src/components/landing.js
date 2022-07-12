import video75 from "../resources/landing/video75.mp4";
import styles from "./css-modules/landing.module.css";

function Landing() {
  return (
    <div className={styles.landingContain}>
      <h3 className={styles.titleLBF}>LBF VIRTUAL MUSEUM</h3>
      <div className={styles.videoContain}>
        <video width="550" autoPlay loop muted>
          <source src={video75} type="video/mp4" />
        </video>
      </div>
      <p className={styles.titleDesc}>
        Years of Cultural Histories of Pakistan
      </p>
    </div>
  );
}

export default Landing;
