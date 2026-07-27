import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { FaLaptopCode, FaMobileAlt, FaFigma, FaPuzzlePiece } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaLaptopCode className="text-6xl mb-4" />,
    title: 'Website Development',
    description: 'Transform your online presence with cutting-edge, responsive websites that captivate and convert visitors into loyal customers.',
    technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'node.js', 'MongoDb', 'PostgeSQL'],
    additionalInfo: ['SEO Optimization', 'Performance Tuning', '3 Free Changes deployment'],
    startingPrice: 300,
  },
  {
    icon: <FaMobileAlt className="text-6xl mb-4" />,
    title: 'Mobile App Development',
    description: 'Bring your app idea to life with our expert Android development, ensuring a seamless user experience and top-notch performance.',
    technologies: ['React Native', 'Expo', 'Firebase'],
    additionalInfo: ['Cross Platform App', 'Android and IOS'],
    startingPrice: 400,
  },
  {
    icon: <FaFigma className="text-6xl mb-4" />,
    title: 'UI/UX Design',
    description: 'Elevate your digital products with intuitive, visually stunning designs that delight users and drive engagement.',
    technologies: ['Figma', 'UI Design', 'UX Study'],
    additionalInfo: ['User Research', 'Prototyping', 'Usability Testing'],
    startingPrice: 200,
  },
  {
    icon: <FaPuzzlePiece className="text-6xl mb-4" />,
    title: 'Custom Feature Integration',
    description: 'Enhance your existing digital products with tailor-made features that address your unique business challenges and user needs.',
    technologies: ['API Development', 'Third-party Integrations', 'Cloud Services'],
    additionalInfo: ['Seamless Integration', 'Performance Optimization', 'Documentation'],
    startingPrice: 200,
  },
  // {
  //   icon: <FaComments className="text-6xl mb-4" />,
  //   title: 'Tech Consultation',
  //   description: 'Gain a competitive edge with our expert guidance on digital strategy, ensuring your tech investments align perfectly with your business goals.',
  //   technologies: ['Architecture Planning', 'Tech Stack Selection', 'Scalability Strategy'],
  //   additionalInfo: ['ROI Analysis', 'Risk Assessment', 'Roadmap Creation'],
  //   startingPrice: 100,
  // },
];

const Services = () => {

  const handleGetStartedClick = (serviceTitle) => {
    const mailtoLink = `mailto:developerhuzaifa@gmail.com?subject=Interested%20in%20${encodeURIComponent(serviceTitle)}`;
    window.location.href = mailtoLink;
  };


  return (
    <section className="py-20" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Elevate Your Digital Presence
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock the full potential of your business with our cutting-edge development services tailored to your unique needs.
          </p>
        </div>

        <div className="mt-16">
          <Splide
            options={{
              type: 'loop',
              perPage: 2,
              gap: '2rem',
              focus: 'center',
              autoplay: true,
              interval: 2500,
              arrows: true,
              pagination: false,
              breakpoints: {
                640: {
                  perPage: 1,
                },
              },
            }}
          >
            {servicesData.map((service, index) => (
              <SplideSlide key={index}>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105 duration-300 h-full flex flex-col">
                  <div className="p-8 flex-grow">
                    <div className="flex items-center justify-center text-indigo-600 mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-center mb-6">
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 text-center">Key Technologies:</h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-center">What's Included:</h4>
                      <ul className="text-gray-600 space-y-2">
                        {service.additionalInfo.map((info, idx) => (
                          <li key={idx} className="flex items-center justify-center">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            {info}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-6">
                    <p className="text-3xl font-bold text-indigo-600 text-center mb-4">
                      Starting at ${service.startingPrice}
                    </p>
                    <button onClick={() => handleGetStartedClick(service.title)}  className="w-full inline-block px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300 font-semibold text-lg">
                      Get Started
                    </button>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>

        <div className="mt-20 text-center bg-indigo-100 rounded-3xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-indigo-900 mb-4">
            Exclusive Offer for New Clients!
          </h3>
          <p className="text-xl text-indigo-700 mb-8 max-w-2xl mx-auto">
            Take the first step towards digital excellence! Get a FREE custom Hero section design for your landing page, valued at $150.
          </p>
          <a
            href="mailto:developerhuzaifa@gmail.com?subject=FREE%20Hero%20Section&body=I'm%20interested%20in%20the%20free%20Figma%20Hero%20section%20design%20for%20my%20website."
            className="px-8 py-4 bg-indigo-600 text-white font-bold text-lg rounded-full hover:bg-indigo-700 transition-colors duration-300 inline-block shadow-md hover:shadow-xl transform hover:-translate-y-1"
          >
            Claim Your Free Design Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;