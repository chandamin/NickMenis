import AgentBanner from '../components/agent/agents-banner';
import AgentDashboard from '../components/agent/agent-dashboard';
import SubscriptionPlans from '../components/agent/subscribe';
import LeadsDashboard from '../components/agent/leadsdashboard';
import TestimonialSlider from '../components/agent/agent-testmonial';
import AgentFaq from '../components/agent/agent-faq';
// import { Route } from 'react-router-dom';

const Agentp = () => {
  return (
    <>
    
      <AgentBanner />
      {/* <Route path="/dashboard" element={<AgentDashboard />} /> */}
      <AgentDashboard />
      <SubscriptionPlans />
      <LeadsDashboard />
      <TestimonialSlider />
      <AgentFaq />
      
    </>
  );
};

export default Agentp;