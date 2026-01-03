import Head from "next/head";
import AboutMe from '@/components/About'
import Companies from '@/components/Compnies'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Nav'
import Portfolio from '@/components/Projects'
import Services from '@/components/Technologies'

export default function Index() {
    return (
        <>
            {/* 🔥 SEO TAGS HERE */}
            <Head>
                <title>
                    Amit Makwana | React, Next.js & MERN Stack Web Developer
                </title>

                <meta
                    name="description"
                    content="Amit Makwana is a professional MERN Stack Web Developer specializing in React, Next.js, Node.js, MongoDB, PostgreSQL, HTML, CSS and AWS. I build fast, SEO-friendly websites and web applications."
                />

                <meta
                    name="keywords"
                    content="Amit Makwana, Web Developer, MERN Stack Developer, React Developer, Next.js Developer, Node.js Developer, Full Stack Developer, Freelance Web Developer, Website Developer for Hire, MongoDB Developer, PostgreSQL Developer, AWS Developer"
                />

                <meta name="author" content="Amit Makwana" />

                <meta name="robots" content="index, follow" />

                <meta name="google-site-verification" content="_uIxCJZJZp2Q3SKlQFqX6qNQoodTvAlNOTr_XDdOlw8" />

                {/* Open Graph */}
                <meta property="og:title" content="Amit Makwana | MERN Stack Web Developer" />
                <meta
                    property="og:description"
                    content="React & Next.js Developer building modern, fast and SEO-friendly web applications using MERN Stack and AWS."
                />
                <meta property="og:image" content="/og-image.png" />
                <meta property="og:url" content="https://amit-makwana.vercel.app/" />
                <meta property="og:type" content="website" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Amit Makwana | MERN Stack Developer" />
                <meta
                    name="twitter:description"
                    content="Professional MERN Stack Developer specializing in React, Next.js, Node.js and AWS."
                />
                <meta name="twitter:image" content="/og-image.png" />

                <link rel="canonical" href="https://amit-makwana.vercel.app/" />

            </Head>

            <Hero />
            <Companies />
            <AboutMe />
            <Services />
            <Portfolio />
            <Contact />
        </>
    );
}
