"use client"
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useState, KeyboardEvent, ChangeEvent } from "react";

export function SearchForm () {
    
    const [searchInput, setSearchInput] = useState<string>("");
    // const { formState, onInputChange, onResetForm } = useFormC(initialState)
    const router = useRouter();

    const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};
    
    const handleSearchInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			searchInput.trim();
			redirectToActivityPage();
		}
	};

	const redirectToActivityPage = () => {
		if (searchInput.trim().length > 0) {
			router.push(`/account/my-activity?search=${searchInput}`);
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
            value={searchInput}
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
