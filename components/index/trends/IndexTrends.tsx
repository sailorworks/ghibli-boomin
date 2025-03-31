"use client";
import styles from "./IndexTrends.module.scss";
import IndexTrendsSlide from "./IndexTrendsSlide";

const IndexTrends = () => {
  return (
    <div className={styles.slider}>
      <IndexTrendsSlide />
    </div>
  );
};

export default IndexTrends;
