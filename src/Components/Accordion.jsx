const Accordion = ({
  title,
  children,
  textcolor = "text-white",
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const isOpen = activeIndex === index;
  const toggleAccordion = () => {
    setActiveIndex(isOpen ? null : index);
  };

  return (
    <div className="w-full">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center py-3 text-lg font-semibold text-gray-800"
      >
        <span className={`${textcolor} text-base font-mono tracking-widest`}>
          {title}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#ffff"
          className={`size-6 transition-transform duration-500 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      <div
        className={`transition-all duration-500 ease-in-out w-full overflow-hidden ${
          isOpen ? "max-h-[240px]" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
