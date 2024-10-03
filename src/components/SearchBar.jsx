import React from 'react'

function SearchBar() {
    return (


        <div className="max-w-lg mx-auto">
            <div class="flex">
                <div className="relative w-full">
                    <input type="search" id="search-dropdown" className="rounded-md block p-2.5 w-full text-sm bg-slate-300 dark:placeholder-gray-400 dark:text-black " placeholder="Search..." required />
                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-gray-400 rounded-e-lg border border-gray-500 hover:bg-gray-800">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>

                    </button>
                </div>
            </div>
        </div>


    )
}

export default SearchBar
