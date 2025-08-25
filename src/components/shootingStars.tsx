import { useEffect } from "react";
import { useState } from "react";
import { getRandomInt } from "../utils/randomLetter";

export function ShootingStars() {
  let count = 0;
  const [currStar, setCurrStar] = useState<HTMLDivElement>();

  useEffect(() => {
    const background = document.getElementById("shooting-stars");
    const starInterval = setInterval(() => {
      const star = document.createElement("div");
      star.classList.add(
        "absolute",
        "size-[2px]",
        "rounded-full",
        "bg-blue-300",
        "overflow-hidden",
        "animate-pulse"
      );
      star.style.left = getRandomInt(0, window.screen.width / 2) + "px";
      star.id = "star-" + ++count;
      background?.appendChild(star);
      setCurrStar(star);
    }, 500);
    return () => clearInterval(starInterval);
  }, []);

  useEffect(() => {
    const background = document.getElementById("shooting-stars");
    const deltaY = window.innerWidth < 500 ? 7 : 3;
    const delay = getRandomInt(1, 10)
    if (currStar) {
      let posY = 0;
      let posX = parseInt(
        currStar.style.left.slice(0, currStar.style.left.length - 2)
      );
      const movingStarInterval = setInterval(() => {
        if (posY >= window.screen.height) {
          background?.removeChild(currStar);
          clearInterval(movingStarInterval);
        } else {
          posY += deltaY;
          posX += 3;
          currStar.style.top = posY + "px";
          currStar.style.left = posX + "px";
        }
      }, delay);
    }
  }, [currStar]);

  return (
    <div className="absolute w-full overflow-hidden left-0 -z-11 h-full" id="shooting-stars"></div>
  )
}
