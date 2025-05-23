import React from 'react';

export default function Filter({ categories, activeFilter, setActiveFilter }) {
  return (
    <div className="w-full overflow-x-auto py-3 px-3 md:px-10 sticky bg-transparent backdrop-blur-md top-0 z-1 border-b border-neutral-200 ">
      <div className="flex space-x-4">
        {categories?.map((category, index) => (
          category && (
            <button
              key={index}
              className={`whitespace-nowrap px-3 py-1 rounded-full text-md  ${
                activeFilter === category.title
                ? 'bg-black text-white '
                : 'bg-neutral-200 hover:bg-neutral-300 text-black'
              }`}
              onClick={() => setActiveFilter(category.title)}
            >
              {category.title}
            </button>
          )
        ))}
      </div>
    </div>
  );
}
