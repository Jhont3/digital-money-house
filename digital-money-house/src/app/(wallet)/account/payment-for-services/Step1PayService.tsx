"use client"
import { Search } from "@/components"
import { SERVICE } from "@/constants/service";
import { UsePaymentStore } from "@/store";
import Image from "next/image";
import { ChangeEvent, KeyboardEvent, useState } from "react";

export function Step1PayService( {setStep, services}: any ) {
    
    const [ searchInput, setSearchInput ] = useState<string>("");
    const [ filteredServices, setFilteredServices ] = useState(services || []);
    const { setPaymentInfo } = UsePaymentStore();
    
    const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchInput(value.toLowerCase());
    };

    const handleSearchInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
          setFilteredServices(
            services.filter((service: any) =>
              service.name.toLowerCase().includes(searchInput)
            )
          );
        }
      };

    const displayIcon = (serviceId: number) => {
        const serviceImg = SERVICE[serviceId];
        return (
          <Image
            className="min-h-full max-h-full object-contain"
            src={serviceImg.src}
            alt={serviceImg.alt}
            width={80}
            height={25}
          />
        );
    };

    const handleSelectedService = (serviceName: string) => {
        setPaymentInfo({ destination: serviceName });
        setStep(2);
    };

    return (
        <>
          <div className="relative w-full">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
              <Search />
            </span>
            <input
              value={searchInput}
              onChange={handleSearchInputChange}
              onKeyDown={handleSearchInputKeyDown}
              className="p-2 pl-8 w-full h-16 rounded-lg border-[1.6px] outline-none border-gray-1 focus:border-select-1 focus:ring-0 shadow-[0_4px_4px_rgba(0,0,0,0.10)]"
              placeholder="Buscá entre más de 5.000 empresas"
            />
          </div>
    
          <div className="bg-white p-5 rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.10)]">
            <h3 className="font-bold pb-5">Más recientes</h3>
    
            <div className="flex flex-col gap-4">
              {filteredServices.map((service: any) => (
                <div key={service.id}>
                  <hr className="mb-4" />
                  <div className="flex ">
                    <span className="w-[68px]">{displayIcon(service.id)}</span>
                    <span className="pl-3 md:pl-9 flex justify-center items-center">
                      {service.name}
                    </span>
                    <p
                      className="inline-flex flex-1 justify-end items-center font-bold text-sm cursor-pointer"
                      onClick={() => handleSelectedService(service.name)}
                    >
                      <span>Seleccionar</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
    