import { getAccountInfo } from "@/api";

export async  function ActualCash () {

    const accountInfo = await getAccountInfo(); 
    
    return (
        <p className=" text-white py-2 font-bold text-2xl md:text-4xl ">
            <span className=" rounded-full border border-green-1 py-2 px-4 md:pr-6 md:pl-4 md:border-2 ">
                {accountInfo?.available_amount || 'No data available'}
            </span>
        </p>
    )
}