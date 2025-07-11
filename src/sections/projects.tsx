import { StarsBg } from "../components/stars";
import porto from "../assets/porto-ii.png";
import compmed from "../assets/compmed.png";
import Github from "../assets/github.png";

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
        // {
        //     image: "",
        //     title: "",
        //     description: "",
        // }
    ]
    
    return (
        <div className="flex flex-col w-80 lg:w-7xl h-auto items-center mb-15 lg:mb-30">
            <StarsBg height={window.innerWidth < 450 ? 1100 : 600} jumlah={100}/>
            <p className="text-3xl lg:text-5xl font-bold mb-5">My Projects</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5 items-center">
                {projects.map((project) => (
                    <a href="https://dion-wsdm.vercel.app/" className="flex flex-col items-center w-full py-4 bg-neutral-400/10 rounded-[10px] hover:text-black hover:bg-white">
                        <div className="flex flex-col w-[90%] text-[14px] items-center gap-3">
                            <img src={project.image} alt="portofolio" />
                            <p className="text-[18px] lg:text-2xl font-bold">{project.title}</p>
                            <p className="text-[14px] lg:text-[16px]">{project.description}</p>
                            <div className="flex w-full flex-row-reverse">
                                <a href={project.href} className="flex flex-row bg-blue-500/50 w-25 h-9 rounded-[5px] items-center justify-center gap-2">
                                    <img src={Github} alt="github" className="size-5"/>
                                    <p>GitHub</p>
                                </a>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}