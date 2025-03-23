import Link from "next/link";
import Button from "./Button";
import Calendar from "./Calendar";
import CallToAction from "./CallToAction";

const Hero = () => {
    return (
        <div className="py-10 md:py-10 flex flex-col gap-8 sm:gap-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl text-center">
                <span className="textGradient">Tracker</span> helps you track daily.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]">
                Track yourself and see how you do on <span className='font-semibold'>every day of every year</span>.
            </p>
            <CallToAction />
            <Calendar demo />
        </div>
    );
}
 
export default Hero;