import Image from "next/image";
import Link from "next/link";
import ActualCash from "./ui/ActualCash";
import { SearchForm } from "./ui";
import { UserActivity } from "./ui/UserActivity";
import { Subtitle } from "@/components";

export default function ProfilePage() {

  return (
    <section className="flex flex-col gap-4 md:col-span-9 md:p-12 md:py-14 lg:px-20 lg:py-14 xl:col-span-10">
      
      <Subtitle text="Inicio"/>

      {/* User money */}
      <div className="bg-dark-1 p-4 pb-6 rounded-lg flex flex-col gap-4 shadow-[0_4px_4px_rgba(0,0,0,0.10)] md:px-6 md:pb-12 ">
        <p className=" flex justify-end text-white text-xs font-semibold gap-2 pb-2">
          <Link href={'/account/my-cards'}><span>Ver tarjetas</span></Link>
          <Link href={'/account/profile'}><span>Ver CVU</span></Link>
        </p>
        <p className="text-white md:pl-2 md:font-bold">Dinero disponible</p>
        <ActualCash/>
      </div>

      <div className="flex flex-col gap-4 md:text-2xl lg:flex-row  ">
        <Link href={'/account/payment-methods'} className="flex items-center justify-center bg-green-1 text-center p-4 rounded-lg font-bold shadow-[0_4px_4px_rgba(0,0,0,0.10)] md:min-h-20 lg:flex-1">
          <span className="block md:hidden">Ingresar dinero</span>
          <span className="hidden md:block lg:hidden">Transferir dinero</span>
          <span className="hidden lg:block">Cargar dinero</span>
        </Link>

        <Link href={'/account/payment-for-services'} className="flex items-center justify-center bg-green-1 text-center p-4 rounded-lg font-bold shadow-[0_4px_4px_rgba(0,0,0,0.10)] md:min-h-20 lg:flex-1">
          <span className="block md:hidden">Pago servicios</span>
          <span className="hidden md:block lg:hidden">Pagar servicios</span>
          <span className="hidden lg:block">Pago de servicios</span>
        </Link>
      </div>

      <SearchForm/>

      {/* User activity */}
      <article className="bg-white p-4 rounded-lg flex flex-col gap-4 shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:p-8 md:py-10">
        
        <p className="text-dark-1 font-bold">Tu actividad</p>
        <hr className="md:border-t md:border-transparent md:border-black"/>

        <UserActivity itemsPerPage={4} showPagination={false}/>

        <Link href={'/account/my-activity'} className="text-black font-bold text-[12px] flex justify-between md:text-base">
          <span className="">Ver toda tu actividad</span>
          <span className="flex items-center">
            <Image src="/imgs/greyArrow.png" alt="icon" width={12} height={12} className="md:w-[18px] md:h-[18px]"/>
          </span>
        </Link>      

      </article>

    </section>
  );
}
