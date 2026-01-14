import CommonSeller from '../components/main-accordion/common-seller-faq';
import ServiceProcess from '../components/main-accordion/service-process';
import PricingValueFaq from '../components/main-accordion/pricing-value-faq';
import TrustBuldingFaq from '../components/main-accordion/trust-bulding-faq';
import OtherQuestionFaq from '../components/main-accordion/other-question-faq';

const Accordion = () => {
  return (
    <>
      <CommonSeller />
      <ServiceProcess />
      <PricingValueFaq />
       <TrustBuldingFaq />
       <OtherQuestionFaq />
    </>
  );
};

export default Accordion;