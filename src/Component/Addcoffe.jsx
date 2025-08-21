import Swal from 'sweetalert2'

export default function Addcoffe() {
    const hendlesubmit = e => {
        e.preventDefault()
        const datastore = e.target
        const name = datastore.name.value
        const able = datastore.able.value
        const supply = datastore.supply.value
        const catagory = datastore.catagory.value
        const photourl = datastore.photourl.value
        const objdata = { name, able, supply, catagory, photourl }
        console.log(objdata)
        fetch('http://localhost:5000/postcoffedata', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(objdata)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Coffe Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }



            })
    }
    return (
        <div className='bg-gray-500 p-24 max-w-5xl rounded-4xl m-auto mt-10'>
            <h1 className='text-3xl font-bold text-center mb-5'>Add Coffee</h1>
            <form onSubmit={hendlesubmit} >
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
