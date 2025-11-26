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
                <title>Amit Makwana | MERN Developer Portfolio</title>

                <meta
                    name="description"
                    content="Amit Makwana – MERN Stack Developer specializing in Next.js, Node.js, MongoDB, PostgreSQL, AWS Lightsail & EC2. Explore my projects, skills, and professional work."
                />

                <meta
                    name="keywords"
                    content="Amit Makwana, MERN Developer, Next.js Developer, Node.js Developer, MongoDB Developer, PostgreSQL, AWS EC2, AWS Lightsail, Full Stack Developer"
                />

                <meta name="author" content="Amit Makwana" />
                <meta name="google-site-verification" content="_uIxCJZJZp2Q3SKlQFqX6qNQoodTvAlNOTr_XDdOlw8" />
                <meta property="og:title" content="Amit Makwana | MERN Developer Portfolio" />
                <meta
                    property="og:description"
                    content="MERN Stack Developer specializing in Next.js, Node.js, MongoDB, PostgreSQL, AWS Lightsail & EC2."
                />
                <meta property="og:image" content="/og-image.png" />
                <meta property="og:url" content="https://amit-makwana.vercel.app/" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Amit Makwana | MERN Developer Portfolio" />
                <meta
                    name="twitter:description"
                    content="Explore the portfolio of MERN Developer Amit Makwana. Projects, skills, and expertise in Next.js, Node.js, MongoDB, PostgreSQL, AWS."
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
