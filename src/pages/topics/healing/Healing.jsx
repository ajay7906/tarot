import AchievementsComponent from "../../../components/achievement/Achivement";
import ClientProfile from "../../../components/client/ClientProfile";
import AnimatedFAQComponent from "../../../components/faq/FaqCompo";
import Pricing from "../../../components/pricing/Pricing";
import Healing from "../../../components/topics/healing/Healing";
import HealingGuidance from "../../../components/topics/healing/HealingGuidance";


const HealingPage = ()=>{
    return ( 
        <div>
           <Healing/>
           <HealingGuidance/>
           <Pricing/>
          <ClientProfile/>
          <AchievementsComponent/>
          <AnimatedFAQComponent/>
        </div>
    )
}

export default HealingPage;