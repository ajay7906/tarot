import AchievementsComponent from "../components/achievement/Achivement";
import Blog from "../components/blog/BlogSection";
import Chatbot from "../components/chatbot/Chatbot";
import TarotClassPage from "../components/class/Class";
import ClientProfile from "../components/client/ClientProfile";
import Contact from "../components/contact/Contact";
import AnimatedFAQComponent from "../components/faq/FaqCompo";
import AnimatedFooter from "../components/footer/Footer";
import TarotLandingPage from "../components/landing/LandingPage";
import NavBar from "../components/navbar/Navigation";
import Pricing from "../components/pricing/Pricing";
import SessionExperience from "../components/session/SessionExperience";
import TarotTopics from "../components/tarotopic/TaroTopic";
import Testimonials from "../components/testemonial/Testemonial";

const Home = ()=>{
    return (
     <>
    
     <TarotLandingPage/> 
     <Chatbot/>
     <ClientProfile/>
     <Pricing/>
     <TarotClassPage/>
     <Testimonials/>
     <TarotTopics/>
     <AchievementsComponent/>
     <AnimatedFAQComponent/>
     {/* <Blog/> */}
     <SessionExperience/>
     <Contact/>
    
     </>
    )
}

export default Home;