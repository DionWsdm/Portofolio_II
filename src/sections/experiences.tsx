import { StarsBg } from "../components/stars";
import  bem  from "../assets/bem.jpg";
import compfest from "../assets/compfest.png";
import fasilkom from "../assets/fasilkom.png";

interface experience {
    title: string,
    company: string,
    logo: string,
    start: string,
    end: string,
    learned?: string
}

const experiences: experience[] = [
    {
        title: "Staff of Information Technology Development Bureau",
        company : "BEM Fakultas Ilmu Komputer Universitas Indonesia",
        logo: bem,
        start: "August 2025",
        end: "Present",
        learned: "Django,  Django REST framework"
    },
    {
        title: "Software Engineer Staff",
        company: "Compfest 17",
        logo: compfest,
        start: "May 2025",
        end: "Present",
        learned: "TypeScript, React.js, Tailwind CSS"
    },
    {
        title: "Teaching Assistant of Discrete Mathematics 1",
        company: "Fakultas Ilmu Komputer Universitas Indonesia",
        logo: fasilkom,
        start: "July 2025",
        end: "Present",
        learned: "Teaching"
    }
]

export function Experiences() {
    return (
        <div className="flex flex-col justify-center items-center gap-10 lg:gap-20 w-full h-auto pb-20">
            <p className="text-3xl lg:text-5xl font-bold mb-5">Experiences</p>
            <StarsBg height={window.innerWidth < 450 ? 1100 : 600} jumlah={100}/>
            <div className="flex flex-col w-80 lg:w-7xl gap-12">
                {experiences.map((experience) => (
                    <div className="grid grid-rows-[10%_90%] lg:grid-cols-[10%_90%] justify-center items-center w-full gap-2">
                        <img src={experience.logo} alt="" className="size-15 lg:size-18 rounded-full mx-auto"/>
                        <div className="flex flex-col w-full text-center lg:text-left">
                            <p className="text-[20px] lg:text-3xl font-bold text-white">{experience.title}</p>
                            <p className="text-[16px] lg:text-[20px]">{experience.company}</p>
                            <p className="lg:text-[16px]">{experience.start} - {experience.end}</p>
                            <p className="lg:text-[16px]">Learned: {experience.learned}</p>                          
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}