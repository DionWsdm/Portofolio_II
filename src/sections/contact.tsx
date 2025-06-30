import { StarsBg } from "../components/stars";
import airplane from "../assets/airplane.png";

export function Contact() {

    return (
        <div className="flex flex-col w-full items-center gap-10 h-100 overflow-hidden">
            <StarsBg height={400}/>
            <p className="text-3xl lg:text-5xl font-bold">Contact Me</p>
            <form action="https://formspree.io/f/movjvknl" method="POST">
                <div className="flex flex-row gap-5 w-screen items-center bg-blue-400/20 justify-center py-10">
                    <div className="flex flex-col gap-5 w-auto">
                        <div className="flex flex-row w-4xl gap-5" >
                            <input type="text" placeholder="Name" id="name" name="name" className="bg-white text-black placeholder-neutral-500 border-none h-14 w-65 pl-3 rounded-[10px]"/>
                            <input type="text" placeholder="Email" id="email" name="email" className="bg-white text-black placeholder-neutral-500 border-none h-14 w-65 pl-3 rounded-[10px]"/>
                            <input type="text" placeholder="Subject" id="subject" name="subject"  className="bg-white text-black  placeholder-neutral-500 border-none h-14 w-65 pl-3 rounded-[10px]"/>
                        </div>
                        <textarea placeholder="Message" id="message" name="message" className="bg-white text-black placeholder-neutral-500 border-none h-40 w-5xl pl-3 py-2 rounded-[10px]"/>
                    </div>
                    <button className="h-60 bg-blue-400/30 w-40 rounded-[10px] hover:cursor-pointer hover:scale-105 transition-transform duration-300" type="submit" id="send-button">
                        <img src={airplane} alt="send" className="invert m-auto size-10"/>
                    </button>
                </div>
            </form>
        </div>
    )
}