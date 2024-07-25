"use client"
import Image from "next/image";

export default function AccountPage() {
    return(
        <div className="flex flex-col gap-4 md:col-span-3 md:p-8 md:py-12 lg:py-8 ">
            <p className="flex">
                <span className="flex items-center">
                    <Image src="/imgs/greyArrow.png" alt="icon" width={12} height={12}/>
                </span> &nbsp;
                <h2><span className="underline text-base text-dark-1 font-semibold">Perfil</span></h2>
            </p>

            {/* Your data */}
            <article className="bg-white p-4 rounded-lg flex flex-col gap-2 drop-shadow-md">

                <h2 className="text-dark-1 font-bold text-xl">Tus datos</h2>
                <hr />


                    <div className="flex gap-2 md:grid md:grid-cols-3 lg:grid-cols-4">
                        <p className="flex items-center text-sm gap-2 text-dark-1 md:text-base md:col-span-1">        
                            Email
                        </p>
     
                        <div className="flex justify-between md:col-span-2 lg:col-span-3">
                            <p className="opacity-50">mauriciobrito@digitalhouse.com</p>
                            <span className="flex items-center md:justify-end">
                                <Image src="/imgs/edit.png" className="grayscale" alt="icon" width={22} height={22}/>
                            </span>
                        </div>
                    </div>
                    <hr />

                    <div className="flex gap-2 md:grid md:grid-cols-3 lg:grid-cols-4">
                        <p className="flex items-center text-sm gap-2 text-dark-1 md:text-base md:col-span-1">        
                            Nombre y Apellido
                        </p>
                        <div className="flex justify-between md:col-span-2 lg:col-span-3">
                            <p className="opacity-50">Mauricio Brito</p>
                            <span className="flex items-center md:justify-end">
                                <Image src="/imgs/edit.png" className="grayscale" alt="icon" width={22} height={22}/>
                            </span>
                        </div>
                    </div>


                <hr />

            </article>
    

        </div>
    )

}

