import { FaGithub, FaHtml5, FaJava, FaLinkedinIn, FaPython } from "react-icons/fa6"
import { BiLogoTypescript, BiLogoJavascript, BiLogoReact } from "react-icons/bi";
import { RiNextjsLine } from "react-icons/ri";

export const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
        case "github":
            return (
                <div className={`bg-black rounded-xl p-2 text-2xl w-fit text-white`}>
                    <FaGithub />
                </div>
            )
        case "linkedin":
            return (
                <div className={`bg-blue-600 rounded-xl p-2 text-2xl w-fit text-white`}>
                    <FaLinkedinIn />
                </div>
            )
        case "java": 
            return (
                <div className={`bg-orange-500 rounded-xl p-2 text-2xl w-fit text-white`}>
                    <FaJava />
                </div>
            )
        case "typescript": 
            return (
                <div className={`bg-blue-700 rounded-xl p-2 text-2xl w-fit text-white`}>
                    <BiLogoTypescript />
                </div>
            )
        case "javascript": 
            return (
                <div className={`bg-yellow-500 rounded-xl p-2 text-2xl w-fit text-white`}>
                    <BiLogoJavascript />
                </div>
            )
        case "reactjs":
            return (
                <div className={`bg-blue-400 rounded-xl p-2 text-2xl w-fit text-white`}>
                    <BiLogoReact />
                </div>
            )
        case "reactts":
            return (
                <div className={`bg-blue-400 rounded-xl p-2 text-2xl w-fit text-white`}>
                    <BiLogoReact />
                </div>
            )
        case "nextjs":
            return (
                <div className={`bg-black rounded-xl p-2 text-2xl w-fit text-white`}>
                    <RiNextjsLine />
                </div>
            )
        case "html":
            return (
                <div className={`bg-orange-500 rounded-xl p-2 text-2xl w-fit text-white`}>
                    <FaHtml5 />
                </div>
            )
        case "python":
            return (
                <div className={`bg-blue-400 rounded-xl p-2 text-2xl w-fit text-white`}>
                    <FaPython />
                 </div>
            )
    }
} 