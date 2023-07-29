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
    </>
  );
};

export default App;
