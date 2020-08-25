import React, { useState, useEffect } from 'react';
import PaginationButton from './paginationButton/PaginationButton';

const Pagination = ({ total, currentPage, paginate }) => {
  const [active, setActive] = useState(0);
  let items = [];

  useEffect(() => {
    setActive(currentPage);
  }, [currentPage])

  const selectPage = (page) => {
    setActive(page);
    paginate(page);
  }

  for (let i = 1; i <= total; i++) {
    items.push(
      <PaginationButton key={i} active={i === active} first={i === 1} last={i === total} onClick={() => selectPage(i)}>
        {i}
      </PaginationButton>,
    );
  }

  return (
    <div className="pagination-container">
      {items}

      <style jsx>{`
       .pagination-container {
          display: flex;
          flex-direction: row;
       }
      `}</style>
    </div>
  );
}

export default Pagination;