"use client";
import styles from "./IndexTrends.module.scss";
import IndexTrendsSlide from "./IndexTrendsSlide";
import { Music } from "@/types/music";

interface IndexTrendsProps {
  trendsInfo: Partial<Music>[] | any[]; // Make it more flexible
}

const IndexTrends = ({ trendsInfo }: IndexTrendsProps) => {
  return (
    <div className={styles.slider}>
      <IndexTrendsSlide />
    </div>
  );
};

export default IndexTrends;
