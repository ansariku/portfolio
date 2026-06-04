import useInView from '../../hooks/useInView';
import { projects } from '../../data/portfolioData';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  const [ref, inView] = useInView();

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-24 max-w-6xl mx-auto px-6 section-hidden ${inView ? 'section-visible' : ''}`}
    >
      <h2 className="text-2xl font-bold tracking-[0.2em] uppercase mb-10">
        Projects
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...projects].reverse().map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
