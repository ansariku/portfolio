const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white/80 dark:bg-black/80 border-t border-gray-500 dark:border-gray-500 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 font-semibold text-[10px] tracking-widest text-gray-600 dark:text-gray-400 uppercase">
        <p>
          Designed &amp; Built by{' '}
          <span className="text-black dark:text-white font-semibold">ANSARI</span>
        </p>
        <p>© {year} Ansari Usman | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
