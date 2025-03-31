import {
  staticArtists,
  staticTopMusics,
  staticTrends,
} from "@/constants/static-data";
import Index from "@/components/index/Index";

const HomePage = () => {
  return (
    <Index
      trends={staticTrends}
      topArtists={staticArtists}
      topMusics={staticTopMusics}
    />
  );
};

export default HomePage;
