import { useLoaderData } from "react-router-dom"
import Coffe from "./Coffe"


export default function ViewCoffe() {
    const usedata = useLoaderData()
    return (
        <div>
            <div>
                {
                    usedata.map(d => <Coffe key={d._id} Coffe={d}></Coffe>)
                }
            </div>
        </div>
    )
}
