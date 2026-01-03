import Link from "next/link";
import { useRef, useEffect } from "react";
import Typed from "typed.js";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Hi, I’m <span class='text-primary'>Amit Makwana</span>",
        "I’m a <span class='text-primary'>MERN Stack Developer</span>",
        "I build <span class='text-primary'>React & Next.js Websites</span>"
      ],
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: false
    };

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
      {/* 🔥 SEO H1 (Hidden but indexed by Google) */}
      <h1 className="sr-only">
        Amit Makwana – MERN Stack Web Developer | React, Next.js, Node.js, AWS
      </h1>

      {/* Profile Image */}
      <div
        className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px]"
        onContextMenu={(e) => e.preventDefault()}
        style={{ userSelect: "none", pointerEvents: "none" }}
      >
        <img
          src="/images/Amit.png"
          className="w-full h-full object-cover"
          alt="Amit Makwana – MERN Stack Developer | React Next.js Web Developer"
          onDragStart={(e) => e.preventDefault()}
          style={{ pointerEvents: "none", userSelect: "none" }}
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Animated Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading leading-tight tracking-wide bg-gradient-to-r text-white bg-clip-text text-transparent animate-gradient"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <span ref={typedRef}></span>
        </h2>

        {/* SEO Description */}
        <p
          className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-[#E3E4E6] max-w-3xl mx-auto font-accent"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          I’m a <span className="text-primary">MERN Stack Web Developer</span> specializing in
          <span className="text-primary"> React, Next.js, Node.js, MongoDB, HTML, CSS</span>,
          and <span className="text-primary">AWS</span>. I help startups and businesses build
          fast, scalable, and SEO-friendly websites and web applications.
        </p>

        {/* Call To Action */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
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

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
