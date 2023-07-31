import { Download, Features, SectionWrapper } from './components';
import assets from './assets';

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your NFT Store. Start Selling and Growing"
        description="Buy, store, collect NFT, exchange and earn crypto. Join 50+ million people using ProNef Marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart UI Marketplace"
        description="Experience a buttery UI of ProNeft NFT Marketplace. Smooth fluent UI Design"
        mockupImg={assets.homeCards}
        reverse
      />
    </>
  );
};

export default App;
