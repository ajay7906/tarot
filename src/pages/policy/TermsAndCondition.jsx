import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: 'Welcome',
      content: `Welcome to Tarot by Deepa | Tarot Reading Services! These terms and conditions outline the rules and regulations for the use of Tarot by Deepa's Website, located at https://www.tarotbydeepa.com. By accessing this website, we assume you accept these terms and conditions. Do not continue to use Tarot by Deepa | Tarot Reading Services if you do not agree to take all of the terms and conditions stated on this page.`
    },
    {
      title: 'Cookies',
      content: `The website uses cookies to help personalize your online experience. By accessing Tarot by Deepa | Tarot Reading Services, you agreed to use the required cookies. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you. We may use cookies to collect, store, and track information for statistical or marketing purposes to operate our website. You have the ability to accept or decline optional Cookies. There are some required Cookies that are necessary for the operation of our website. These cookies do not require your consent as they always work. Please keep in mind that by accepting required Cookies, you also accept third-party Cookies, which might be used via third-party provided services if you use such services on our website, for example, a video display window provided by third parties and integrated into our website.`
    },
    {
      title: 'License',
      content: `Unless otherwise stated, Tarot by Deepa and/or its licensors own the intellectual property rights for all material on Tarot by Deepa | Tarot Reading Services. All intellectual property rights are reserved. You may access this from Tarot by Deepa | Tarot Reading Services for your own personal use subjected to restrictions set in these terms and conditions.

You must not:
• Copy or republish material from Tarot by Deepa | Tarot Reading Services
• Sell, rent, or sub-license material from Tarot by Deepa | Tarot Reading Services
• Reproduce, duplicate or copy material from Tarot by Deepa | Tarot Reading Services
• Redistribute content from Tarot by Deepa | Tarot Reading Services

This Agreement shall begin on the date hereof.`
    },
    {
      title: 'User Comments',
      content: `Parts of this website offer users an opportunity to post and exchange opinions and information in certain areas of the website. Tarot by Deepa does not filter, edit, publish, or review Comments before their presence on the website. Comments do not reflect the views and opinions of Tarot by Deepa, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, Tarot by Deepa shall not be liable for the Comments or any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.

Tarot by Deepa reserves the right to monitor all Comments and remove any Comments that can be considered inappropriate, offensive, or causes a breach of these Terms and Conditions.

You warrant and represent that:
• You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;
• The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party;
• The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material, which is an invasion of privacy;
• The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.

You hereby grant Tarot by Deepa a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce, and edit any of your Comments in any and all forms, formats, or media.`
    },
    {
      title: 'Hyperlinking to our Content',
      content: `The following organizations may link to our Website without prior written approval:
• Government agencies;
• Search engines;
• News organizations;
• Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and
• System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our website.

These organizations may link to our home page, to publications, or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.

We may consider and approve other link requests from the following types of organizations:
• Commonly-known consumer and/or business information sources;
• Dot.com community sites;
• Associations or other groups representing charities;
• Online directory distributors;
• Internet portals;
• Accounting, law, and consulting firms; and
• Educational institutions and trade associations.

We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Tarot by Deepa; and (d) the link is in the context of general resource information.

These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.

If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to tarotbydeepa@gmail.com. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.

Approved organizations may hyperlink to our Website as follows:
• By use of our corporate name; or
• By use of the uniform resource locator being linked to; or
• Using any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.

No use of Tarot by Deepa's logo or other artwork will be allowed for linking absent a trademark license agreement.`
    },
    {
      title: 'Content Liability',
      content: `We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are raised on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third-party rights.`
    },
    {
      title: 'Reservation of Rights',
      content: `We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.`
    },
    {
      title: 'Removal of links from our website',
      content: `If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links, but we are not obligated to or so or to respond to you directly.

We do not ensure that the information on this website is correct. We do not warrant its completeness or accuracy, nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.`
    },
    {
      title: 'Disclaimer',
      content: `To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
• Limit or exclude our or your liability for death or personal injury;
• Limit or exclude our or your liability for fraud or fraudulent misrepresentation;
• Limit any of our or your liabilities in any way that is not permitted under applicable law; or
• Exclude any of our or your liabilities that may not be excluded under applicable law.

The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.

As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.`
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-purple-800 mb-8"
        >
          Terms and Conditions
        </motion.h1>
        <div className="space-y-4">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setActiveSection(activeSection === index ? null : index)}
                className="w-full text-left px-6 py-4 focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-purple-700">{section.title}</h2>
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${
                      activeSection === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <motion.div
                initial={false}
                animate={{ height: activeSection === index ? 'auto' : 0, opacity: activeSection === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 text-gray-700 whitespace-pre-wrap">{section.content}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;