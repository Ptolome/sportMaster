import { getRacketById } from "@/src/services/get-racket-by-id";
import { FC } from "react";
import RacketCard from "./Racketcard";
import { notFound } from "next/navigation";

type Props = {
    id: string;
}

 export const RacketContainer:FC<Props> = async ({id})=>{
    const {isError, data} = await getRacketById(id);

    if (isError){
        return 'some Error';
    }

    if (!data){
        return notFound();
    }
    return    <RacketCard data={data} />
   
 }