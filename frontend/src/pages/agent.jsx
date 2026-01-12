import AgentBanner from '../components/agent/agents-banner';
import AgentDashboard from '../components/agent/agent-dashboard';
import SubscriptionPlans from '../components/agent/subscribe';
import LeadsDashboard from '../components/agent/leadsdashboard';
import TestimonialSlider from '../components/agent/agent-testmonial';
import AgentFaq from '../components/agent/agent-faq';

const Agentp = () => {
  return (
    <>
    
      <AgentBanner />
      <AgentDashboard />
      {/* <SubscriptionPlans />
      <LeadsDashboard /> */}
      <AgentFaq />
      <TestimonialSlider />
      
      
    </>
  );
};

export default Agentp;