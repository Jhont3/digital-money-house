"use client"
import { useFilterModalContext } from "@/context"
import { Filter } from "../common/icons/Filter"

export const ActivityTittleFilter = () => {

    const { isFilterModalOpen, setIsFilterModalOpen } = useFilterModalContext()

    return (                   
        <div 
            className="flex justify-between"
            onClick={()=>setIsFilterModalOpen(true)}
        >
            <p className="text-dark-1 font-bold">Tu actividad</p>
            <div className="flex gap-2 md:hidden">
                <p className="text-dark-1 underline">Filtrar</p>
                <span className="flex items-center">
                    <Filter className="w-[17px] h-[13px]"/>
                </span>
            </div>
        </div>     
    )
}
