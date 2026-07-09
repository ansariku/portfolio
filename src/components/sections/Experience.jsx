import { MapPin, Briefcase, Calendar } from 'lucide-react';
import useInView from '../../hooks/useInView';
import { experiences } from '../../data/portfolioData';

const ExperienceEntry = ({ exp, isLast }) => {
  const [ref, inView] = useInView(0.1);

  return (
    <div ref={ref} className={`relative flex gap-6 sm:gap-10 section-hidden ${inView ? 'section-visible' : ''}`}>

      {/* Timeline spine */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-2.5 h-2.5 rounded-full border-2 border-black dark:border-white bg-white dark:bg-black mt-1.5 shrink-0" />

        {!isLast && (
          <div className="w-0.5 flex-1 bg-gray-500 dark:bg-gray-500 mt-2" />
        )}
      </div>

      {/* Content */}
      <div className={`pb-12 ${isLast ? '' : ''} w-full`}>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
          <div>
            <h3 className="font-bold text-md tracking-wide">{exp.title}</h3>
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mt-0.5">
              {exp.company}
              <span className="mx-2 text-gray-600 dark:text-gray-400">·</span>
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">{exp.type}</span>
            </p>
          </div>

          {/* duration + location */}
          <div className="flex flex-col sm:items-end gap-1 shrink-0">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-gray-600 dark:text-gray-400 uppercase">
              <Calendar size={10} />
              {exp.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-gray-600 dark:text-gray-400 uppercase">
              <MapPin size={10} />
              {exp.location}
            </span>
          </div>
        </div>

        {/* Bullet points */}
        <ul className="space-y-2.5">
          {exp.points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-sm font-semibold text-black dark:text-white leading-relaxed">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-black dark:bg-white shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

const Experience = () => {
  const [ref, inView] = useInView();

  const ordered = [...experiences].reverse();

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-24 max-w-6xl mx-auto px-6 section-hidden ${inView ? 'section-visible' : ''}`}
    >
      <h2 className="text-2xl font-bold tracking-[0.2em] uppercase mb-10">
        Experience
      </h2>

      <div className="max-w-3xl">
        {ordered.map((exp, index) => (
          <ExperienceEntry
            key={exp.id}
            exp={exp}
            isLast={index === ordered.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
