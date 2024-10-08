import Card from './Card'
import useData from './hook/useData'


export default function Buttons() {

    const { result, nomPage, actPage, getData, setNomPage } = useData()

    return (
        <div className='flex flex-col content-center align-center justify-center gap-7'>
            <div className="w-96 mx-auto py-12">
                <div className="flex">
                    <div className="relative w-full">
                        <input type="search" id="search-dropdown" className="rounded-md block p-2.5 w-full text-sm bg-slate-300 dark:placeholder-gray-400 dark:text-black " placeholder="Search..." onChange={(e) =>
                            setNomPage(e.target.value)} />
                        <button type="submit" className="flex justify-center absolute top-0 end-0 p-2.5 text-sm font-medium h-full w-20 text-white bg-gray-400 rounded-e-lg border border-gray-500 hover:bg-gray-800" onClick={getData}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
            <div className='flex align-center justify-center py-4 gap-6'>
                <button value='Mountain' onClick={actPage}>Mountain</button>
                <button value='Beaches' onClick={actPage}>Beaches</button>
                <button value='Birds' onClick={actPage}>Birds</button>
                <button value='Food' onClick={actPage}>Food</button>
            </div>

            <div className='flex align-center justify-center'>
                <h2 className='text-2xl text-[#051c33] font-serif font-bold'>{nomPage} Pictures</h2>
            </div>
            <div className='flex align-center justify-center'>
                <div className='grid grid-cols-4 py-6 gap-16'>

                    {
                        result &&
                        result.map((rs) =>
                            <Card key={rs.id} image={rs} />
                        )
                    }

                </div>
            </div>


        </div>


    )

}






