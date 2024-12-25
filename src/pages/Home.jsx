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

const Home = () => {
    return (
        <>


            <head>
                <title>Find Your Way with Deepa's Tarot Card Reading | Clarity and Comfort</title>
                <meta name="description" content="Discover clarity and direction with Deepa's tarot readings. Explore collaboration, healing, and spiritual growth. Find answers to life's biggest questions with caring guidance." />
                <meta name="keywords" content="tarot card reading, spiritual guidance, healing, collaboration, spiritual growth, Deepa tarot, tarot classes, tarot sessions, life clarity" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>






            <TarotLandingPage />
            <Chatbot />
            <ClientProfile />
            <Pricing />
            <TarotClassPage />
            <Testimonials />
            <TarotTopics />
            <AchievementsComponent />
            <AnimatedFAQComponent />
            {/* <Blog/> */}
            <SessionExperience />
            <Contact />

        </>
    )
}

export default Home;