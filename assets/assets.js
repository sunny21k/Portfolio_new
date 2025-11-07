import { FaCode, FaProjectDiagram } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiOpencv, SiPandas, SiScikitlearn } from "react-icons/si";

export const workData = [
  {
    title: "AI Powered Waste Management App",
    description: "Full Stack",
    bgImage: "/work-1.png",
  },
  {
    title: "NBA Player Performance Predictor",
    description: "Machine Learning",
    bgImage: "/work-2.png",
  },
  {
    title: "AI Blog Generator Web App",
    description: "Full Stack",
    bgImage: "/work-3.png",
  },
  {
    title: "UI/UX designing",
    description: "UI/UX Design",
    bgImage: "/work-4.png",
  },
];

export const serviceData = [
  {
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    title: "Graphics design",
    description:
      "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

export const infoList = [
  {
    title: "Languages",
    description: "JavaScript, TypeScript, Java, Lua, Python, C, C++, Kotlin",
    icon: <FaCode className="text-2xl text-blue-500" />,
  },
  {
    title: "Education",
    description: "Bachelor’s degree in Computer Science",
    icon: <IoSchool className="text-2xl text-green-500" />,
  },
  {
    title: "Projects",
    description: "Built over 20 applications across different tech stacks.",
    icon: <FaProjectDiagram className="text-2xl text-purple-500" />,
  },
];


export const toolsData = [
  {
    name: "React",
    icon: <FaReact className="text-3xl text-blue-500" />
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-3xl text-teal-400" />
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-3xl text-black" />
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-3xl text-green-500" />
  },
  {
    name: "Express",
    icon: <SiExpress className="text-3xl text-gray-700" />
  },
  {
    name: "OpenCV",
    icon: <SiOpencv className="text-3xl text-blue-700" />
  },
  {
    name: "Pandas",
    icon: <SiPandas className="text-3xl text-indigo-500" />
  },
];