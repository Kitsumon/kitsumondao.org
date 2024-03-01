import { FunctionComponent } from "react";
import DaoHeader from "../components/DaoHeader";
import DaoContainer from "../components/DaoContainer";
import FooterContainer from "../components/FooterContainer";
import styles from "./Dao.module.css";

const Dao: FunctionComponent = () => {
  return (
    <div className={styles.dao}>
      <DaoHeader />
      <section className={styles.contentContainerFrame}>
        <div className={styles.contentContainer}>
          <DaoContainer />
        </div>
      </section>
      <FooterContainer />
    </div>
  );
};

export default Dao;
