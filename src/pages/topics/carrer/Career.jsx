import AchievementsComponent from "../../../components/achievement/Achivement";
import ClientProfile from "../../../components/client/ClientProfile";
import AnimatedFAQComponent from "../../../components/faq/FaqCompo";
import Pricing from "../../../components/pricing/Pricing";
import CareerGuidance from "../../../components/topics/carrer/CareerGuidance";
import CareerAndFinance from "../../../components/topics/carrer/Carrer";

const Career = () => {

    return (    
        <div>   
            <CareerAndFinance/> 
            <CareerGuidance/>
            <Pricing/>
            <ClientProfile/>
            <AchievementsComponent/>
            <AnimatedFAQComponent/>
        </div>
    )
}

export default Career;