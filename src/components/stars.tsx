

export function Stars({translate_x, translate_y} : {translate_x?: number, translate_y?: number, left?: string}) {
    return (
        <>
            <div className={`absolute size-[2px] rounded-full bg-blue-300 overflow-hidden animate-pulse`}
                 style={{
                    transform: `translate(${translate_x}vw, ${translate_y}vh)`
                 }}
            />
        </>
    )
}

export function StarsBg({height, jumlah} : {height?:number, jumlah?:number}) {
    const coordinates: number[][] = []
    for (let i = 0; i<(jumlah ? jumlah : 150); i++)
    {
        coordinates.push([Math.round(Math.random()*100), Math.round((Math.random()*1.5)*100)])
    }

    return (
        <div className="absolute w-full overflow-hidden left-0 -z-10"
             style={{ height: height ? `${height}px` : "100%" }}
             >
            {coordinates.map(([coordinate_x, coordinate_y]) => (
            <Stars translate_x={coordinate_x} translate_y={coordinate_y} />
            ))}
        </div>
    )
}