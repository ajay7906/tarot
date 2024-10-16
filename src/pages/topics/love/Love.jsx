
import AchievementsComponent from '../../../components/achievement/Achivement';
import ClientProfile from '../../../components/client/ClientProfile';
import AnimatedFAQComponent from '../../../components/faq/FaqCompo';
import Pricing from '../../../components/pricing/Pricing';
import LoveRelationshipsGuidance from '../../../components/topics/love/LoveAndRelationGuidance';
import LoveAndRelationship from '../../../components/topics/love/LoveAndRelationship'

const Love = ()=>{
    return ( 
        <div>
           <LoveAndRelationship/>
          <LoveRelationshipsGuidance/>
          <Pricing/>
          <ClientProfile/>
          <AchievementsComponent/>
          <AnimatedFAQComponent/>
        </div>
    )
}

export default Love;