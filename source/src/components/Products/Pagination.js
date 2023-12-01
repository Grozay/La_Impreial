import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li>
          <button onClick={() => paginate(1)} disabled={currentPage === 1} className="page-link">
            First
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
        <li>
          <button onClick={() => paginate(Math.ceil(totalProducts / productsPerPage))} disabled={currentPage === Math.ceil(totalProducts / productsPerPage)} className="page-link">
            Last
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;