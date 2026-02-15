import Card from "@/src/components/Card"
import { FC } from "react"

const Page:FC<PageProps<"/racket/[id]">>= async({params})=>{
    const {id} = await params
    return(
        <div>
           <Card id={id}/>
        </div>
    )
}

export default Page