"use client"
import { updateUser } from "@/api";
import { Subtitle } from "@/components";
import ArrowIcon from "@/components/ui/svg/ArrowIcon";
import { mockAlias, mockCVU } from "@/lib";
import { errorAlert, handleCopyClipboard, successAlert } from "@/utils";
import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';

type UserInputs = {
    dni: number;
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    phone: string;
};


export default function AccountPage() {

    const [userDataFromCookie, setUserDataFromCookie] = useState<UserInputs | null>(null);

    const { register, handleSubmit, reset, formState: { errors }, setValue, } = 
    useForm<UserInputs>( {defaultValues: userDataFromCookie ?? {} , mode: 'onChange', } );

    const handleFullnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fullname = e.target.value;
        const [firstname, lastname] = fullname.split(" ");
        
        setValue("firstname", firstname || "");
        setValue("lastname", lastname || "");
    };  

    useEffect(() => {
        const userDataCookie = getCookie('userData');
        if (userDataCookie) {
            const parsedUserData = JSON.parse(userDataCookie);
            setUserDataFromCookie(parsedUserData);
            
            reset(parsedUserData);
        }
        
    }, [reset]);    

    // const hasErrors = Object.values(errors).some(error => error);

    const onSubmit: SubmitHandler<UserInputs> = async (data)  => {
        const { password, ...restData } = data;
        // Check if password should be excluded
        const submitData = password === "******" || password === "" ? restData : data;    
        console.log(submitData, "data del submit");
        reset()
        try {
            // updateUser(userData.id, submitData)
            console.log("entro acaaaaaaaaaaaaaa" );            
            successAlert()
            
        } catch (error) {
            errorAlert()
            console.error(error, "form error");
        }
    }
    
    if (!userDataFromCookie) {
        return <div>Cargando...</div>;
    }

    return(
        <section className="flex flex-col gap-4 md:col-span-9 md:p-12 md:py-12 lg:py-8 md:gap-5 ">

            <Subtitle text="Perfil"/>

            {/* Your data */}
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white px-4 py-6 rounded-lg flex flex-col gap-2 drop-shadow-md md:p-6">

                <h2 className="text-dark-1 font-bold text-xl">Tus datos</h2>
                <hr />
                
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-flow-row md:grid-rows-1 lg:grid-cols-4 ">
                    <p className="text-dark-1 md:col-span-1">Email</p>

                    <div className="flex justify-between md:col-span-2 lg:col-span-3">
                        <input 
                            id="email"
                            className="opacity-50 focus:border-select-1 focus:ring-0"                            
                            {...register("email", { required: true })}                                                    
                            autoComplete="securityCode"
                            defaultValue={userDataFromCookie?.email}
                            readOnly
                            disabled
                        />
                    </div>  
                </div>
                <hr />

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-flow-row md:grid-rows-1 lg:grid-cols-4 ">
                    <p className="text-dark-1 md:col-span-1">Nombre y Apellido</p>

                    <div className="flex justify-between md:col-span-2 lg:col-span-3">
                        <input 
                                id="fullname"
                                className="opacity-50"                                
                                autoComplete="fullname"
                                defaultValue={`${userDataFromCookie?.firstname} ${userDataFromCookie?.lastname}`} 
                                onChange={handleFullnameChange}                               
                        />
                        <span 
                            onClick={() => {handleSubmit(onSubmit)();}}  
                            className="flex items-center md:justify-end"
                        >
                            <Image src="/imgs/edit.png" className="grayscale" alt="icon" width={22} height={22}/>
                        </span>
                    </div>
                </div>
                <hr />

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-flow-row md:grid-rows-1 lg:grid-cols-4 ">
                    <p className="text-dark-1 md:col-span-1">CUIT</p>

                    <div className="flex justify-between md:col-span-2 lg:col-span-3">
                        <p className="opacity-50">20350269798</p>
                        <span className="flex items-center md:justify-end">
                            <Image src="/imgs/edit.png" className="grayscale" alt="icon" width={22} height={22}/>
                        </span>
                    </div>
                </div>
                <hr />

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-flow-row md:grid-rows-1 lg:grid-cols-4 ">
                    <p className="text-dark-1 md:col-span-1">        
                        Teléfono
                    </p>

                    <div className="flex justify-between md:col-span-2 lg:col-span-3">
                        <input 
                                id="phone"
                                className="opacity-50"
                                type="text"
                                autoComplete="phone"
                                {...register("phone")}
                                defaultValue={`${userDataFromCookie?.phone}`}                                                               
                        />
                        <span 
                            className="flex items-center md:justify-end"
                            onClick={() => {handleSubmit(onSubmit)();}}
                        >
                            <Image src="/imgs/edit.png" className="grayscale" alt="icon" width={22} height={22}/>
                        </span>
                    </div>
                </div>
                <hr />

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-flow-row md:grid-rows-1 lg:grid-cols-4 ">
                    <p className="text-dark-1 md:col-span-1">        
                        Contraseña
                    </p>

                    <div className="flex justify-between md:col-span-2 lg:col-span-3">
                        <input 
                                id="password"
                                className="opacity-50"
                                type="password"
                                autoComplete="password"
                                {...register("password")}
                                defaultValue="******"                           
                        />
                        <span 
                            className="flex items-center md:justify-end"
                            onClick={() => {handleSubmit(onSubmit)();}}                            
                        >
                            <Image src="/imgs/edit.png" className="grayscale" alt="icon" width={22} height={22}/>
                        </span>
                    </div>
                </div>
                <hr />

            </form>


            <Link href={'/'} className="flex justify-between items-center bg-green-1 text-center p-4 rounded-lg font-bold drop-shadow-md md:min-h-28 md:text-xl">
                Gestioná los medios de pago 
                <span className="flex items-center md:justify-end">
                    <ArrowIcon/>
                </span> 
            </Link>

            
            {/* CVU & Alias */}
            <article className="grid grid-cols-4 gap-4 bg-dark-1 px-4 py-6 md:p-8 rounded-lg md:gap-8">

                <h3 className="text-sm text-gray-1 col-span-4 w-3/4 md:w-full md:font-bold">
                    Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta
                </h3>


                <div className="col-span-4 md:hidden">
                    <div className="flex justify-between">
                        <p className=" text-green-1 font-bold text-xl">CVU</p>
                        <span className="flex items-center">
                            <Image src="/imgs/copy.png" alt="icon" width={24} height={24}/>
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
                            <Image src="/imgs/copy.png" alt="icon" width={24} height={24}/>
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
        </section>
    )
}
