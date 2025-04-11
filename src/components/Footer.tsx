import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa6";
import { SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  const socialLinks = [
    {
      
      tag: <VscGithubInverted size={20} />,
      url: "https://github.com/jswaroop123",
    },
  
    {
      
      tag: <FaLinkedin size={20} />,
      url: "https://www.linkedin.com/in/jyothi-swaroop-n-9446912a9/",
    },
    {
      
      tag: <SiGeeksforgeeks size={20} />,
      url: "https://www.geeksforgeeks.org/user/1si22i186/",
    },
  ];
  return (
    <footer className=" bg-gray-900 mt-5">
      <div className="mx-auto w-full max-w-screen-xl">
        {/* Bottom bar */}
        <div className="px-4 py-4 md:flex md:items-center md:justify-between md:px-[-300px]">
          <span className="text-sm text-white  sm:text-center">
            Copyright © 2025{" "}
            <a href="Deep learning" className="hover:underline">
              All rights reserved by Jyothi Swaroop N
            </a>
           
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0 rtl:space-x-reverse">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-amber-50 hover:text-blue-400 flex items-center gap-1"
              >
                {item.tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;