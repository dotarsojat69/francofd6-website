import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import Section from "./Section";

const Footer = () => {
  return (
    <Section>
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
        Open to work <span className="text-purple">or</span> start a project together
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-justify">
        Questions, concerns, or even casual conversations are always welcome. Whether you need assistance with a project, require some manpower, 
        or just want to connect, feel free to reach out to me anytime. I value open communication and am dedicated to providing support and 
        solutions whenever needed. Don’t hesitate to send me an email, give me a call, or contact me through any method that suits you. 
        I look forward to helping you and engaging in productive discussions.
        </p>
        <a href="mailto:francofreso@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 gap-10 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light mt-20">
          Copyright © 2024 Franco Freso Dixo
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-16">
          {socialMedia.map((info) => (
            <Link
              key={info.id}
              href={info.href}
              >
                <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                    <img src={info.img} alt="icons" width={20} height={20} />
                </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
    </Section>
  );
};

export default Footer;
