import React from 'react';

const Sortby = () => {
    return (
    <div className="flex justify-center">
        <select className="mb-8 p-2 rounded-md bg-[#23BE0A] text-white font-bold focus:bg-gray-200 focus:text-black text-center">
          <option>Sort by</option>
          <option>Rating</option>
          <option>Number of pages</option>
          <option>Publisher year</option>
        </select>
    </div>
    );
};

export default Sortby;