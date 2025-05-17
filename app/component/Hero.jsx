import teks from "./Teks-Porto.JSON"
import Image from "next/image";

const Circle = (total) => {
    const circle = Array.from({length: total});
    let Median = undefined
    let Geser = -696
    let To = -875
    console.log("NEW ORDER____________________________")
    total % 2 == 1 ? Median = total / 2 - 0.5 : console.log("genap")
    return circle.map((_, index) => {

        let fakeIndex = index - Median
        let x = fakeIndex * Geser
        let x_animasi = fakeIndex * To

        console.log(`${index} - ${Median} = ${fakeIndex} * ${Geser} = ${x} || x_animasi = ${x_animasi}`)

        return (
            <div 
            className={`rounded-[100%] h-[1394px] w-[1183.431px] opacity-60 z-0 lingkaran bg-amber-600`} 
            key={index} 
            style={{"--x-from" : `${x}px`, "--x-to": `${x_animasi}px`}}
            >
                <img src="/images/Lingkaran (2).svg" alt="" className=""/>
            </div>
        )
    }) 
}


const Hero = () => {
    return (
        <div className="bg-gradient-to-b from-[#51CEF0] to-[#D7D440] h-screen overflow-hidden relative">
            <div className="relative z-50 flex flex-col justify-between h-full w-full p-[20px] pt-[60px] pb-[40px] md:p-[50px] md:flex-row">
                <div className="z-50 flex flex-col justify-between md:flex-[4.5]">
                    <h1 className="text-[80px] font-Instrument-Serif md:text-[159px] text-[#257918] leading-[77.85%] md:tracking-[-6.36px] tracking-[-3px] mb-[50px] motion-translate-x-in-[0%] motion-translate-y-in-[-20%] motion-opacity-in-[0%] motion-duration-[0.53s] motion-duration-[0.70s]/translate motion-duration-[0.70s]/opacity motion-ease-spring-smooth">{teks.Hero.title}</h1>
                    <h2 className="text-[21.112px] leading-[105%] tracking-[-1.056px] font-Inter md:text-[32.841px] text-[#75746F] md:leading-[105.04%] md:tracking-[-1.642px] motion-translate-x-in-[0%] motion-translate-y-in-[-25%] motion-opacity-in-[0%] motion-duration-[1.00s] motion-duration-[0.42s]/translate motion-delay-[0.59s]/translate motion-duration-[0.40s]/opacity motion-delay-[0.60s]/opacity motion-ease-spring-smooth ">{teks.Hero.Sub}</h2>
                </div>
                <div className="z-50 flex flex-col justify-end md:flex-[5] md:items-end">
                    <div className="mb-[23px] flex w-full justify-end">
                        <img src="/images/Kenobu.svg" alt="" className="w-[200px] md:w-[626.328px] motion-opacity-in-[0%] motion-duration-[1.00s]/opacity motion-ease-spring-smooth"/>
                    </div>
                    <div>
                        <ul className="font-Instrument-Serif md:text-right text-[35px] text-[#F22] md:text-[44.098px] leading-[77.85%] tracking-[-1.764px] underline decoration-[1.5px] underline-offset-[10px] motion-translate-x-in-[0%] motion-translate-y-in-[-25%] motion-opacity-in-[0%] motion-duration-[1.00s] motion-duration-[0.42s]/translate motion-delay-[0.59s]/translate motion-duration-[0.40s]/opacity motion-delay-[0.60s]/opacity motion-ease-spring-smooth">
                            <li className="mb-[20px] md:mb-6">Discover Me</li>
                            <li className="">Connect with Me</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-center absolute top-1/2 bottom-0 left-0 right-0 z-0 translate-y-8">
                <div className="flex">{Circle(51)}</div>
            </div>
        </div>
    )
}

export default Hero;