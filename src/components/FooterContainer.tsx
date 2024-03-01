import { FunctionComponent } from "react";
import styles from "./FooterContainer.module.css";

const FooterContainer: FunctionComponent = () => {
  return (
    <section className={styles.footerContainer}>
      <div className={styles.footerContainer1}>
        <div className={styles.asset22}>
          <img
            className={styles.layer1Icon}
            loading="lazy"
            alt=""
            src="/layer-1.svg"
          />
          <img
            className={styles.layer1Icon1}
            loading="lazy"
            alt=""
            src="/layer-1-1.svg"
          />
        </div>
      </div>
      <div className={styles.bottomFooterContainer}>
        <div className={styles.divider} />
        <div className={styles.bottomFooterInfo}>
          <b className={styles.projectName}>
            {`© 2024 `}
            <a
              className={styles.kitsumondaoLlc}
              href="https://polygonscan.com/nft/0x54ded98a6720eceaa54eb0f858c81737cde9ff9e/389"
              target="_blank"
            >
              <span className={styles.kitsumondaoLlc1}>KitsumonDAO LLC</span>
            </a>{" "}
            - All Rights Reserved
          </b>
          <div className={styles.privacyLegal}>
            <b className={styles.privacy}>Privacy Policy</b>
            <b className={styles.legal}>Legal</b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterContainer;
