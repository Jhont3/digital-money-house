"use client"
import ArrowIcon from "@/components/ui/svg/ArrowIcon";
import Image from "next/image";
import Link from "next/link";

export default function AccountPage() {
    return(
        <section className="flex flex-col gap-4 md:col-span-3 md:p-8 md:py-12 lg:py-8 ">
            <div className="flex">
                <span className="flex items-center">
                    <Image src="/imgs/greyArrow.png" alt="icon" width={12} height={12}/>
                </span> &nbsp;
                <h2><span className="underline text-base text-dark-1 font-semibold">Perfil</span></h2>
            </div>

            {/* Your data */}
            <article className="bg-white px-4 py-6 rounded-lg flex flex-col gap-2 drop-shadow-md">

                <h2 className="text-dark-1 font-bold text-xl">Tus datos</h2>
                <hr />
                
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-flow-row md:grid-rows-1 lg:grid-cols-4 ">
                    <p className="text-dark-1 md:col-span-1">Email</p>

                    <div className="flex justify-between md:col-span-2 lg:col-span-3">
                        <p className="opacity-50">mauriciobrito@digitalhouse.com</p>
                    </div>  
                </div>
                <hr />

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-flow-row md:grid-rows-1 lg:grid-cols-4 ">
                    <p className="text-dark-1 md:col-span-1">Nombre y Apellido</p>

                    <div className="flex justify-between md:col-span-2 lg:col-span-3">
                        <p className="opacity-50">Mauricio Brito</p>
                        <span className="flex items-center md:justify-end">
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
                        <p className="opacity-50">1146730989</p>
                        <span className="flex items-center md:justify-end">
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
                        <p className="opacity-50">******</p>
                        <span className="flex items-center md:justify-end">
                            <Image src="/imgs/edit.png" className="grayscale" alt="icon" width={22} height={22}/>
                        </span>
                    </div>
                </div>
                <hr />

            </article>


            <Link href={'/'} className="flex justify-between bg-green-1 text-center p-4 rounded-lg font-bold drop-shadow-md">
                Gestioná los medios de pago 
                <span className="flex items-center md:justify-end">
                    <ArrowIcon/>
                </span> 
            </Link>

            
            {/* CVU & Alias */}
            <article className="grid grid-cols-4 gap-4 bg-dark-1 px-4 py-6 rounded-lg">

                <p className="text-sm text-gray-1 col-span-4 w-3/4">Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta</p>


                <div className="col-span-4">
                    <div className="flex justify-between md:col-span-2 lg:col-span-3">
                        <p className=" text-green-1 font-bold text-xl">CVU</p>
                        <span className="flex items-center md:justify-end">
                            <Image src="/imgs/copy.png" alt="icon" width={24} height={24}/>
                        </span>
                    </div>

                    <p className="text-gray-1 md:col-span-1">0000002100075320000000</p>
                </div>

                <hr className="col-span-4"/>

                <div className="col-span-4 text-gray-50">
                    asd
                </div>

            </article>

        </section>
    )

}

