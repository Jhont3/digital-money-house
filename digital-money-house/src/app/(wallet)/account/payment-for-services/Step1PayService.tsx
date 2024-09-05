"use client"
import { Cablevision, Claro, Personal, Search } from "@/components"
import { UsePaymentStore } from "@/store";
import { ChangeEvent, KeyboardEvent, useState } from "react";

export function Step1PayService( {setStep}: any ) {

    const [ companies, setCompanies ] = useState<string[]> (["Claro", "Personal", "Cablevisión"]);
    const [ searchInput, setSearchInput ] = useState<string>("");
    const [ filteredCompanies, setFilteredCompanies ] = useState(companies || []);
    const { setPaymentInfo } = UsePaymentStore();
    

    const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchInput(value.toLowerCase());
    };

    const handleSearchInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
            setFilteredCompanies(companies.filter(company => 
                company.toLowerCase().includes(searchInput)
            ));
		}
	};

    const displayIcon = (company: string) => {
        if (company === "Claro")  return <Claro/>              
        if (company === "Cablevisión")  return <Cablevision/>              
        if (company === "Personal")  return <Personal/>                      
    }

    const handleSelectedCompany = (company: string) => {
        setPaymentInfo({destination: company})
        setStep(2)
    }

    return (
        <>
            <div className="relative w-full">
                <span className="absolute  left-3 top-1/2 transform -translate-y-1/2 z-10 ">
                    <Search/>
                </span>
                <input 
                    value={searchInput}
                    onChange={handleSearchInputChange}
                    onKeyDown={handleSearchInputKeyDown}
                    className="p-2 pl-8 w-full h-16 rounded-lg border-[1.6px] outline-none border-gray-1 focus:border-select-1 
                    focus:ring-0 shadow-[0_4px_4px_rgba(0,0,0,0.10)]"
                    placeholder="Buscá entre más de 5.000 empresas"
                />
            </div>

            <div className="bg-white p-5 rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.10)]">

                <h3 className="font-bold pb-5">Más recientes</h3>

                <div className=" flex flex-col gap-4">
                    
                    {filteredCompanies.map((company) => (
                        <div key={company} >
                            <hr className="mb-4"/>
                            <div className="flex ">
                                <span className=" w-[68px]">{displayIcon(company)}</span>                            
                                <span className="pl-3 md:pl-9 flex justify-center items-center">{company}</span>
                                <p 
                                    className="inline-flex flex-1 justify-end items-center font-bold text-sm cursor-pointer"
                                    onClick={()=>handleSelectedCompany(company)}
                                >
                                    <span>Seleccionar</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}