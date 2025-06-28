export function Navigation({isFlipped, setIsFlipped} : {isFlipped: boolean, setIsFlipped: React.Dispatch<React.SetStateAction<boolean>>}) {
    return (
        <div className="relative w-full flex lg:flex-row-reverse">
            <div className="absolute z-10 w-full flex justify-between flex-row-reverse lg:w-110 text-[14px] lg:text-[16px]">
                <button >Project</button>
                <a href="#experiences">Experiences</a>
                <button className="hover:cursor-pointer" onClick={() => setIsFlipped(true)}>About Me</button>
                <button className="hover:cursor-pointer" onClick={() => setIsFlipped(false)}>Profile</button>
            </div>
        </div>
    )
}