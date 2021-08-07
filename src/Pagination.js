import React, { useState, useRef } from "react";

export default function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  const [next, setNext] = useState(postsPerPage);
  const [prev, setPrev] = useState(postsPerPage - 10);
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  function handlePrev(num) {
    let cal = num * postsPerPage - 10;
    setPrev(cal);
  }
  function handleNext(num) {
    setNext(num * postsPerPage);
  }
  return (
    <div className='py-2'>
      <div>
        <p className='text-sm text-gray-700'>
          Showing
          <span className='font-medium'> {prev} </span>
          to
          <span className='font-medium'> {next} </span>
          of
          <span className='font-medium'> {totalPosts} </span>
          results
        </p>
      </div>
      <nav className='block'>
        <ul className='flex pl-0 rounded list-none flex-wrap'>
          <li>
            {pageNumbers.map((number) => (
              <a
                onClick={() => {
                  handlePrev(number);
                  handleNext(number);
                  paginate(number);
                }}
                href='#'
                className='bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
              >
                {number}
              </a>
            ))}
          </li>
        </ul>
      </nav>
      {/* <div>
            <nav
              className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
              aria-label='Pagination'
            >
              <a
                href='#'
                className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
              >
                <span>Previous</span>
              </a>

              <a
                href='#'
                className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
              >
                <span>Next</span>
              </a>
            </nav>
          </div> */}
    </div>
  );
}
