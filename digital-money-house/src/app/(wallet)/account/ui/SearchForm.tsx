"use client"
import { FilterModalActivities } from "@/components";
import { useFilterModalContext } from "@/context";
import { Activity } from "@/interfaces";
import { useActivitiesManagement } from "@/store";
import clsx from "clsx";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { KeyboardEvent, ChangeEvent, useEffect } from "react";
interface SearchFormProps {
    allActivities: Activity[];
    onDashboard: boolean
}

export function SearchForm ( {allActivities, onDashboard}:SearchFormProps ) {

    const { activities, setActivities, inputSearch, setInputSearch } = useActivitiesManagement()
    const { isFilterModalOpen, setIsFilterModalOpen } = useFilterModalContext()
    console.log(activities);

    useEffect(() => {
        if(!inputSearch ) {
            setActivities(allActivities?.filter(activity => 
                activity.type?.toLowerCase().includes(inputSearch) || 
                activity.origin?.toLowerCase().includes(inputSearch) ||
                activity.destination?.toLowerCase().includes(inputSearch) || 
                activity.description?.toLowerCase().includes(inputSearch) ||
                activity.amount?.toString().includes(inputSearch)
                ) || [])
        }
    }, [inputSearch, setActivities, allActivities])

    useEffect(() => {
        setActivities(allActivities)
    }, [])
    
    const router = useRouter();

    const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputSearch(e.target.value.toLowerCase());
	};
    
    const handleSearchInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {           
            setActivities(allActivities?.filter(activity => 
                activity.type?.toLowerCase().includes(inputSearch) || 
                activity.origin?.toLowerCase().includes(inputSearch) ||
                activity.destination?.toLowerCase().includes(inputSearch) || 
                activity.description?.toLowerCase().includes(inputSearch) ||
                activity.amount?.toString().includes(inputSearch)
                ) || [])
            redirectToActivityPage();
		}
	};

	const redirectToActivityPage = () => {
		if (inputSearch.trim().length > 0) {
			router.push(`/account/my-activity?search=${inputSearch}`);
		}
	};

    return (
    <>  
        <div
            onClick={ () => setIsFilterModalOpen(false) } 
            className={clsx({
            'hidden':!isFilterModalOpen},
            "fixed inset-0 z-30 bg-transparent cursor-pointer")}
        />
        {/* Search input*/}
        <div className="relative w-full">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                <Image src="/imgs/search.png" alt="icon" width={14.7} height={14.7}/>
            </span>

            <div className="flex gap-5">
                <input                     
                    id="textToSearch"
                    name="textToSearch"
                    value={inputSearch}
                    onKeyDown={handleSearchInputKeyDown}
                    onChange={handleSearchInputChange}
                    className="text-black w-full text-base py-3 pl-8 px-4 rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.10)] 
                                border-[1.6px] outline-none border-gray-1 focus:border-select-1 focus:ring-0 md:min-h-16 "
                    placeholder="Buscar en tu actividad"
                    autoComplete="textToSearch"   
                />

                { onDashboard &&       
                <div 
                    className="hidden md:flex gap-2 bg-green-1 rounded-lg justify-center items-center w-44 h-16 
                    shadow-[0_4px_4px_rgba(0,0,0,0.10)] "
                    onClick={()=>setIsFilterModalOpen(true)}
                >
                    <p className="text-dark-1 font-bold">Filtrar</p>
                    <span className="flex items-center">
                        <Image src="/imgs/filter.png" alt="filter icon" width={17} height={13} className="md:w-[18px] md:h-[18px]"/>
                    </span>
                </div>
                }
                
                <FilterModalActivities allActivities={allActivities}/>

            </div>
        </div>
    </>
    )
}
