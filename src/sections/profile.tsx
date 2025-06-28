import { Navigation } from "../components/navigation";
import ProfilePic from "../assets/dion.png";
import { Scrumble } from "../components/scrumble";
import Download from "../assets/download-gpt.png";
import Instagram from "../assets/instagram.png";
import Github from "../assets/github.png";
import Linkedin from "../assets/linkedin.png";
import elips from "../assets/elips_blur.png";
import { StarsBg } from "../components/stars";
import { useState } from "react";

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
    },
  ];

  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="grid grid-rows-[10%_70%_15%] lg:grid-rows-[10%_80%_10%] h-[95vh] lg:h-[90vh] w-full px-10 lg:px-20 items-center overflow-hidden">
      <img
        src={elips}
        alt=""
        className="absolute -z-10 left-0 w-full h-full blur-[1000px] -translate-x-50 object-cover overflow-y-hidden"
      />
      <StarsBg />
      <Navigation setIsFlipped={setIsFlipped}/>
      <div className="flex flex-col gap-5 lg:flex-row w-full h-full items-center -translate-y-8 lg:-translate-y-0">
        <div className="flex flex-col gap-3 lg:flex-row items-center lg:gap-0">
          <img
            src={ProfilePic}
            alt="something"
            className="size-60 lg:size-120 rounded-full overflow-x-hidden object-cover"
          />
        </div>
        <div className="flex h-auto lg:h-110 w-full">
          <div className="relative w-full lg:w-4xl perspective-[1000px] items-center mx-auto">
            <div
              className={`relative font-roboto font-bold w-full h-auto duration-700 transform-3d mx-auto ${
                isFlipped ? "rotate-y-180" : ""
              }`}
            >
              {/* Front-side */}
              <div className="absolute flex flex-col backface-hidden py-3 lg:flex-row items-center gap-5 lg:gap-10 w-full h-auto lg:-translate-x-10 bg-neutral-500/10 lg:mt-20 lg:py-10 rounded-2xl">
                <div className="flex flex-row lg:flex-col gap-5 lg:ml-10">
                  {medias.map((media) => (
                    <a
                      href={media.link}
                      className="flex size-10 lg:size-15 rounded-full bg-white"
                    >
                      <img
                        src={media.src}
                        alt="media"
                        className="size-7 lg:size-10 m-auto"
                      />
                    </a>
                  ))}
                </div>
                <div className="flex flex-col gap-3 w-[90%] h-full lg:w-3xl lg:gap-5">
                  <p className="text-2xl lg:text-5xl">Hey There!</p>
                  <div className=" text-3xl lg:text-6xl">
                    <span>I'm Dion Wisdom Pasaribu and i'm a </span>
                    <Scrumble />
                  </div>
                  <div className="relative flex flex-row w-full">
                    <a
                      href="https://drive.google.com/uc?export=download&id=1nc9o775RhHoxHWdvUKnLsrmmciVQXe35"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-40 h-10 lg:w-60 lg:h-18 bg-white rounded-[10px] text-black"
                    >
                      <div className="flex flex-row m-auto gap-3 items-center">
                        <p className="lg:text-[20px] lg:text-2xl">Download CV</p>
                        <img
                          src={Download}
                          alt="download"
                          className="size-6 lg:size-10"
                        />
                      </div>
                    </a>
                    <button
                      className="absolute right-0 lg:right-12 bottom-0 transition bg-neutral-300/10 hover:bg-neutral-300/20 w-25 h-10 rounded-2xl hover:cursor-pointer"
                      onClick={() => {
                        setIsFlipped(true);
                        console.log(isFlipped);
                      }}
                    >
                      About Me
                    </button>
                  </div>
                </div>
              </div>

              {/* Back-side */}
              <div className="absolute flex flex-col gap-5 w-full h-auto items-center py-3 bg-neutral-500/10 backface-hidden lg:translate-x-10 rounded-2xl lg:mt-20 lg:py-10 rotate-y-180">
                <div className="flex flex-col w-[90%] gap-3 lg:w-3xl lg:gap-5">
                  <p className="text-2xl lg:text-5xl">About Me</p>
                  <article className="text-[14px] lg:text-[20px]">
                    I'm an undergraduate Information System student at Universitas Indonesia. I am a
                    dedicated student with a profound interest in technology,
                    programming, mathematics, and business. I have a
                    desire to deeply learn Web Development, Artifical
                    Intelligence, and Data Science. I am committed to excellence
                    in all tasks I undertake and consistently seek opportunities
                    to enhance my skills and apply them in a meaningful and
                    impactful manner.
                  </article>
                  <div className="relative w-full mt-7">
                        <button className="absolute right-0 bottom-2 lg:bottom-0 transition bg-neutral-300/10 w-25 h-10 rounded-2xl hover:cursor-pointer hover:bg-neutral-300/20"
                        onClick={() => setIsFlipped(false)}>
                            Profile
                        </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
