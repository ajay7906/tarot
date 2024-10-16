import AchievementsComponent from "../../../components/achievement/Achivement";
import ClientProfile from "../../../components/client/ClientProfile";
import AnimatedFAQComponent from "../../../components/faq/FaqCompo";
import Pricing from "../../../components/pricing/Pricing";
import PersonalGrowth from "../../../components/topics/personal/Personal";
import PersonalGrowthGuidance from "../../../components/topics/personal/PersonalGuidance";


const Personal = () => {
    return (
        <div>
            <PersonalGrowth />
            <PersonalGrowthGuidance />
            <Pricing/>
            <ClientProfile/>
            <AchievementsComponent />
            <AnimatedFAQComponent/>
        </div>
    )
}

export default Personal;