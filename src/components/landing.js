import styles from "./css-modules/landing.module.css";
import SideBar from './specific/landing/sidebar.js';
import Blob from "./p5/blob.js";
import { useRef, useEffect } from 'react';

function Landing() {

  let projectsContRef = useRef();

  let projects = [{
    name: "abc"
  }, {
    name: "abc"
  },{
    name: "abc"
  },{
    name: "abc"
  },{
    name: "abc"
  }]

  useEffect(() => {
    console.log('mount landing');
  }, []);

  return (
    <div className={styles.landingContain}>
      <div className={styles.side_bar}>
        <SideBar/>
      </div>
      <div ref={projectsContRef} className={styles.projects_container}>
        {projects.length > 0 && projects.map((project, index) => {
          return <div key={"blob" + index} className={styles.project_container}>
            <Blob projectsDiv={projectsContRef}/>
          </div>
        })}
      </div>
    </div>
  );
}

export default Landing;
