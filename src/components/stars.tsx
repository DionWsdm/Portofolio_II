

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