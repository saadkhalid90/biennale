import video75 from "../resources/landing/video75.mp4";
import lbfLogo from "../resources/LBF - Logo.png";
import styles from "./css-modules/landing.module.css";

function Landing({ handleMouseOver, handleMouseOut }) {
  return (
    <div className={styles.landingContain}>
      <div className={styles.landingContent}>
        <div className={styles.logoContain}>
          <img src={lbfLogo}></img>
        </div>
        <div className={styles.videoContain}>
          <h3
            className={styles.titleLBF}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
          >
            LBF VIRTUAL <span className={styles.museumText}>MUSEUM</span>
          </h3>
          <video className={styles.abs_video} width="350" autoPlay loop muted>
            <source src={video75} type="video/mp4" />
          </video>
        </div>
        <p className={styles.titleDesc}>
          75 Years of Cultural Histories of Pakistan
        </p>
        <a
          className={styles.enterButton}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOut}
        >
          ENTER
        </a>
      </div>
    </div>
  );
}

export default Landing;
