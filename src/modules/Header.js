// Import Bootstrap CSS
import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faLayerGroup,
  faFileCode,
  faFolderTree,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="container title">
      <p className="font-monospace fs-1">
        <FontAwesomeIcon className="fs-1" icon={faLayerGroup} /> lasagna
      </p>
      <p className="font-monospace fs-3">config management tool</p>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav justify-content-around w-100">
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                <FontAwesomeIcon className="fs-4" icon={faHome} /> home
            </a>
            </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/schemas">
                  <FontAwesomeIcon className="fs-4" icon={faFolderTree} /> schemas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/configs">
                  <FontAwesomeIcon className="fs-4" icon={faFileCode} /> configs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/settings">
                  <FontAwesomeIcon className="fs-4" icon={faCog} /> settings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
