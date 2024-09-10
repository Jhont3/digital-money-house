"use client"
import { handleCopyClipboard } from "@/utils"
import { Copy } from "../common/icons/Copy"

export const CvuAndAlias = ({accountInfo}:any) => {

    if (!accountInfo) {
        return <div>Cargando...</div>
    }

    return (
        <article className="grid grid-cols-4 gap-4 bg-dark-1 px-4 py-6 md:p-8 rounded-lg md:gap-8">

        <h3 className="text-sm text-gray-1 col-span-4 w-3/4 md:w-full md:font-bold">
            Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta
        </h3>


        <div className="col-span-4 md:hidden">
            <div className="flex justify-between">
                <p className=" text-green-1 font-bold text-xl">CVU</p>
                <span className="flex items-center" onClick={() => {handleCopyClipboard(accountInfo.cvu)}}>
                    <Copy className="w-6 h-6" />                   
                </span>
            </div>

            <p className="text-gray-1 md:col-span-1">{accountInfo.cvu}</p>
        </div>

        <div className="hidden md:grid col-span-4 grid-cols-4">
            <div className="col-span-3 row-span-2">
                <p className="text-green-1 font-bold text-xl">CVU</p>
                <p className="text-gray-1">{accountInfo.cvu}</p>
            </div>
            <span className="flex items-center md:row-span-2 md:justify-end" onClick={() => {handleCopyClipboard(accountInfo.cvu)}}>
                <Copy className="w-8 h-8"/> 
            </span>
        </div>

        <hr className="col-span-4 md:hidden"/>

        <div className="col-span-4 md:hidden">
            <div className="flex justify-between md:col-span-2 lg:col-span-3">
                <p className=" text-green-1 font-bold text-xl">Alias</p>
                <span className="flex items-center md:justify-end" onClick={() => {handleCopyClipboard(accountInfo?.alias)}}>
                    <Copy className="w-6 h-6" />
                </span>
            </div>

            <p className="text-gray-1 md:col-span-1">{accountInfo?.alias}</p>
        </div>

        <div className="hidden md:grid col-span-4 grid-cols-4 ">
            <div className="col-span-3">
                <p className="text-green-1 font-bold text-xl">Alias</p>
                <p className="text-gray-1">{accountInfo?.alias}</p>
            </div>
            <span className="flex items-center md:row-span-2 md:justify-end" onClick={() => {handleCopyClipboard(accountInfo?.alias)}}>
                <Copy className="w-8 h-8" />                        
            </span>
        </div>

    </article>
    )
}