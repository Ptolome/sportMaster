import {BASE_API_URL} from '@constants/servise';
import {IRacket} from '@/src/types/racket';
import {Response} from '@/src/types/request';

export const getRackets = async (limit:number=10, page:number=1):Response<IRacket[]> => {
    const res = await fetch(`${BASE_API_URL}/products?limit=${limit}&page=${page}`);

    if (res.status === 404) {
        return {isError:false, data: undefined}
    }

    if (!res.ok) {
        return {isError: true, data: undefined}
        
    }

   const products = await res.json();
   
    return { isError: false, data: products };
};