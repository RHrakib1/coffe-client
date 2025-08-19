import Swal from 'sweetalert2'
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrView } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";


export default function Coffe({ Coffe }) {
    const { _id, name, able, supply, catagory, photourl } = Coffe

    const heandelDelete = id => {
        console.log('the deletet id is a :', id)
        fetch(`http://localhost:5000/postcoffedata/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: 'Delete!',
                        text: 'You have successsully delete',
                        icon: 'warning',
                        confirmButtonText: 'Cool'
                    })
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
                        <button onClick={() => heandelDelete(_id)} className="btn btn-primary"><RiDeleteBin6Line className='text-xl'></RiDeleteBin6Line></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
