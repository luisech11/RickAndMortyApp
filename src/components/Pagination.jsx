import React from 'react'

const Pagination = ({ pages, setCurrentPage, currentPage }) => {
    return (
      <ul className="flex space-x-2">
        {pages.map((page) => (
          <li
          className={`pagination-item ${
            currentPage === page ? 'text-red-600' : 'text-green-600'
          } hover:text-blue-600 transition-colors duration-500 ease-in-out flex items-center justify-center w-8 h-8 border border-gray-300 rounded-lg`}
          onClick={() => setCurrentPage(page)}
          key={page}
          style={{
            cursor: 'pointer',
          }}
        >
          {page}
        </li>
        
        ))}
      </ul>
    );
  };
  

  export default Pagination;
