import {BASE_API_URL} from '@constants/servise';
import {IRacket} from '@/src/types/racket';
import {Response} from '@/src/types/request';


export const getRacketsTop10 = async ():Response<IRacket[]> => {
    const res = await fetch(`${BASE_API_URL}/top-10`);

    if (res.status === 404) {
        return {isError:false, data: undefined}
    }

    if (!res.ok) {
        return {isError: true, data: undefined}
    }

    const products  = await res.json();
    return { isError: false, data: products };
};