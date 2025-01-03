import React, { useEffect, useState } from "react";
import contentimg from "../../assets/images/content1img.svg";
import contentimg3 from "../../assets/images/content3img.svg";
import contentimg2 from "../../assets/images/content2img.svg";
import smallGrid from "../../assets/images/smallGrid.svg";
import cardicon from "../../assets/logo/documentIcon.svg";
import seticon from "../../assets/logo/seticon.svg";
import bagicon from "../../assets/logo/bagicon.svg";
import banericon from "../../assets/logo/banericon.svg";
import systemicon from "../../assets/logo/systemicon.svg";
import caseicon from "../../assets/logo/caseicon.svg";
import certification from "../../assets/logo/certificateicon.svg";
import fb from "../../assets/logo/facebook.svg";
import x from "../../assets/logo/xx.svg";
import ig from "../../assets/logo/ig.svg";

import yt from "../../assets/logo/youtube.svg";

import testimonal1card from "../../assets/images/testimonalimg1.svg";
import testimonal2card from "../../assets/images/testimonalimg2.svg";
import testimonal3card from "../../assets/images/testimonalimg3.svg";
import orgknowLogo from "../../assets/logo/orgknowLogo.svg";
import Banner from "../../assets/images/Banner.svg";
import LinePattern from "../../assets/images/LinePattern.svg";
import loadingTimerLogo from "../../assets/logo/loadingTimerLogo.svg";
import toolLogo from "../../assets/logo/toolLogo.svg";
import {
  ArrowBack,
  ArrowForward,
  MinusIcon,
  PlayIcon,
  PlusIcon,
} from "../../assets/icons/icon";

export default function Contents() {
  return (
    <div>
      <Partners />
      <WhyChooseUs />
      <Testimonials />
      <CourseDetails />
      <StandardProgram />
      <VideoCarousel />
      <FAQSection />
      <KickstartJourney />
      <Footer />
    </div>
  );
}

function Partners() {
  const images = [contentimg, contentimg2, contentimg3];

  return (
    <div>
      <div className="text-center font-bold text-xl mb-8 mt-7">
        Partnering with Global Leaders
      </div>
      <div className="flex justify-evenly   ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`content-img-${index}`}
            className="max-w-[160px]"
          />
        ))}
      </div>
    </div>
  );
}

function WhyChooseUs() {
  const contentData = [
    {
      icon: cardicon,
      title: "Certification",
      desc: "Receive a certificate after12 hours of intensive training.",
    },
    {
      icon: seticon,
      title: "Practical insternship",
      desc: "Apply your skills with a 1-month remote internship.",
    },
    {
      icon: bagicon,
      title: "Professional Guidance",
      desc: "Benefit from 1-month post-training career support.",
    },
    {
      icon: banericon,
      title: "Extensive Learning",
      desc: "Access up to 900 hours of rich learning content.",
    },
  ];

  const Card = (props) => {
    return (
      <div className="h-[316px] w-[280px] bg-primary-color rounded-xl relative p-4">
        <img
          alt=""
          src={smallGrid}
          className="absolute inset-0 object-cover rounded-xl"
        />
        <img src={props.data.icon} alt="" className="absolute top-1" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-lg font-semibold">{props.data.title}</h3>
          <p className="text-sm mt-2">{props.data.desc}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="text-center text-2xl font-bold mb-5 mt-12">
        Why Choose Us?
      </div>
      <div className="text-center text-gray-500 mb-8 w-full max-w-[950px] mx-auto">
        Extensive Training: Gain expertise in tools such as Power BI,
        Datawrapper, Azure, Excel, Co-pilot, Gemini, and more to create
        interactive dashboards and master the art of data storytelling.
      </div>

      <div className="mr-12 ml-12">
        <div className="flex justify-evenly gap-4 flex-wrap">
          {contentData.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-primary-color mt-9 w-[567px] h-[65.33px] py-0 px-[0.33px] rounded-full shadow-lg text-center font-archivo text-[16.33px] font-semibold leading-[26.13px] no-underline text-white">
          Download the Full Program Brochure and start your journey today!
        </button>
      </div>
    </div>
  );
}

function Testimonials() {
  const testcontents = [
    {
      img: testimonal1card,
      discrip:
        "HR professionals aiming to elevate their careers with data analytics expertise.",
    },
    {
      img: testimonal2card,
      discrip:
        "HR professionals aiming to elevate their careers with data analytics expertise.",
    },
    {
      img: testimonal3card,
      discrip:
        "HR professionals aiming to elevate their careers with data analytics expertise.",
    },
  ];

  const Card = (props) => {
    return (
      <div className="relative p-4 border rounded mt-8  w-[466px]">
        <img src={props.img} alt="testimonial" className="w-full h-auto mb-4" />
        <p className="text-wrap text-black font-medium">{props.discrip}</p>
      </div>
    );
  };

  return (
    <div>
      <div className="text-center text-2xl font-bold mb-5 mt-12">
         Is This Program the Right Fit for You?
      </div>

      <div className="flex justify-center space-x-4 ml-10 mr-10 p-[28px] rounded-[28px]  relative">
        {testcontents.map((content, index) => (
          <Card key={index} img={content.img} discrip={content.discrip} />
        ))}
      </div>
    </div>
  );
}

const CourseCard = ({ icon, title, description }) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg w-full max-w-[500px] mb-4">
      <img src={icon} alt="icon" className="w-16 h-16 object-contain mr-4" />

      <div className="flex flex-col">
        <p className="text-black font-semibold text-lg">{title}</p>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
};

const CourseDetails = () => {
  const courses = [
    {
      icon: loadingTimerLogo,
      title: "Course Duration",
      description: "12 hours of training spread across 3 sessions.",
    },
    {
      icon: toolLogo,
      title: "Tools Covered",
      description: "Learn Power BI, Datawrappers, Excel, Azure, and more.",
    },
    {
      icon: systemicon,
      title: "Remote Internship",
      description: "1-month hands-on internship with experience letter.",
    },
    {
      icon: caseicon,
      title: "Professional Guidance",
      description: "1-month of post-completion support.",
    },
    {
      icon: certification,
      title: "Certification",
      description: "Certificate awarded upon course completion.",
    },
  ];

  return (
    <div className="">
      <div className="flex justify-center">
        <button className="bg-primary-color mt-9 w-[567px] h-[65.33px] py-0 px-[0.33px] rounded-full shadow-lg text-center font-archivo text-[16.33px] font-semibold leading-[26.13px] no-underline text-white">
          Download the Full Program Brochure and start your journey today!
        </button>
      </div>
      <div className="text-center text-2xl font-bold mb-5 mt-12">
         Is This Program the Right Fit for You?
      </div>
      <div className="flex justify-center">
        <div className=" mt-[68px] grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              icon={course.icon}
              title={course.title}
              description={course.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const StandardProgram = (params) => {
  const PricingCard = ({
    title = "Standard Program",
    price = "499",
    buttonText = "Sign Up Now",
    onButtonClick = () => {},
  }) => {
    return (
      <div className="relative w-[400px] h-[400px]">
        <svg
          viewBox="0 0 717 718"
          className="absolute w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M203 430.083H143.5L143.5 344.917L58.3336 344.917V228.25L504 228.25L504 313.417L596.167 313.417L596.167 372.917L658 372.916V489.583L203 489.583V430.083Z"
            fill="#175654"
          />
          <g filter="url(#filter0_d_1_2486)">
            <rect
              x="116.667"
              y="154.167"
              width="443.333"
              height="518"
              rx="36.614"
              fill="#8BCBCB"
            />
            <rect
              x="117.311"
              y="154.811"
              width="442.044"
              height="516.711"
              rx="35.9694"
              stroke="#8F9092"
              strokeOpacity="0.24"
              strokeWidth="1.28913"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1_2486"
              x="90.7316"
              y="125.181"
              width="507.408"
              height="582.074"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="1.52558"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_1_2486"
              />
              <feOffset dx="6.10233" dy="3.05116" />
              <feGaussianBlur stdDeviation="15.2558" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.580392 0 0 0 0 0.580392 0 0 0 0 0.580392 0 0 0 0.06 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_2486"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_2486"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <div className="relative z-10 mr-[20px] flex flex-col items-center justify-center h-full p-6 text-center">
          <h2 className="mb-4 text-xl  text-primary-color">{title}</h2>
          <div className="mb-6">
            <span className="text-4xl font-bold  text-primary-color">
              ${price} USD
            </span>
          </div>

          <button className="bg-primary-color mt-9 w-[180px] h-[36px] py-0 px-[0.33px] rounded-full shadow-lg text-center font-archivo text-[16.33px] font-semibold leading-[26.13px] no-underline text-white">
            {buttonText}
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className="relative w-full">
      <img alt="" src={LinePattern} className="w-full h-auto object-cover" />
      <div className="absolute top-[35%] left-0 ml-[300px]">
        <div className="text-[28px]">Top-Notch Learning</div>
        <div className="text-[28px] font-semibold  ">
          That Won’t Break the Bank!
        </div>
      </div>
      <div className="absolute top-[35%] right-0 transform -translate-y-1/2 z-10">
        <PricingCard />
      </div>
    </div>
  );
};

const VideoCarousel = ({
  videos = [
    {
      id: 1,
      thumbnail: "/api/placeholder/600/400",
      title: "Customer Story 1",
    },
    {
      id: 2,
      thumbnail: "/api/placeholder/600/400",
      title: "Customer Story 2",
    },
    {
      id: 3,
      thumbnail: "/api/placeholder/600/400",
      title: "Customer Story 3",
    },
    {
      id: 4,
      thumbnail: "/api/placeholder/600/400",
      title: "Customer Story 4",
    },
  ],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-[100px]">
      <h2 className="mb-6 text-2xl font-semibold">Testimonials</h2>

      <div className="relative">
        {/* Video Grid */}
        <div className="flex gap-4 overflow-hidden">
          {videos.slice(currentIndex, currentIndex + 2).map((video, index) => (
            <div
              key={video.id}
              className="relative w-1/2 aspect-video bg-gray-200 rounded-lg overflow-hidden group"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* <button className="p-4 rounded-full bg-black/50 text-white transition-transform transform group-hover:scale-110"> */}
                <PlayIcon size={24} />
                {/* </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
          aria-label="Previous slide"
        >
          <ArrowBack size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
          aria-label="Next slide"
        >
          <ArrowForward size={24} />
        </button>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "How long is the program?",
      answer:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      question: "Is the program completely online?",
      answer:
        "The program is designed to be fully accessible online, allowing you to learn at your own pace from anywhere in the world.",
    },
    {
      question: "What certification will I get?",
      answer:
        "Upon successful completion, you'll receive an industry-recognized certification that validates your expertise in the field.",
    },
    {
      question: "How does the remote internship work?",
      answer:
        "The remote internship provides hands-on experience through virtual projects, mentorship, and collaboration with industry professionals.",
    },
    {
      question: "What tools will I master?",
      answer:
        "You'll gain proficiency in industry-standard tools and technologies used by professionals in the field.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 flex gap-8 items-center">
      <div className="w-1/3">
        <h2 className="text-3xl font-bold mb-4">Got Questions?</h2>
        <p className="text-xl mb-6">
          We've Got the Answers You're Looking For!
        </p>

        <button className="bg-[#0D2D2C] text-[12px] text-white px-6 py-3 rounded-full hover:bg-[#173f3e] transition-colors">
          Don't wait! Get the info you need and sign up today!
        </button>
      </div>

      <div className="w-2/3">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border rounded border-gray-200 mb-4  py-[6px] px-[20px]"
          >
            <button
              className="w-full py-4 flex items-center justify-between text-left"
              onClick={() => toggleQuestion(index)}
            >
              <span className="font-medium text-lg">{item.question}</span>
              {openIndex === index ? (
                <MinusIcon className="flex-shrink-0 text-gray-600" />
              ) : (
                <PlusIcon className="flex-shrink-0 text-gray-600" />
              )}
            </button>

            {openIndex === index && (
              <div className="pb-4 text-gray-600">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const KickstartJourney = () => {
  return (
    <div className="relative mx-[100px]">
      <img alt="" src={Banner} className="w-full" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full">
        <div className="text-white text-[28px] text-center">
          Kickstart Your Journey with <br /> Orgaknow Academy Today!
        </div>
        <div className="flex justify-center">
          <button className="bg-white mt-9 w-[280px] h-[36px] py-0 px-[0.33px] rounded-full shadow-lg text-center font-archivo text-[16.33px] font-semibold leading-[26.13px] no-underline text-[#0C0E13] hover:bg-gray-50 transition-colors">
            Don't Miss Out & Sign Up Today !
          </button>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 20,
    mins: 2,
    secs: 42,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, mins, secs } = prev;

        if (secs > 0) {
          secs--;
        } else {
          secs = 59;
          if (mins > 0) {
            mins--;
          } else {
            mins = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, mins, secs };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <footer className="bg-[#0D2D2C] text-white  mt-[80px] mb-[160px] py-[50px]">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-start">
          <div>
            <img src={orgknowLogo} alt="OrgaKnow Logo" className="w-24 h-24" />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="flex items-center gap-2 mb-2">
              <span>📧</span>
              <a
                href="mailto:info@OrgaKnow.com"
                className="hover:text-gray-300"
              >
                info@OrgaKnow.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+91-93190-30869" className="hover:text-gray-300">
                +91-93190-30869
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Social Proof</h3>
            <div className="flex gap-4">
              <img src={fb} alt="Girl in a jacket"></img>

              <img src={x} alt="Girl in a jacket"></img>

              <img src={ig} alt="Girl in a jacket"></img>
              <img src={fb} alt="Girl in a jacket"></img>
              <img src={yt} alt="Girl in a jacket"></img>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-7 left-0 right-0 border rounded-full bg-[#8BCBCB] py-4 px-6 mx-[100px]  shadow-lg z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-lg font-medium">
            Limited Seats Available. Secure Your Spot!
          </div>

          <div className="flex gap-4 items-center">
            <div className="flex gap-2">
              <div className="bg-white px-3 py-1 rounded">
                <div className="text-center font-bold">
                  {timeLeft.days.toString().padStart(2, "0")}
                </div>
                <div className="text-xs">Days</div>
              </div>
              <div className="bg-white px-3 py-1 rounded">
                <div className="text-center font-bold">
                  {timeLeft.hours.toString().padStart(2, "0")}
                </div>
                <div className="text-xs">Hours</div>
              </div>
              <div className="bg-white px-3 py-1 rounded">
                <div className="text-center font-bold">
                  {timeLeft.mins.toString().padStart(2, "0")}
                </div>
                <div className="text-xs">Mins</div>
              </div>
              <div className="bg-white px-3 py-1 rounded">
                <div className="text-center font-bold">
                  {timeLeft.secs.toString().padStart(2, "0")}
                </div>
                <div className="text-xs">Secs</div>
              </div>
            </div>

            <button className="bg-[#0D2D2C] text-white px-6 py-2 rounded-full hover:bg-[#1a4847] transition-colors">
              Don't Miss Out & Sign Up Today!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
