import React from 'react'

function SearchBar() {
    return (


        <div className="max-w-lg mx-auto py-12">
            <div className="flex">
                <div className="relative w-full">
                    <input type="search" id="search-dropdown" className="rounded-md block p-2.5 w-full text-sm bg-slate-300 dark:placeholder-gray-400 dark:text-black " placeholder="Search..." required />
                    <button type="submit" className="flex justify-center absolute top-0 end-0 p-2.5 text-sm font-medium h-full w-20 text-white bg-gray-400 rounded-e-lg border border-gray-500 hover:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>


                    </button>
                </div>
            </div>
        </div>


    )
}

export default SearchBar
