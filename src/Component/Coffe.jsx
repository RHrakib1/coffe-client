import React from 'react'

export default function Coffe({ Coffe }) {
    const { id, name, able, supply, catagory, photourl } = Coffe
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={photourl}
                        alt="coffe" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{catagory}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-primary">View</button>
                        <button className="btn btn-primary">Delet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
