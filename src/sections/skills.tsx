import java from "../assets/java.png";
import typeScript from "../assets/typescript.webp";
import javaScript from "../assets/javascript.png";
import python from "../assets/python.webp";
import html from "../assets/html.png";
import react from "../assets/react.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import express from "../assets/express.png";
import postgre from "../assets/postgre.png";
import prisma from "../assets/prisma.webp";
import mysql from "../assets/mysql.png";
import pandas from "../assets/pandas.png";
import numpy from "../assets/numpy.png";
import { StarsBg } from "../components/stars";

interface logo {
    src: string,
    name: string,
    size: string,
}

export function Skills() {
    const logos: logo[] = [
        {
            src: java,
            name: "java",
            size: "size-12 lg:size-15",
        }, 
        {
            src: typeScript,
            name:"TypeScript",
            size: "size-8 lg:size-10",
        }, 
        {
            src: javaScript,
            size: "size-8 lg:size-10",
            name: "JavaScript"
        }, 
        {
            src: python,
            size: "size-10 lg:size-11",
            name: "Python"
        },
        {
            src: html, 
            size: "size-10 lg:size-13",
            name: "HTML"
        },
        {
            src: css,
            size: "size-10 lg:size-12 object-cover",
            name: "CSS"
        },
        {
            src: tailwind,
            size: "size-8 lg:size-10",
            name: "Tailwind CSS"
        },
        {
            src: react,
            size: "size-10 lg:size-12",
            name: "React.js"
        },
        {
            src: express,
            size: "size-10 lg:size-12 invert",
            name: "Express.js"
        },
        {
            src: postgre,
            size: "size-9 lg:size-11",
            name: "PostgreSQL"
        },
        {
            src: mysql,
            size: "size-13 lg:size-15",
            name: "MySQL"
        },
        {
            src: prisma,
            size: "size-9 lg:size-12 invert",
            name: "Prisma"
        },
        {
            src: pandas,
            size: "size-12 lg:size-13",
            name: "Pandas"
        },
        {
            src: numpy,
            size: "size-15 lg:size-19",
            name: "Numpy"
        }
    ]

    return (
        <div className="flex flex-col w-80 lg:w-7xl items-center gap-7 lg:gap-15 mb-15 lg:mb-20 lg:pb-20">
            <StarsBg height={window.innerWidth < 450 ? 480 : 400} jumlah={100}/>
            <p className="text-3xl lg:text-5xl font-bold">Skills</p>
            <div className="grid grid-cols-4 gap-7 lg:grid-cols-10 lg:gap-10">
                {logos.map((logo) => (
                    <div className="flex flex-col gap-3 items-center text-center">
                        <div className="flex size-15 lg:size-20 rounded-full bg-blue-400/20 items-center">
                            <img src={logo.src} alt="logo" className={`${logo.size} m-auto`}/>
                        </div>
                        <p className="text-[16px]">{logo.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}