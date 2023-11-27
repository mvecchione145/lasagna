// Import Bootstrap CSS
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="container footer fixed-bottom text-center">
      <p className="fs-6">
        <FontAwesomeIcon className="fs-6" icon={faLayerGroup} /> lasagna
      </p>
    </div>
  );
}

export default Footer;
