import AnimatedFAQComponent from "../../components/faq/FaqCompo"
import TarotIntroduction from "../../components/guidancecompo/TarotIntroduction"
import TarotReading from "../../components/guidancecompo/TarotReading"
import Pricing from "../../components/pricing/Pricing"

const Guidance = () => {
    return (
        <>

            <TarotIntroduction />
            <TarotReading />
            <Pricing/>
            <AnimatedFAQComponent/>
        </>
    )
}


export default Guidance