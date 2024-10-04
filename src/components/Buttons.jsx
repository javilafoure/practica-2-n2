import React, { useEffect, useState } from 'react'
import Card from './Card'

async function fetchData(url) {
    const data = await fetch(url)
    const json = await data.json()
    return json
}

export default function Buttons() {

    const [nomPage, setNomPage] = useState('car')
    const [result, setResult] = useState([])

    const actPage = (e) => {
        setNomPage(e.target.value)
    }

    function getData() {
        const key = 'ebc61b0f5d47d9382ea85cb7012c153c'
        const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${nomPage}&per_page=24&format=json&nojsoncallback=1`

        fetchData(url)
            .then(data => setResult(data.photos.photo))
    }

    useEffect(() => {
        getData()
    }, [nomPage])



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







