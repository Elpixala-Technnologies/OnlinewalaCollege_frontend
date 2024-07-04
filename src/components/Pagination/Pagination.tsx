import React from 'react'

export function PaginationTwo() {
  return (
    <div className="border-[1px] border-[#6697FC59] mx-4 md:mx-20 lg:mx-40 xl:mx-80 rounded-lg">
      <div className="mt-2 flex flex-col md:flex-row items-center justify-around">
        <div>
          <a href="#" className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900">
            &larr; Previous
          </a>
        </div>
        <div className="flex items-center mt-2 md:mt-0">
          <a href="#" className="mx-1 flex items-center px-3 py-1 text-gray-900 hover:scale-105">
            1
          </a>
          <a href="#" className="mx-1 flex items-center px-3 py-1 text-gray-900 hover:scale-105">
            2
          </a>
          <a href="#" className="mx-1 flex items-center px-3 py-1 text-gray-900 hover:scale-105">
            3
          </a>
          <p>.....</p>
          
          <a href="#" className="mx-1 flex items-center px-3 py-1 text-gray-900 hover:scale-105">
            10
          </a>
        </div>
        <div>
          <a href="#" className="mx-2 text-sm font-semibold text-gray-900">
            Next &rarr;
          </a>
        </div>
      </div>
    </div>
  )
}
