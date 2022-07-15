import video75 from "../resources/landing/video75.mp4";
import lbfLogo from "../resources/LBF - Logo.png";
import styles from "./css-modules/landing.module.css";

function Landing() {
  return (
    <div className={styles.landingContain}>
      <div className={styles.landingContent}>
        <div className={styles.logoContain}>
          <img src={lbfLogo}></img>
        </div>
        <h3 className={styles.titleLBF}>LBF VIRTUAL MUSEUM</h3>
        <div className={styles.videoContain}>
          <video width="350" autoPlay loop muted>
            <source src={video75} type="video/mp4" />
          </video>
        </div>
        <p className={styles.titleDesc}>
          Years of Cultural Histories of Pakistan
        </p>
      </div>
      <a className={styles.enterButton}>ENTER</a>
    </div>
  );
}

export default Landing;
