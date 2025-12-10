import SellerBanner from '../components/seller/seller-banner';
import SellerImageWith from '../components/seller/seller-image-text';
import SellerStepForm from '../components/seller/seller-step-form';
import Calculator from '../components/seller/calculetr';
import Howitwork from '../components/home/howitwork';

import Faq from '../components/home/faq';
import TestimonialSlider from '../components/home/testmonialslider';

import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';



const Home = () => {

  const calculatorRef = useRef(null);
  const form = useRef(null);
  const location = useLocation();
  // When page loads, auto-scroll to Calculator
  // useEffect(() => {
  //   if (calculatorRef.current) {
  //     calculatorRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, []);
  useEffect(() => {
    if (location.state?.scrollToCalc && calculatorRef.current) {
      calculatorRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const scrollForm = () => {
    form.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    
      <SellerBanner scrollForm = {scrollForm}/>
      <SellerImageWith scrollForm = {scrollForm}/>
      <SellerStepForm ref={form}/>
      <Calculator ref={calculatorRef}/>
      <Howitwork />
      <Faq />
      <TestimonialSlider />
      
  
    </>
  );
};

export default Home;
