import { Navigation } from "../components/navigation";
import ProfilePic from "../assets/dion.png";
import { Scrumble } from "../components/scrumble";
import Download from "../assets/download-gpt.png";

export function Profile() {


    return (
        <div className="absolute grid grid-rows-[15%_70%_15%] lg:grid-rows-[10%_80%_10%] h-screen z-1 w-full px-10 lg:px-20 items-center overflow-hidden">
            <Navigation />
            <div className="flex flex-col gap-5 lg:gap-10 lg:flex-row w-full items-center">
                <img src={ProfilePic} alt="something" className="size-80 lg:size-120 rounded-full " />
                <div className="flex flex-col w-2xs gap-3 lg:w-3xl lg:gap-5 lg:mt-15 font-roboto font-bold">
                    <p className="text-2xl lg:text-5xl">Hey There!</p>
                    <div className=" text-3xl lg:text-6xl">
                        <span>I'm Dion Wisdom Pasaribu and i'm a </span>
                        <Scrumble />
                    </div>
                    <div className="flex w-full h-13 lg:w-60 lg:h-18 bg-white rounded-[10px] text-black">
                        <div className="flex flex-row m-auto gap-3 items-center">
                            <p className="text-[20px] lg:text-2xl">Download CV</p>
                            <img src={Download} alt="download" className="size-7 lg:size-10"/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}