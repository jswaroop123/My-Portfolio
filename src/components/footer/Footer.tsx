
import { VscGithubInverted } from "react-icons/vsc";
import {  FaLinkedin } from "react-icons/fa6";
import { SiGeeksforgeeks } from "react-icons/si";
import { NavLink } from "react-router";

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
    <footer className="bg-gray-700 mt-20">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 text-center md:text-center">
          {/* Left: Copyright */}
          <div className="text-sm text-gray-400 md:items-center">
            Copyright © {new Date().getFullYear()} — All rights reserved by 
            <span> jyothi swaroop N</span>.
          </div>

          {/* Center: Navigation */}
          <div className="flex justify-center gap-6 text-sm underline underline-offset-4 text-white">
            <NavLink to="/attributions" className="hover:text-white transition">
              Attributions
            </NavLink>
            <NavLink to="/shout-outs" className="hover:text-white transition">
              Shout Outs
            </NavLink>
        
          </div>

          {/* Right: Social Icons */}
          <div className="flex justify-center space-x-5">
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