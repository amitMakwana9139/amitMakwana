import Link from "next/link";
import { useRef, useEffect } from "react";
import Typed from 'typed.js';

const Hero = () => {

    const typedRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: ["Hi, I’m <span class='text-primary'>Amit Makwana</span>"],
            typeSpeed: 50,
            backSpeed: 50,
            showCursor: false, // Disable the cursor
        };

        // Initialize Typed.js
        const typed = new Typed(typedRef.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section
            className="relative flex flex-col h-full items-center justify-center text-white bg-cover bg-center bg-no-repeat overflow-x-hidden overflow-y-hidden"
            style={{ backgroundImage: "url('/images/bg.png')" }}
            data-aos-duration="1000"
        >
            <div
                className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px]"
                onContextMenu={(e) => e.preventDefault()} // Disable right-click
                style={{ userSelect: 'none', pointerEvents: 'none' }} // Disable text selection and pointer events
            >
                <img
                    src="/images/Amit.png"
                    className="w-full h-full object-cover"
                    alt="Amit"
                    onDragStart={(e) => e.preventDefault()} // Disable dragging
                    style={{ pointerEvents: 'none', userSelect: 'none' }} // Prevent image interaction and selection
                />
            </div>


            <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
                {/* Gradient Text with AOS */}
                <h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading leading-tight tracking-wide bg-gradient-to-r text-white bg-clip-text text-transparent animate-gradient"
                    data-aos="fade-down"
                    data-aos-delay="200"
                >
                    <span ref={typedRef}></span>
                </h1>
                <p
                    className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-[#E3E4E6] max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto font-accent"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    {/* A <span className="text-primary">MERN Stack Developer</span> and <span className="text-primary">Leader</span>, bringing innovative ideas to life with robust and efficient web applications. */}
                    A <span className="text-primary">MERN Stack Developer</span>, <span className="text-primary">Startup Entrepreneur</span>, and <span className="text-primary">Leader</span>, bringing innovative ideas to life with robust and efficient web applications.
                </p>

                {/* Call-to-Actions */}
                <div
                    className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
                >
                    <Link
                        href="/projects"
                        className="bg-primary hover:bg-primary/90 text-[#1e1e1e] font-medium py-2 px-5 sm:py-3 sm:px-7 md:py-4 md:px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        View My Work
                    </Link>
                    <a
                        href="#contact"
                        className="bg-white hover:bg-gray-200 text-[#1e1e1e] font-medium py-2 px-5 sm:py-3 sm:px-7 md:py-4 md:px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        </section>

    );
};

export default Hero;
