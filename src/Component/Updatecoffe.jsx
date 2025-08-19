import React from 'react'

export default function Updatecoffe() {
    const handelUpdate = e => {
        e.preventDefault()
        const datastore = e.target
        const name = datastore.name.value
        const able = datastore.able.value
        const supply = datastore.supply.value
        const catagory = datastore.catagory.value
        const photourl = datastore.photourl.value
        const objdata = { name, able, supply, catagory, photourl }
        console.log(objdata)
    }
    return (
        <div>
            <h1>Data Update Form </h1>
            <form onSubmit={handelUpdate} >
                {/* {row no 1} */}
                <div className='flex justify-between'>
                    <div className="flex gap-2 mb-4 items-center md:w-1/2" >
                        <h2 className='mr-2'>Name:</h2>
                        <div>
                            <label className="">
                                <input type="text" name='name' placeholder="Input your coffe name" required className='w-full border p-2' />
                            </label>
                        </div>
                    </div>
                    <div className=" flex gap-2 items-center md:w-1/2">
                        <h2 className='mr-2'>Available:</h2>
                        <div>
                            <label className="">
                                <input type="text" name='able' placeholder="add your quantity" required className='w-full border p-2' />
                            </label>
                        </div>
                    </div>
                </div>
                {/* {row no 2} */}
                <div className='flex justify-between '>
                    <div className="flex gap-2 mb-4 items-center md:w-1/2" >
                        <h2 className='mr-2'>Supply:</h2>
                        <div>
                            <input type="text" name='supply' placeholder="Input your coffe supplyer name" required className='w-full border p-2' />
                        </div>
                    </div>
                    <div className=" flex gap-2 items-center md:w-1/2">
                        <h2 className='mr-2'>Catagory:</h2>
                        <div>
                            <input type="text" name='catagory' placeholder="add your catagory" required className='w-full border p-2' />
                        </div>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <h2 className='mr-2'>Photo:</h2>
                    <input type="text" name='photourl' placeholder='input you photo' className='w-full border p-2 mb-4' />
                </div>
                <input type="submit" value='ADD COFFEE' className='btn btn-block' />
            </form>
        </div>
    )
}
