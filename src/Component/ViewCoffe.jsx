import { useLoaderData } from "react-router-dom"
import Coffe from "./Coffe"


export default function ViewCoffe() {
    const usedata = useLoaderData()
    return (
        <div className="p-10">
            <h1 className="text-4xl font-bold text-blue-500 text-center p-4">Hot Hot Cold Coffe in The Place</h1>
            <p className="text-center pb-8">There are new place of my industry</p>
            <div className="grid grid-cols-4 gap-5 m-auto ">
                {
                    usedata.map(d => <Coffe key={d._id} Coffe={d}></Coffe>)
                }
            </div>
        </div>
    )
}
