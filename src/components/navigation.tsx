export function Navigation({setIsFlipped} : {setIsFlipped: React.Dispatch<React.SetStateAction<boolean>>}) {
    return (
        <div className="relative w-80 md:w-2xl xl:w-5xl 2xl:w-full flex lg:flex-row-reverse lg:px-20">
            <div className="absolute z-10 w-full flex justify-between flex-row-reverse lg:w-125 text-[14px] md:text-[20px] lg:text-[16px]">
                <button className="">Skills</button>
                <button>Projects</button>
                <button className="hover:cursor-pointer" onClick={() => setIsFlipped(true)}>About Me</button>
                <button className="hover:cursor-pointer" onClick={() => setIsFlipped(false)}>Profile</button>
            </div>
        </div>
    )
}