import { Github, Linkedin, Mail, Download } from 'lucide-react';
import useInView from '../../hooks/useInView';
import { personalInfo } from '../../data/portfolioData';

// Socials / icon button
const IconBtn = ({ href, label, children, download = false }) => (
  <a
    href={href}
    aria-label={label}
    download={download || undefined}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    className="p-3 border bg-white dark:bg-black border-gray-500 dark:border-gray-500 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 hover:scale-110 hover:border-black dark:hover:border-white active:scale-95 transition-all duration-200"
  >
    {children}
  </a>
);

// Hero
const Hero = () => {
  const [ref, inView] = useInView(0.05);

  return (
    <section
      id="hero"
      ref={ref}
      className={`flex flex-col justify-center py-24 max-w-6xl mx-auto px-6 section-hidden ${inView ? 'section-visible' : ''}`}
    >
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.3em] text-gray-500 mb-5 uppercase">
          {'// console.log("Hello world")'}
        </p>

        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none mb-4">
          {personalInfo.name}
        </h1>

        <h2 className="text-lg sm:text-xl font-semibold tracking-[0.2em] mb-6 uppercase">
          {personalInfo.title}
        </h2>

        <p className="text-sm font-semibold leading-loose max-w-lg mb-10">
          {personalInfo.shortBio}
        </p>

        <div className="flex items-center gap-3 mb-8 flex-wrap">
          <IconBtn href={personalInfo.linkedin} label="LinkedIn">
            <Linkedin size={17} />
          </IconBtn>
          <IconBtn href={personalInfo.github} label="GitHub">
            <Github size={17} />
          </IconBtn>
          <IconBtn href={`mailto:${personalInfo.email}`} label="Email">
            <Mail size={17} />
          </IconBtn>
        </div>

        <a
          href={`${import.meta.env.BASE_URL}${personalInfo.cvUrl}`}
          download
          className="inline-flex items-center gap-2.5 px-7 py-3 text-xs tracking-widest uppercase bg-black dark:bg-white text-white dark:text-black rounded-xs hover:opacity-70 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <Download size={17} />
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
