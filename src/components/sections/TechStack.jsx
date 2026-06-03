import { CheckCircle2 } from 'lucide-react';
import useInView from '../../hooks/useInView';
import { skills, languages, frameworks, tools, databases } from '../../data/portfolioData';
import TechBadge from '../ui/TechBadge';

// Grouped list of TechBadges
const TechGroup = ({ title, items }) => (
  <div>
    <h4 className="text-sm font-semibold tracking-[0.25em] uppercase text-gray-600 dark:text-gray-400 mb-3">
      {title}
    </h4>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <TechBadge key={item.key} tech={item} />
      ))}
    </div>
  </div>
);

// TechStack
const TechStack = () => {
  const [ref, inView] = useInView(0.05);

  return (
    <section
      id="techstack"
      ref={ref}
      className={`py-24 max-w-6xl mx-auto px-6 section-hidden ${inView ? 'section-visible' : ''}`}
    >
      <h2 className="text-2xl font-bold tracking-[0.2em] uppercase mb-10">
        Tech Stack
      </h2>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

        {/* Left: Skills checklist */}
        <div>
          <h3 className="text-sm font-semibold tracking-[0.25em] uppercase text-gray-600 dark:text-gray-400 mb-4">
            Skills
          </h3>
          <ul className="space-y-3">
            {skills.map((skill, i) => (
              <li key={i} className="flex items-start gap-3 text-md font-semibold text-black dark:text-white">
                <CheckCircle2
                  size={14}
                  className="mt-0.5 shrink-0 text-black dark:text-white"
                />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Languages / Frameworks / Tools */}
        <div className="space-y-7">
          <TechGroup title="Languages" items={languages} />
          <TechGroup title="Frameworks" items={frameworks} />
          <TechGroup title="Tools" items={tools} />
          <TechGroup title="Tools" items={databases} />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
