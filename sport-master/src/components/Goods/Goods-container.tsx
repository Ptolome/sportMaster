import { getRackets } from "@services/get-rackets";
import Goods from "./Goods";
import { FC } from "react";

interface Props{
    limit?: number,
    page?: number
}
export const GoodsContainer:FC<Props> = async ({limit, page}) => {
    const { isError, data } = await getRackets(limit, page); 

    if (isError) {
        return 'some Error';
    }
    if (!data) {
        return 'No data ';
    }
    return <Goods rackets={data}/>;
}