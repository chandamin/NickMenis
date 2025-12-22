import SellerBanner from '../components/seller/seller-banner';
import SellerImageWith from '../components/seller/seller-image-text';
import SellerStepForm from '../components/seller/seller-step-form';
import Calculator from '../components/seller/calculetr';
import Howitwork from '../components/home/howitwork';

import Faq from '../components/home/faq';
import TestimonialSlider from '../components/home/testmonialslider';



const Home = () => {
  return (
    <>
    
      <SellerBanner />
      <SellerImageWith />
      <SellerStepForm />
      <Calculator />
       <Howitwork />
      <Faq />
      <TestimonialSlider />
      
  
    </>
  );
};

export default Home;
