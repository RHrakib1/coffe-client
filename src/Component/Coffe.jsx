import Swal from 'sweetalert2'
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrView } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";


export default function Coffe({ Coffe, heandelDelete }) {
    const { _id, name, able, supply, catagory, photourl } = Coffe
    const confirmDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This coffee will be deleted!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                heandelDelete(id)
                Swal.fire('Deleted!', 'Your coffee has been deleted.', 'success')
            }
        })
    }

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
                        <button className="btn btn-primary"><FiEdit className='text-xl'></FiEdit></button>
                        <button className="btn btn-primary"><GrView className='text-xl'></GrView></button>
                        <button onClick={() => confirmDelete(_id)} className="btn btn-primary"><RiDeleteBin6Line className='text-xl'></RiDeleteBin6Line></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
