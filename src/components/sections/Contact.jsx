import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import useInView from '../../hooks/useInView';
import { personalInfo } from '../../data/portfolioData';

// Single contact card
const ContactCard = ({ icon: Icon, label, value, href }) => {
  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group flex items-center gap-4 p-4 bg-white dark:bg-black border border-gray-500 rounded-md hover:border-gray-200 dark:hover:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-200"
    >
      {/* Icon box */}
      <div className="p-2.5 rounded bg-gray-200 dark:bg-gray-800 group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors duration-200 shrink-0">
        <Icon size={15} />
      </div>

      {/* Text */}
      <div className="min-w-0">
        <p className="text-xs font-bold  tracking-widest uppercase text-gray-600 dark:text-gray-400 mb-0.5">
          {label}
        </p>
        <p className="text-sm font-semibold truncate">{value}</p>
      </div>
    </a>
  );
};

// Contact
const Contact = () => {
  const [ref, inView] = useInView();

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-24 max-w-6xl mx-auto px-6 section-hidden ${inView ? 'section-visible' : ''}`}
    >
      <h2 className="text-2xl font-bold tracking-[0.2em] uppercase mb-4">
        Contact
      </h2>

      <p className="text-sm font-semibold text-black dark:text-white max-w-md leading-loose mb-10">
        Have any inquiries or just want to say hello? Feel free to reach out through any of the channels below. I'll get back to you as soon as possible.
      </p>

      <div className="grid sm:grid-cols-2 gap-3 max-w-2xl">
        <ContactCard
          icon={Mail}
          label="Email"
          value={personalInfo.email}
          href={`mailto:${personalInfo.email}`}
        />
        <ContactCard
          icon={Phone}
          label="Phone"
          value={personalInfo.phone}
          href={`tel:${personalInfo.phone}`}
        />
        <ContactCard
          icon={Linkedin}
          label="LinkedIn"
          value="linkedin.com/in/ansariku"
          href={personalInfo.linkedin}
        />
        <ContactCard
          icon={Github}
          label="GitHub"
          value="github.com/ansariku"
          href={personalInfo.github}
        />
      </div>
    </section>
  );
};

export default Contact;
