import { StarsBg } from "../components/stars";
import porto from "../assets/porto-ii.png";
import compmed from "../assets/compmed.png";
import Github from "../assets/github.png";
import elips from "../assets/elips_blur.png";

interface project {
    image: string,
    title: string,
    description: string,
    href: string,
}

export function Projects() {
    const projects: project[] = [
        {
            image: porto,
            title: "Portofolio Website",
            description: "A simple website where I share my journey, work, and interests in the field of software engineering.",
            href: "https://github.com/DionWsdm/Portofolio_II",
        },
        {
            image: compmed,
            title: "CompMed",
            description: "This project is a recruitment assignment from compfest 17. A simple social media website where I chose X as a reference.",
            href: "https://github.com/DionWsdm/CompMed-FE"
        },
    ]
    
    return (
        <div className="flex flex-col w-full md:w-2xl xl:w-6xl 2xl:w-7xl h-auto items-center gap-5 lg:gap-10 lg:mb-30 pb-20">
            <div className="absolute flex w-full h-800 overflow-x-hidden -translate-y-400 -z-10">
                <img
                    src={elips}
                    alt=""
                    className="absolute -z-10 w-full right-0 h-full blur-[1000px] xl:translate-x-250 2xl:translate-x-320 object-cover"
                />
            </div>
            <StarsBg height={window.innerWidth < 450 ? 1100 : 600} jumlah={100}/>
            <p className="text-3xl md:text-6xl lg:text-5xl font-bold mb-5">My Projects</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-8 items-center">
                {projects.map((project) => (
                    <a href="https://dion-wsdm.vercel.app/" className="flex flex-col items-center w-80 md:w-150 lg:w-full py-4 bg-neutral-400/10 rounded-[10px] hover:text-black hover:bg-white hover:scale-105 transition-transform duration-300 mx-auto">
                        <div className="flex flex-col w-[90%] text-[14px] h-80 md:h-130 lg:h-100 items-center gap-3">
                            <img src={project.image} alt="portofolio" className=""/>
                            <p className="text-[18px] md:text-4xl lg:text-2xl font-bold">{project.title}</p>
                            <p className="text-[14px] md:text-2xl lg:text-[16px] h-20">{project.description}</p>
                            <div className="flex w-full flex-row-reverse">
                                <a href={project.href} className="flex flex-row bg-blue-500/50 w-25 md:w-30 lg:w-25 h-9 md:h-12 lg:h-9 rounded-[5px] items-center justify-center gap-2">
                                    <img src={Github} alt="github" className="size-5 md:size-8 lg:size-5"/>
                                    <p className="text-[16px] md:text-[20px] lg:text-[16px]">GitHub</p>
                                </a>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}