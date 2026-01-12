import SellerBanner from '../components/seller/seller-banner';
import SellerImageWith from '../components/seller/seller-image-text';
import SellerStepForm from '../components/seller/seller-step-form';
import Calculator from '../components/seller/calculetr';
import Howitwork from '../components/home/howitwork';

import SallersFaq from '../components/seller/sallers-faq';
import HomeownerReview from '../components/seller/homeowner-review';
import AgentReview from '../components/seller/agent-review';



const Home = () => {
  return (
    <>
    
      <SellerBanner />
      <SellerImageWith />
      <SellerStepForm />
      <Calculator />
       <Howitwork />
      <SallersFaq />
      <HomeownerReview />
      <AgentReview />
      
  
    </>
  );
};

export default Home;
