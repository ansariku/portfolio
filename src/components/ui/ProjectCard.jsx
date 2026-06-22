import { ExternalLink } from 'lucide-react';
import TechBadge from './TechBadge';
import { TECH_MAP } from '../../data/portfolioData';

const ProjectCard = ({ project }) => {
  return (
    <div
      className="h-full group flex flex-col bg-white dark:bg-black border border-gray-500 rounded-lg overflow-hidden hover:border-gray-200 dark:hover:border-gray-800 hover:-translate-y-1.5 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/40 transition-all duration-300 ease-out"
    >
      {/* Project screenshot*/}
      <div className="w-full h-44 overflow-hidden bg-gray-100 dark:bg-gray-900 shrink-0">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          draggable="false"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Title */}
        <h3 className="text-center font-bold tracking-wide leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm font-medium text-black dark:text-white leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech stack used */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((key) => (
            <TechBadge key={key} tech={TECH_MAP[key] ?? { key, name: key }} />
          ))}
        </div>

        {/* Visit project link */}
        {project.link && 
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm tracking-widest uppercase font-semibold text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:gap-2.5 transition-all duration-200 mt-1"
          >
            View Project <ExternalLink size={14} />
          </a>
        }
      </div>
    </div>
  );
};

export default ProjectCard;
