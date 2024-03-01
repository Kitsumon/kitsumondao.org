import { FunctionComponent, useCallback } from "react";
import styles from "./DaoHeader.module.css";

const DaoHeader: FunctionComponent = () => {
  const onSwapTextClick = useCallback(() => {
    window.open("https://kitsuswap.com");
  }, []);

  return (
    <header className={styles.daoHeader}>
      <div className={styles.daoHeaderNav}>
        <img
          className={styles.kmcdaoLogoIcon}
          loading="lazy"
          alt=""
          src="/kmcdaologo.svg"
        />
        <div className={styles.daoNav}>
          <b className={styles.treasury}>Treasury</b>
          <b className={styles.swap} onClick={onSwapTextClick}>
            KitsuSwap
          </b>
          <b className={styles.vesting}>Vesting</b>
          <b className={styles.staking}>Staking</b>
        </div>
      </div>
    </header>
  );
};

export default DaoHeader;
