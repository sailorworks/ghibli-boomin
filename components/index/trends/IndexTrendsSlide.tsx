import Image from "next/image";
import styles from "./IndexTrendsSlide.module.scss";

const IndexTrendsSlide = () => {
  return (
    <div className={styles.slide}>
      <Image
        className={styles.img}
        src="/images/music/ghibli-background.gif"
        width={1920}
        height={1080}
        loading="eager"
        alt="Trending music animation"
      />
      <div className={styles.body}>
        <div className={styles.title} style={{ marginTop: "60px" }}>
          <span className={styles.titleLine} style={{ marginBottom: "15px" }}>
            Tune in to
          </span>
          <span className={styles.titleLine} style={{ marginBottom: "15px" }}>
            feel-good
          </span>
          <span className={styles.titleLine} style={{ marginBottom: "15px" }}>
            songs
          </span>
          <span className={styles.titleLine}>vibes</span>
        </div>
      </div>
    </div>
  );
};

export default IndexTrendsSlide;
