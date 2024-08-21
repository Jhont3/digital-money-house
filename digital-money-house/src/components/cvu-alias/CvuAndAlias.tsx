"use client"
import { mockAlias, mockCVU } from "@/lib"
import { handleCopyClipboard } from "@/utils"
import Image from "next/image"

export const CvuAndAlias = () => {
    return (
        <article className="grid grid-cols-4 gap-4 bg-dark-1 px-4 py-6 md:p-8 rounded-lg md:gap-8">

        <h3 className="text-sm text-gray-1 col-span-4 w-3/4 md:w-full md:font-bold">
            Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta
        </h3>


        <div className="col-span-4 md:hidden">
            <div className="flex justify-between">
                <p className=" text-green-1 font-bold text-xl">CVU</p>
                <span className="flex items-center">
                    <Image src="/imgs/copy.png" alt="icon" width={24} height={24} onClick={() => {handleCopyClipboard(mockCVU)}}/>
                </span>
            </div>

            <p className="text-gray-1 md:col-span-1">{mockCVU}</p>
        </div>

        <div className="hidden md:grid col-span-4 grid-cols-4">
            <div className="col-span-3 row-span-2">
                <p className="text-green-1 font-bold text-xl">CVU</p>
                <p className="text-gray-1">{mockCVU}</p>
            </div>
            <span className="flex items-center md:row-span-2 md:justify-end">
                <Image src="/imgs/copy.png" alt="icon" width={32} height={32} onClick={() => {handleCopyClipboard(mockCVU)}}/>
            </span>
        </div>

        <hr className="col-span-4 md:hidden"/>

        <div className="col-span-4 md:hidden">
            <div className="flex justify-between md:col-span-2 lg:col-span-3">
                <p className=" text-green-1 font-bold text-xl">Alias</p>
                <span className="flex items-center md:justify-end">
                    <Image src="/imgs/copy.png" alt="icon" width={24} height={24} onClick={() => {handleCopyClipboard(mockAlias)}}/>
                </span>
            </div>

            <p className="text-gray-1 md:col-span-1">{mockAlias}</p>
        </div>

        <div className="hidden md:grid col-span-4 grid-cols-4 ">
            <div className="col-span-3">
                <p className="text-green-1 font-bold text-xl">Alias</p>
                <p className="text-gray-1">{mockAlias}</p>
            </div>
            <span className="flex items-center md:row-span-2 md:justify-end">
                <Image src="/imgs/copy.png" alt="icon" width={32} height={32} onClick={() => {handleCopyClipboard(mockAlias)}}/>
            </span>
        </div>

    </article>
    )
}