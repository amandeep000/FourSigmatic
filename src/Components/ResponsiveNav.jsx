import React from "react";

const ResponsiveNav = () => {
  return (
    <aside>
      {/* close button */}
      <button>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </span>
      </button>
      <div className="w-full">
        <ul className="w-full">
          <li>
            <div>
              <button>Shop All Coffees</button>
            </div>
          </li>
        </ul>
        <div>
          <button>Shop All</button>
        </div>
      </div>
    </aside>
  );
};

export default ResponsiveNav;
