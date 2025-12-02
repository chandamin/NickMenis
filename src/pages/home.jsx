import Banner from '../components/home/banner';
import Howitwork from '../components/home/howitwork';
import ImageWithText from '../components/home/imagewithtext';
import MultiColumnCards from '../components/home/multicolumncards';
import Formsellers from '../components/home/formsellers';
import CenterBanner from '../components/home/centerbanner';
import Faq from '../components/home/faq';
import TestimonialSlider from '../components/home/testmonialslider';
import Tagline from '../components/home/tagline';


const Home = () => {
  return (
    <>
    
      <Banner />
      <Howitwork />
      <ImageWithText />
      <MultiColumnCards />
      <Formsellers />
      <CenterBanner />
      <Faq />
      <TestimonialSlider />
      <Tagline />
  
    </>
  );
};

export default Home;
