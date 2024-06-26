import React from 'react';
import { ReactComponent as LeftArrow } from '../../../assets/icon-arrow-left.svg';
import { ReactComponent as RightArrow } from '../../../assets/icon-arrow-right.svg';

const PaginationBar = ({ totalPageNum, activePageNum, onPageChange }) => {
  const maxVisiblePages = 5;
  let startPage;

  if (totalPageNum <= maxVisiblePages) {
    startPage = 1;
  } else {
    startPage = Math.max(activePageNum - Math.floor(maxVisiblePages / 2), 1);
    startPage = Math.min(startPage, totalPageNum - maxVisiblePages + 1);
  }

  const pages = Array.from(
    { length: Math.min(maxVisiblePages, totalPageNum - startPage + 1) },
    (_, i) => startPage + i,
  );

  return (
    <div className="absolute bottom-[-9%] flex bg-[var(--Grayscale-20)] space-x-1 tablet-2:bg-[var(--Grayscale-20)]">
      <button
        className={`text-gray-400 w-10 h-10 font-semibold text-base ${
          activePageNum === 1 ? 'cursor-default opacity-50' : ''
        }`}
        disabled={activePageNum === 1}
        onClick={() => onPageChange(activePageNum - 1)}
      >
        <LeftArrow />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`w-10 h-10 font-semibold text-base ${
            activePageNum === page
              ? 'text-[#542f1a] font-bold'
              : 'text-gray-400'
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={`text-gray-400 w-10 h-10 font-semibold text-base ${
          activePageNum === totalPageNum ? 'cursor-default opacity-50' : ''
        }`}
        disabled={activePageNum === totalPageNum}
        onClick={() => onPageChange(activePageNum + 1)}
      >
        <RightArrow />
      </button>
    </div>
  );
};

export default PaginationBar;
