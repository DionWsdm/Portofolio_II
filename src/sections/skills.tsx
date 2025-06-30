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

interface logo {
    src: string,
    size: string,
}

export function Skills() {
    const logos: logo[] = [
        {
            src: java,
            size: "lg:size-15",
        }, 
        {
            src: typeScript,
            size: "lg:size-10",
        }, 
        {
            src: javaScript,
            size: "lg:size-10",
        }, 
        {
            src: python,
            size: "lg:size-11",
        },
        {
            src: html, 
            size: "lg:size-13",
        },
        {
            src: css,
            size: "lg:size-12 object-cover"
        },
        {
            src: tailwind,
            size: "lg:size-10"
        },
        {
            src: react,
            size: "lg:size-12",
        },
        {
            src: express,
            size: "lg:size-12 invert",
        },
        {
            src: postgre,
            size: "lg:size-11",
        },
        {
            src: mysql,
            size: "lg:size-15"
        },
        {
            src: prisma,
            size: "lg:size-12 invert"
        },
        {
            src: pandas,
            size: "lg:size-13"
        },
        {
            src: numpy,
            size: "lg:size-19"
        }
    ]

    return (
        <div className="flex flex-col w-7xl items-center font-bold gap-15 mb-20">
            <p className="text-3xl lg:text-5xl">Skills</p>
            <div className="grid grid-cols-4 gap-7 lg:grid-cols-10 lg:gap-11">
                {logos.map((logo) => (
                    <div className="flex size-15 lg:size-20 rounded-full bg-blue-400/20 items-center">
                        <img src={logo.src} alt="logo" className={`size-10 ${logo.size} m-auto`}/>
                    </div>
                ))}
            </div>
        </div>
    )
}