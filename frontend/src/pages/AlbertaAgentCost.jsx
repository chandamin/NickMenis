import AlbertaHero from "../components/alberta-agent-cost/AlbertaHero";
import AlbertaHiddenCost from "../components/alberta-agent-cost/AlbertaHiddenCost";
import AlbertaMethods from "../components//alberta-agent-cost/AlbertaMethods";
import AlbertaTotalCost  from "../components/alberta-agent-cost/AlbertaTotalCost";
import AlbertaSolution from "../components/alberta-agent-cost/AlbertaSolution";
import AlbertaCTA from "../components/alberta-agent-cost/AlbertaCTA";
import AlbertaCompliance from "../components/alberta-agent-cost/AlbertaCompliance";


const AlbertaAgentCost = () => {
  return (
    <>
    
      <AlbertaHero />
       <AlbertaHiddenCost />
        <AlbertaMethods />
        <AlbertaTotalCost />
        <AlbertaSolution />
      <AlbertaCTA />
      <AlbertaCompliance />
     
      
    </>
  );
};

export default AlbertaAgentCost;

