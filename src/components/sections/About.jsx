import { MapPin, GraduationCap, Code2 } from 'lucide-react';
import useInView from '../../hooks/useInView';
import { personalInfo } from '../../data/portfolioData';

// Meta pill
const MetaItem = ({ icon: Icon, text }) => (
  <span className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 dark:text-gray-400">
    <Icon size={14} className="shrink-0" />
    {text}
  </span>
);

// Divider dot
const Dot = () => (
  <span className="w-1 h-1 rounded-full bg-gray-600 dark:bg-gray-400" />
);

// About
const About = () => {
  const [ref, inView] = useInView();

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 max-w-6xl mx-auto px-6 section-hidden ${inView ? 'section-visible' : ''}`}
    >
      {/* Section title */}
      <h2 className="text-2xl font-bold tracking-[0.2em] uppercase mb-10">
        About
      </h2>

      {/* Meta: location · education · interests */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <MetaItem icon={MapPin} text={personalInfo.location}  />
        <Dot />
        <MetaItem icon={GraduationCap} text={personalInfo.education} />
        <Dot />
        <MetaItem icon={Code2} text={personalInfo.interests} />
      </div>

      {/* Bio paragraphs */}
      <div className="max-w-2xl space-y-4 text-md font-semibold leading-loose text-black dark:text-white">
        {personalInfo.about.split('\n\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </section>
  );
};

export default About;
