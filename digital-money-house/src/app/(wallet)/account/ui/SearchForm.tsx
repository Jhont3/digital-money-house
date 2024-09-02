"use client"
import { Activity } from "@/interfaces";
// import { useFormC } from "@/hooks";
import { useActivitiesManagement } from "@/store";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { KeyboardEvent, ChangeEvent } from "react";
interface SearchFormProps {
    allActivities: Activity[];
}

export function SearchForm ( {allActivities}:SearchFormProps ) {

    const { activities, setActivities, inputSearch, setInputSearch } = useActivitiesManagement()
    console.log(activities);
    
    // const { formState, onInputChange, onResetForm } = useFormC(initialState)
    const router = useRouter();

    const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputSearch(e.target.value);
	};
    
    const handleSearchInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
            if (inputSearch) {
                setActivities(allActivities?.filter(activity => 
                    activity.type?.toLowerCase().includes(inputSearch) || 
                    activity.origin?.toLowerCase().includes(inputSearch) ||
                    activity.destination?.toLowerCase().includes(inputSearch) || 
                    activity.dated?.toLowerCase().includes(inputSearch) ||
                    activity.description?.toLowerCase().includes(inputSearch) ||
                    activity.amount?.toString().includes(inputSearch)
                  ) || [])
            }
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
        {/* Search input*/}
        <div className="relative w-full">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                <Image src="/imgs/search.png" alt="icon" width={14.7} height={14.7}/>
            </span>

            <input                     
            id="textToSearch"
            name="textToSearch"
            value={inputSearch}
            onKeyDown={handleSearchInputKeyDown}
            onChange={handleSearchInputChange}
            className="text-black text-base w-full py-3 pl-8 px-4 rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.10)] 
                         border-[1.6px] outline-none border-gray-1 focus:border-select-1 focus:ring-0 md:min-h-16 "
            placeholder="Buscar en tu actividad"
            autoComplete="textToSearch"   
            />
        </div>
    </>
    )
}
