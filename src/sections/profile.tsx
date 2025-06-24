import { Navigation } from "../components/navigation";
import ProfilePic from "../assets/dion.png";
import { Scrumble } from "../components/scrumble";
import Download from "../assets/download-gpt.png";
import Instagram from "../assets/instagram.png";
import Github from "../assets/github.png";
import Linkedin from "../assets/linkedin.png";

export function Profile() {
    const medias = [
        {
            src: Instagram,
            link: "https://www.instagram.com/dwspb/",
        }, 
        {
            src: Github,
            link: "https://github.com/DionWsdm",
        },
        {
            src: Linkedin,
            link: "https://www.linkedin.com/in/dion-wisdom-pasaribu-825031324/",
        }]


    return (
        <div className="absolute grid grid-rows-[15%_70%_15%] lg:grid-rows-[10%_80%_10%] h-screen z-1 w-full px-10 lg:px-20 items-center overflow-hidden">
            <Navigation />
            <div className="flex flex-col gap-5 lg:gap-10 lg:flex-row w-full items-center">
                <div className="flex flex-col gap-3 lg:flex-row items-center lg:gap-0">
                    <img src={ProfilePic} alt="something" className="size-80 lg:size-120 rounded-full overflow-x-hidden" />
                    <div className="flex flex-row lg:flex-col gap-5">
                        {medias.map((media) => (
                            <a href={media.link} className="flex size-10 lg:size-15 rounded-full bg-white">
                                <img src={media.src} alt="media" className="size-7 lg:size-10 m-auto"/>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col w-2xs gap-3 lg:w-3xl lg:gap-5 lg:mt-15 font-roboto font-bold">
                    <p className="text-2xl lg:text-5xl">Hey There!</p>
                    <div className=" text-3xl lg:text-6xl">
                        <span>I'm Dion Wisdom Pasaribu and i'm a </span>
                        <Scrumble />
                    </div>
                    <a href="https://drive.google.com/uc?export=download&id=1nc9o775RhHoxHWdvUKnLsrmmciVQXe35" download 
                        target="_blank" rel="noopener noreferrer" 
                        className="flex w-full h-13 lg:w-60 lg:h-18 bg-white rounded-[10px] text-black">
                        <div className="flex flex-row m-auto gap-3 items-center">
                            <p className="text-[20px] lg:text-2xl">Download CV</p>
                            <img src={Download} alt="download" className="size-7 lg:size-10"/>
                        </div>
                    </a>
                </div>
                
            </div>
        </div>
    )
}