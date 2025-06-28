import { StarsBg } from "../components/stars";
import Porto from "../assets/porto-ii.png";

interface project {
    image: string,
    title: string,
    description: string,
}

export function Projects() {
    const projects: project[] = [
        {
            image: Porto,
            title: "Portofolio Website",
            description: "A simple website where I share my journey, work, and interests in the field of software engineering.",
        },
        // {
        //     image: "",
        //     title: "",
        //     description: "",
        // },
        // {
        //     image: "",
        //     title: "",
        //     description: "",
        // }
    ]
    
    return (
        <div className="flex flex-col w-7xl mx-10">
            <StarsBg />
            <p className="text-3xl lg:text-5xl font-bold mb-5">My Projects</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-5 items-center">
                {projects.map((project) => (
                    <div className="flex flex-col items-center w-45 bg-neutral-400/10 py-3 rounded-[10px] hover:text-black hover:bg-white">
                        <div className="flex flex-col w-37 text-[14px] items-center">
                            <img src={project.image} alt="portofolio" />
                            <p className="mb-2">{project.title}</p>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}