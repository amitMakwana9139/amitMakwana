import { FaCode, FaBrush, FaLaptopCode } from "react-icons/fa";

const AboutMe = () => {
    return (
        <section
            id="about"
            className="relative py-4 md:py-20  text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                {/* Left Side Content */}
                <div className="space-y-6">
                    <h2
                        className="text-3xl md:text-5xl font-bold text-primary"
                        data-aos="fade-down"
                        data-aos-delay="200"
                    >
                        About Me
                    </h2>
                    <p
                        className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed font-accent"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        Hi, I’m
                        <span className="text-primary font-semibold"> Amit Makwana</span>
                        , a passionate <span className="text-primary">MERN Stack Developer
                        </span> and <span className="text-primary">Proactive Leader
                        </span>.
                        I specialize in building robust, scalable,
                        and impactful web applications that deliver seamless user experiences and solve real-world problems.
                    </p>

                    {/* Highlighted Skills */}
                    <div className="mt-8 space-y-6 font-body">
                        <div
                            className="flex items-center gap-4"
                            data-aos="fade-right"
                            data-aos-delay="500"
                        >
                            <FaCode className="text-primary text-2xl" />
                            <span className="text-lg">MERN Stack Development</span>
                        </div>
                        <div
                            className="flex items-center gap-4"
                            data-aos="fade-right"
                            data-aos-delay="600"
                        >
                            <FaBrush className="text-primary text-2xl" />
                            <span className="text-lg">Driving Innovation with Scalable Solutions</span>
                        </div>
                        <div
                            className="flex items-center gap-4"
                            data-aos="fade-right"
                            data-aos-delay="700"
                        >
                            <FaLaptopCode className="text-primary text-2xl" />
                            <span className="text-lg">Crafting seamless custom web and app solutions for optimal performance.</span>
                        </div>
                    </div>
                </div>

                {/* Right Side Decorative and Image */}
                <div className="relative flex items-center justify-center">
                    <div
                        className="absolute w-72 h-72 bg-gradient-to-tr from-primary via-[#83b1e9] to-white rounded-full blur-3xl opacity-20"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                    ></div>
                    <div
                        className="relative w-80 h-80 bg-gradient-to-r from-primary via-[#427cc2] to-primary rounded-full border border-gray-500   flex items-center justify-center shadow-lg"
                        data-aos="zoom-in"
                        data-aos-delay="600"
                    >
                        <div className="w-64 h-64 bg-gradient-to-tr from-primary to-[#79a2d4] rounded-full flex items-center border border-gray-400 justify-center">
                            <p className="text-lg md:text-xl font-heading font-semibold text-center px-4">
                                “Code, Innovation, and Leadership are the tools I use to transform ideas into impactful web applications.”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
