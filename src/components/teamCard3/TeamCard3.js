import React from "react";

import "./TeamCard3.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

const TeamCard3 = ({
  img,
  name,
  position,
  facebook,
  twitter,
  linkedin,
  github,
  domain,
}) => {
  return (
    <div className="hack4bengal__team-card3">
      <div className="hack4bengal__team-card3-img">
        <img src={img} />
      </div>
      <div className="hack4bengal__team-card3-content">
        <h3 className="name3">{name}</h3>
        <h4 className="title3">{position}</h4>
        <h4 className="domain3">{domain}</h4>
      </div>
      <div className="line"></div>
      <ul className="social3">
        <li>
          <a
            href={facebook}
            className="fa fa-facebook fa-2x"
            aria-hidden="true"
          ></a>
        </li>
        <li>
          <a
            href={twitter}
            className="fa fa-twitter fa-2x"
            aria-hidden="true"
          ></a>
        </li>
        <li>
          <a
            href={github}
            className="fa fa-github fa-2x"
            aria-hidden="true"
          ></a>
        </li>
        <li>
          <a
            href={linkedin}
            target="_blank "
            className="fa fa-linkedin fa-2x"
            aria-hidden="true"
          ></a>
        </li>
      </ul>
    </div>
  );
};

export default TeamCard3;