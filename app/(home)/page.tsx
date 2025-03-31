import { staticArtists, staticTopMusics } from "@/constants/static-data";
import Index from "@/components/index/Index";

const HomePage = () => {
  return (
    <Index
      trends={staticTopMusics}
      topArtists={staticArtists}
      topMusics={staticTopMusics}
    />
  );
};

export default HomePage;
