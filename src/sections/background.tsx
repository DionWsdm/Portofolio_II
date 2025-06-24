import elips from "../assets/elips_blur.png";
import { Stars } from "../components/stars";

export function Background() {
    const coordinates: number[][] = []
    for (let i = 0; i<150; i++)
    {
        coordinates.push([Math.round(Math.random()*100), Math.round(Math.random()*100)])
    }
    console.log(coordinates[0][0])

    return (
        <>
        <div className="relative w-screen h-screen z-[-1] overflow-hidden">
            <div className="absolute w-[1000px] h-[1000px] left-0 -translate-x-70 translate-y-0 rounded-full">
                <img src={elips} alt="something" className="w-full h-full blur-[2000px]"/>
            </div>           
            {coordinates.map(([coordinate_x, coordinate_y]) => (
                <Stars translate_x={coordinate_x} translate_y={coordinate_y} />
            ))}    
        </div>
        </>
    )
}