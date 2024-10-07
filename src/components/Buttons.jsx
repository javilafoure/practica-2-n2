import Card from './Card'
import useData from './hook/useData'


export default function Buttons() {

    const {result, nomPage, actPage} = useData()

    return (
        <div className='flex flex-col content-center align-center justify-center gap-7'>
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







