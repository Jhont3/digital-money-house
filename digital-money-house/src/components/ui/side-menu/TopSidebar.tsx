"use client"
import { useSideBarContext } from "@/context";
import clsx from "clsx";
import Image from "next/image";
import { ActiveLink } from "./ActiveLink";
import { navItems } from "@/lib";
import { useRouter } from "next/navigation";
import { logOut } from "@/utils";

export const TopSidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSideBarContext();
  const router = useRouter();

  const closeSessionAndRedirect = () => {
    logOut()
    router.push('/')
  }
  return (
    <>
      {isSidebarOpen && (
            <div
            onClick={() => setIsSidebarOpen(false)} 
            className={clsx({
            'fixed inset-0 z-30 transition-all duration-500 ease-out': true,
            'bg-black bg-opacity-50': isSidebarOpen,
            'hidden': !isSidebarOpen,
        })}>
            <div className="flex flex-col justify-evenly pl-8 py-4 pr-4 bg-dark-2 text-green-1 h-[14vh] w-[60%] absolute right-0 z-40 ">
            
            <button className="flex w-full justify-end right-[3vh] z-50" onClick={()=>setIsSidebarOpen(false)}>
                <Image            
                src="/imgs/close.png"
                alt="close icon"
                width={14}
                height={14}
                />
            </button>
            <div className="text-green-1 font-bold">
                <p>Hola,</p>
                <p> Mauricio Brito</p>
            </div>

            

            </div>
            <aside 
                onClick={(e) => e.stopPropagation()}
                className={clsx({
                'absolute right-0 p-8 mt-[14vh]': true,
                'w-[60%]': isSidebarOpen,
                'w-full': !isSidebarOpen,
                }, "flex flex-col h-full bg-green-1 gap-4 md:col-span-3 md:p-8 md:py-12 lg:py-14 xl:col-span-2")}>
                {
                    navItems.map( navItem => (
                        <ActiveLink key={navItem.path} { ...navItem }  />
                    ))
                }
                <button className="text-black text-left" onClick={closeSessionAndRedirect}>Cerrar sesión</button>
            </aside>
        </div>
      )}
    </>
  );
};
