import React from 'react'

export default function Card({ image: { farm, server, id, secret, title } }) {

    return (

        <img className='w-56 h-80' src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`} alt={title} />
    )
}


