import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'


export default function 
fzUpdatecoffe() {
    const loaddata = useLoaderData()
    const { _id, name, able, supply, catagory, photourl } = loaddata
    const handelUpdate = e => {
        e.preventDefault()
        const datastore = e.target
        const name = datastore.name.value
        const able = datastore.able.value
        const supply = datastore.supply.value
        const catagory = datastore.catagory.value
        const photourl = datastore.photourl.value
        const objupdate = { name, able, supply, catagory, photourl }
        console.log(objupdate)

        fetch(`http://localhost:5000/postcoffedata/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(objupdate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Coffe Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }
    return (
        <div>
            <h1 className='text-4xl text-blue-500 font-bold text-center mb-5'>Data Update Form </h1>
            <form onSubmit={handelUpdate} >
                {/* {row no 1} */}
                <div className='flex justify-between'>
                    <div className="flex gap-2 mb-4 items-center md:w-1/2" >
                        <h2 className='mr-2'>Name:</h2>
                        <div>
                            <label className="">
                                <input type="text" name='name' placeholder="Input your coffe name" defaultValue={name} required className='w-full border p-2' />
                            </label>
                        </div>
                    </div>
                    <div className=" flex gap-2 items-center md:w-1/2">
                        <h2 className='mr-2'>Available:</h2>
                        <div>
                            <label className="">
                                <input type="text" name='able' placeholder="add your quantity" defaultValue={able} required className='w-full border p-2' />
                            </label>
                        </div>
                    </div>
                </div>
                {/* {row no 2} */}
                <div className='flex justify-between '>
                    <div className="flex gap-2 mb-4 items-center md:w-1/2" >
                        <h2 className='mr-2'>Supply:</h2>
                        <div>
                            <input type="text" name='supply' placeholder="Input your coffe supplyer name" defaultValue={supply} required className='w-full border p-2' />
                        </div>
                    </div>
                    <div className=" flex gap-2 items-center md:w-1/2">
                        <h2 className='mr-2'>Catagory:</h2>
                        <div>
                            <input type="text" name='catagory' placeholder="add your catagory" defaultValue={catagory} required className='w-full border p-2' />
                        </div>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <h2 className='mr-2'>Photo:</h2>
                    <input type="text" name='photourl' placeholder='input you photo' defaultValue={photourl} className='w-full border p-2 mb-4' />
                </div>
                <input type="submit" value='UPDATE COFFEE' className='btn btn-block' />
            </form>
        </div>
    )
}
