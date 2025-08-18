import { useLoaderData } from "react-router-dom"


export default function ViewCoffe() {
    const usedata = useLoaderData()
    return (
        <div>
            {
                usedata.map(d=><p>{d.name}:{d.supply}-----{d.catagory}-----------{d._id}</p>)
            }
        </div>
    )
}
