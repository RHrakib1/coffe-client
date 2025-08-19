import { useLoaderData } from "react-router-dom"
import Coffe from "./Coffe"
import { useState } from "react"


export default function ViewCoffe() {
    const usedata = useLoaderData()
    const [newdata, setnewdata] = useState(usedata)
    const heandelDelete = id => {
        console.log('the deletet id is a :', id)
        fetch(`http://localhost:5000/postcoffedata/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {

                    const dataremainnning = newdata.filter(d => d._id !== id)
                    setnewdata(dataremainnning)
                }
            })
    }
    return (
        <div className="p-10">
            <h1 className="text-4xl font-bold text-blue-500 text-center p-4">Hot Hot Cold Coffe in The Place</h1>
            <p className="text-center pb-8">There are new place of my industry</p>
            <div className="grid grid-cols-4 gap-5 m-auto ">
                {
                    newdata.map(d => <Coffe key={d._id} Coffe={d} heandelDelete={heandelDelete}></Coffe>)
                }
            </div>
        </div>
    )
}
