import IndexTrends from "./trends/IndexTrends";
import IndexArtits from "./artists/IndexArtists";
import IndexTopChart from "./top-chart/IndexTopChart";
import styles from "./Index.module.scss";
import { Music as TrendMusic } from "@/types/music"; // Your original Music type for trends
import { Artist, Music } from "@/types/component-types"; // Component-specific types

const Index = ({
  trends,
  topArtists,
  topMusics,
}: {
  trends: TrendMusic[];
  topArtists: Artist[];
  topMusics: Music[];
}) => {
  return (
    <section className={styles.section}>
      <IndexTrends trendsInfo={trends} />
      <div className={styles.content}>
        <IndexArtits artists={topArtists} />
        <IndexTopChart musics={topMusics} />
      </div>
    </section>
  );
};

export default Index;
