import React, { useState } from 'react'
import Card from './Card'

export default function Buttons() {

    const [nomPage, setNomPage] = useState('Mountain')

    const actPage = (e) => {
        setNomPage(e.target.value)
    }


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
            <Card nomPage={nomPage} />
        </div>


    )

}



