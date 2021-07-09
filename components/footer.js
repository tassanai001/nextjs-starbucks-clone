import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <Fragment>
      <section className="">
        <footer className={styles.footerContainer}>
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-3 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">เกี่ยวกับเรา</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className={styles.footerUlLiText}>
                      ความเป็นมาของเรา
                    </a>
                  </li>
                  <li>
                    <a href="#!" className={styles.footerUlLiText}>
                      บริษัทของเรา
                    </a>
                  </li>
                  <li>
                    <a href="#!" className={styles.footerUlLiText}>
                      ความรับผิดชอบต่อสังคม
                    </a>
                  </li>
                  <li>
                    <a href="#!" className={styles.footerUlLiText}>
                      ร่วมงานกับสตาร์บัคส์
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">เมล็ดกาแฟและชาสุดพิเศษ</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className={styles.footerUlLiText}>
                      เรื่องราวกาแฟคุณภาพเยี่ยม
                    </a>
                  </li>
                  <li>
                    <a href="#!" className={styles.footerUlLiText}>
                      เมล็ดกาแฟและชาของเรา
                    </a>
                  </li>
                  <li>
                    <a href="#!" className={styles.footerUlLiText}>
                      วิธีชงกาแฟ
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className={styles.footerUlLiText}>
                      สตาร์บัคส์ รีวอร์ด
                    </a>
                  </li>
                  <li>
                    <a href="#!" className={styles.footerUlLiText}>
                      โปรโมชั่น
                    </a>
                  </li>
                  <li>
                    <a href="#!" className={styles.footerUlLiText}>
                      ลูกค้าองค์กร
                    </a>
                  </li>
                  <li>
                    <a href="#!" className={styles.footerUlLiText}>
                      ข้อมูลเพิ่มเติม
                    </a>
                  </li>
                  <li>
                    <a href="#!" className={styles.footerUlLiText}>
                      ติดต่อเรา
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <Link href="/" passHref>
                  <span className="p-2">
                    <Image
                      alt="enflags"
                      height="12"
                      width="18"
                      src="/images/flags/en.png"
                    />
                    &nbsp; Eng
                  </span>
                </Link>
                <Link href="/" passHref>
                  <span className="p-2">
                    <Image
                      alt="thflags"
                      height="12"
                      width="18"
                      src="/images/flags/th.png"
                    />
                    &nbsp; ไทย
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className={`${styles.footerContact} text-center p-2`}>
            <ul
              className={`${styles.footerContentSocial} navbar-nav container`}
            >
              <li className={`${styles.ulLinksLi} nav-item`}>
                <Image
                  src="/images/social/facebook.png"
                  alt="facebook"
                  width="36"
                  height="36"
                  className="d-inline-block align-text-top"
                />
              </li>
              <li className={`${styles.ulLinksLi} nav-item`}>
                <Image
                  src="/images/social/instagram.png"
                  alt="facebook"
                  width="36"
                  height="36"
                  className="d-inline-block align-text-top"
                />
              </li>
              <li className={`${styles.ulLinksLi} nav-item`}>
                <Image
                  src="/images/social/line.png"
                  alt="facebook"
                  width="36"
                  height="36"
                  className="d-inline-block align-text-top"
                />
              </li>
              <li className={`${styles.ulLinksLi} nav-item`}>
                <Image
                  src="/images/social/app-store_tcm78-10560_w1024_n.png"
                  alt="facebook"
                  width="110"
                  height="36"
                  className="d-inline-block align-text-top"
                />
              </li>
              <li className={`${styles.ulLinksLi} nav-item`}>
                <Image
                  src="/images/social/google-play_tcm78-10559_w1024_n.png"
                  alt="facebook"
                  width="110"
                  height="36"
                  className="d-inline-block align-text-top"
                />
              </li>
            </ul>
          </div>
          <footer className={styles.footer}>
            <div className={styles.footerContentContainer}>
              <div className={`${styles.footerContactContainer} container`}>
                <ul className={`${styles.footerContent} navbar-nav`}>
                  <li className={`${styles.ulLinksLi} nav-item`}>
                    <a className="nav-link active" aria-current="page" href="#">
                      โอกาสในการเข้าถึงเว็บ
                    </a>
                  </li>
                  <li className={`${styles.ulLinksLi} nav-item`}>
                    <a className="nav-link" href="#">
                      คำชี้แจงความเป็นส่วนตัว
                    </a>
                  </li>
                  <li className={`${styles.ulLinksLi} nav-item`}>
                    <a className="nav-link" href="#">
                      เงื่อนไขการใช้งาน
                    </a>
                  </li>
                  <li className={`${styles.ulLinksLi} nav-item`}>
                    <a className="nav-link" href="#">
                      แผนผังไซต์
                    </a>
                  </li>
                  <li className={`${styles.ulLinksLi} nav-item`}>
                    <a className="nav-link" href="#">
                      การตั้งค่าคุ๊กกี้
                    </a>
                  </li>
                </ul>
                <div className={styles.footerContentRight}>
                  © 2020 Copyright: MDBootstrap.com
                </div>
              </div>
            </div>
          </footer>
        </footer>
      </section>
    </Fragment>
  );
}

export default Footer;
