import Image from "next/image";
import { Fragment } from "react";

import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <Fragment>
      <nav
        className={`${styles.navbarContainer} navbar navbar-expand-lg navbar-light bg-light`}
      >
        <div className="container">
          <a href="#" className={`${styles.navbarLogo} navbar-brand`}>
            <Image
              src="/images/starbucks_corporation_logo.png"
              alt=""
              width="71"
              height="71"
              className="d-inline-block align-text-top"
            />
          </a>
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Coffee & Tea at Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  MENU
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Merchandise
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Starbucks Rewards
                </a>
              </li>
            </ul>
          </div>
          <form className="d-flex">
            <span>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                color="#0B6836"
                height="18"
                width="18"
              />
              &nbsp; Find a Store
            </span>
            &nbsp; | &nbsp;
            <span>
              <Image
                alt="thflags"
                height="12"
                width="18"
                src="/images/flags/th.png"
              />
              &nbsp; ไทย
            </span>
          </form>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
