import Java from "../assets/java.png";
import TypeScript from "../assets/typescript.png";
import JavaScript from "../assets/javascript.webp";
import Python from "../assets/python.png";

export function Skills() {
    const logos: string[] = [Java, TypeScript, JavaScript, Python]

    return (
        <div className="flex flex-col w-full items-center font-bold gap-7">
            <p className="text-3xl lg:text-5xl">Skills</p>
            <div className="grid grid-cols-4 gap-7">
                {logos.map((logo) => (
                    <div className="flex size-15 rounded-full bg-white items-center">
                        <img src={logo} alt="logo" className="size-10 m-auto"/>
                    </div>
                ))}
            </div>
        </div>
    )
}