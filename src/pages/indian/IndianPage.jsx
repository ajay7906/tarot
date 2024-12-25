import { Helmet } from "react-helmet"
import FAQMONEY from "../../components/faqformney/FaqMoney"
import TarotPackagesPageIndia from "../../components/indian/TarotPackageIndia"
import TarotPackagesPage from "../../components/international/International"
import VideoVsChat from "../../components/videochat/VideoVsChat"

const IndianPage = () => {

    return (      
        <> 
       <Helmet>
       <title>Transparent and Fair Pricing for Your Tarot Journey | Deepa's Tarot Readings</title>
        <meta name="description" content="Whether it's a short session or a deeper look into your spiritual journey, Deepa's pricing is transparent. Focus on yourself, your growth, and peace of mind with clear quotations." />
        <meta name="keywords" content="tarot pricing, tarot packages, spiritual journey, transparent pricing, fair pricing, tarot readings cost, video tarot session, chat tarot session, Deepa tarot packages" />
        <meta name="robots" content="index, follow" />
        </Helmet> 
        <div>
        <TarotPackagesPageIndia/>
        <VideoVsChat/>
        <FAQMONEY/>
      
    </div> </>
      )
}

export default IndianPage;