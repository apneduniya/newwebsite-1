import React from "react";

import "./TimelineSection.css";
import {motion} from "framer-motion";
import TimelineOne from "../../components/timeline/TimelineOne";

const TimelineSection = () => {
  return (
    <>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1, transition: {duration: 1}}}
        viewport={{once: false}}
        className="hack4bengal__section2"
        id="aboutus"
      >
        <div className="h4b_about_main">
          <div id="timeline">
            <div style={{marginTop: "5rem"}}>
              <h1>Timeline</h1>
              <hr />
              <TimelineOne />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TimelineSection;
