import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import useInView from '../../hooks/useInView';
import { projects } from '../../data/portfolioData';
import ProjectCard from '../ui/ProjectCard';

const PAGE_SIZE = 5;
const STAGGER_MS = 80;
const ANIM_DURATION = 350;

const Projects = () => {
  const [ref, inView] = useInView();
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [animateFrom,  setAnimateFrom]  = useState(null);
  const [removingFrom, setRemovingFrom] = useState(null);
  
  const ordered = [...projects].reverse();
  const visible  = ordered.slice(0, visibleCount);

  const isAnimating = removingFrom !== null;
  const canShowMore = visibleCount < ordered.length && !isAnimating;
  const canShowLess = visibleCount > PAGE_SIZE && !isAnimating;

  const showMore = () => {
    setAnimateFrom(visibleCount);
    setVisibleCount((n) => Math.min(n + PAGE_SIZE, ordered.length));
  };

  const showLess = () => {
    const newCount = Math.max(visibleCount - PAGE_SIZE, PAGE_SIZE);
    const totalExiting = visibleCount - newCount;

    setAnimateFrom(null);
    setRemovingFrom(newCount);

    const totalWait = (totalExiting - 1) * STAGGER_MS + ANIM_DURATION;
    setTimeout(() => {
      setVisibleCount(newCount);
      setRemovingFrom(null);

      requestAnimationFrame(() => {
        if (ref.current) {
          const sectionBottom = ref.current.getBoundingClientRect().bottom + window.scrollY;
          window.scrollTo({ top: sectionBottom - window.innerHeight, behavior: 'smooth' });
        }
      });
    }, totalWait);
  };

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
        {visible.map((project, index) => {
          const isNew      = animateFrom !== null && index >= animateFrom;
          const enterDelay = isNew ? (index - animateFrom) * STAGGER_MS : 0;

          const isExiting    = removingFrom !== null && index >= removingFrom;
          const totalExiting = removingFrom !== null ? visibleCount - removingFrom : 0;
          const exitPosition = isExiting ? index - removingFrom : 0;
          const exitDelay    = isExiting ? (totalExiting - 1 - exitPosition) * STAGGER_MS : 0;

          let wrapClass = '';
          let wrapStyle = {};

          if (isNew) {
            wrapClass = 'card-animate-in';
            wrapStyle = { animationDelay: `${enterDelay}ms`, opacity: 0 };
          } else if (isExiting) {
            wrapClass = 'card-animate-out';
            wrapStyle = { animationDelay: `${exitDelay}ms` };
          }

          return (
            <div key={project.id} className={wrapClass} style={wrapStyle}>
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>

      {(canShowMore || canShowLess || isAnimating) && (
        <div className="flex items-center justify-between mt-10">

          {(canShowLess || isAnimating) ? (
            <button
              onClick={showLess}
              disabled={isAnimating}
              className="font-semibold inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-black border border-gray-500 text-xs tracking-widest uppercase cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 hover:border-black dark:hover:border-white active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronUp size={15} />
              Show Less
            </button>
          ) : (
            <span />
          )}

          {canShowMore && (
            <button
              onClick={showMore}
              disabled={isAnimating}
              className="font-semibold inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-black border border-gray-500 text-xs tracking-widest uppercase cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 hover:border-black dark:hover:border-white active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronDown size={15} />
              Show More
            </button>
          )}

        </div>
      )}
    </section>
  );
};

export default Projects;
