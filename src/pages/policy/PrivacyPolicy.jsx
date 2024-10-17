import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: 'Introduction',
      content: `Tarot by Deepa | Tarot Reading Services website is owned by Deepa Singhania, who is the data controller of your personal data.

We have adopted this Privacy Policy, which determines how we process the information collected by Tarot by Deepa | Tarot Reading Services, and it provides the reasons why we must collect certain personal data about you. Therefore, you must read this Privacy Policy before using the Tarot by Deepa Tarot Reading Services website.

We take care of your personal data and undertake to guarantee its confidentiality and security.`
    },
    {
      title: 'Personal Information We Collect',
      content: `When you visit the Tarot by Deepa | Tarot Reading Services website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the installed cookies on your device. Additionally, as you browse the site, we collect information about the individual web pages or products you view, what websites or search terms referred you to the site, and how you interact with the site. We refer to this automatically collected information as "Device Information." 

Moreover, we might collect the personal data you provide to us (including but not limited to your name, surname, address, payment information, etc.) during registration to fulfill the agreement.`
    },
    {
      title: 'Why Do We Process Your Data?',
      content: `Our top priority is customer data security, and, as such, we may process only minimal user data—only as much as is absolutely necessary to maintain the website. Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding website usage. This statistical information is not aggregated in such a way that it would identify any particular user of the system.

You can visit the website without telling us who you are or revealing any information that could identify you as a specific, identifiable individual. However, if you wish to use some of the website's features, or you wish to receive our newsletter or provide other details by filling out a form, you may provide personal data to us, such as your email, first name, last name, city of residence, organization, and telephone number. You can choose not to provide us with your personal data, but then you may not be able to take advantage of some of the website's features. For example, you won't be able to receive our newsletter or contact us directly from the website. Users who are uncertain about what information is mandatory are welcome to contact us via tarotbydeepa@gmail.com.`
    },
    {
      title: 'Your Rights',
      content: `If you are a European resident, you have the following rights related to your personal data:
- The right to be informed.
- The right of access.
- The right to rectification.
- The right to erasure.
- The right to restrict processing.
- The right to data portability.
- The right to object.
- Rights in relation to automated decision-making and profiling.

If you would like to exercise these rights, please contact us through the contact information below.

Additionally, if you are a European resident, we note that we are processing your information in order to fulfill contracts we might have with you (for example, if you make an order through the site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information might be transferred outside of Europe, including Canada and the United States.`
    },
    {
      title: 'Links to Other Websites',
      content: `Our website may contain links to other websites that are not owned or controlled by us. Please be aware that we are not responsible for such other websites or third parties' privacy practices. We encourage you to be aware when you leave our website and read the privacy statements of each website that may collect personal information.`
    },
    {
      title: 'Information Security',
      content: `We secure the information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We keep reasonable administrative, technical, and physical safeguards to protect against unauthorized access, use, modification, and personal data disclosure in our control and custody. However, no data transmission over the Internet or wireless network can be guaranteed.`
    },
    {
      title: 'Legal Disclosure',
      content: `We will disclose any information we collect, use, or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, your safety, or the safety of others, investigate fraud, or respond to a government request.`
    },
    {
      title: 'Contact Information',
      content: `If you would like to contact us to understand more about this Policy or wish to inquire concerning any matter relating to individual rights and your Personal Information, you may send an email to tarotbydeepa@gmail.com.`
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-indigo-800 mb-8"
        >
          Privacy Policy
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
                  <h2 className="text-xl font-semibold text-indigo-700">{section.title}</h2>
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

export default PrivacyPolicy;