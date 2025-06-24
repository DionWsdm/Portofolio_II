import { useEffect, useRef, useState } from "react"
import { randomLetter } from "../utils/randomLetter"

export function Scrumble() {
    const [teks, setTeks] = useState("")
    const [index, setIndex] = useState(0)
    const intervalId = useRef<any>(null)
    const targets = ["Web Developer", "IT Enthusiast", "Information System Student", "Fulltime Learner"]

    useEffect(() => {
        const id = setInterval(() => setIndex(index => index === targets.length-1 ? 0 : index+1), 6000)
        return () => clearInterval(id)
    }, [])

    useEffect(() => {
        intervalId.current = setInterval(() => setTeks(randomLetter()), 16)
        
        const timeoutId = setTimeout(() => {
            clearInterval(intervalId.current)
            setTeks(targets[index])
        }, 2000)

        return () => {
            clearInterval(intervalId.current)
            clearTimeout(timeoutId)
        }
    }, [index])

    return (
        <span>
            {teks}
        </span>
    )
}