import React from 'react'

export default function Coffe({ Coffe }) {
    const { id, name, able, supply, catagory, photourl } = Coffe
    return (
        <div>
            <div className="flex gap-3 bg-gray-700 shadow-xl">
                <img className='w-30' src={photourl} alt="coffe" />
                <div>
                    <h2 className="card-title"><span className='font-bold'>Name:</span> {name}</h2>
                    <p><span className='font-bold'>Catagory:</span> {catagory}</p>
                    <p><span className='font-bold'>Supply</span> {supply}</p>
                </div>
                <div className="card-body">
                    <div className="card-actions flex flex-col justify-end">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-primary">View</button>
                        <button className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
