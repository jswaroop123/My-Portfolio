import { IoIosArrowForward } from "react-icons/io";
import Container from "../../Container";
import { NavLink } from "react-router";
import { VscGithubInverted } from "react-icons/vsc";
import {  FaLinkedin } from "react-icons/fa6";
import { SiGeeksforgeeks } from "react-icons/si";


const Attributions = () => {
  const socialLinks = [
    {
      title: "GitHub by react-Icons",
      tag: <VscGithubInverted size={20} />,
      url: "https://react-icons.github.io/react-icons/search/#q=github",
    },
    {
      title: "LinkedIn by react-Icons",
      tag: <FaLinkedin size={20} />,
      url: "https://react-icons.github.io/react-icons/search/#q=linkedin",
    },
    {
      title: "Leetcode by react-Icons",
      tag: <SiGeeksforgeeks size={20} />,
      url: "https://react-icons.github.io/react-icons/search/#q=geeksforgeeks",
    },
  ];

  return (
    <Container>
      <div className="max-w-screen-md text-white px-4 flex flex-col gap-5">
        <div className="flex flex-row gap-2 items-center">
          <NavLink
            to="/"
            className="hover:underline hover:text-blue-600 transition flex items-center gap-1"
          >
            Home <IoIosArrowForward />
          </NavLink>
          <a href="" className="hover:underline">
            Attributions
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl">Attributions</h2>
          <div className="flex flex-col gap-3 py-4">
            {socialLinks.map((item, index) => (
              <div className="flex flex-row gap-3 items-center">
                <span>{item.tag}</span>
                <a
                  key={index}
                  href={item.url}
                  className="hover:underline hover:text-blue-600w"
                >
                  {item.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Attributions;