"use client"
import { useSideBarContext } from "@/context"
import clsx from "clsx"
import { ActiveLink } from "./ActiveLink"
import { logOut } from "@/utils"
import { useRouter } from "next/navigation"

const navItems = [
    { path: '/account', text: 'Inicio' },
    { path: '/account/my-activity', text: 'Actividad'},
    { path: '/account/profile', text: 'Tu perfil' },
    { path: '/account/payment-methods', text: 'Cargar dinero'},
    { path: '/account/payment-for-services', text: 'Pagar Servicios' },
    { path: '/account/my-cards', text: 'Tarjetas' },
]

  export const SideMenu = () => {

    const { isSidebarOpen, setIsSidebarOpen } = useSideBarContext() 
    const router = useRouter();

    const closeSession = () => {
        logOut()
        router.push('/')
    }

    return (
        <>
            <div
                onClick={() => setIsSidebarOpen(false)} 
                className={clsx({
                'fixed inset-0 z-30 transition-all duration-500 ease-out': true,
                'bg-black bg-opacity-50': isSidebarOpen,
                'hidden': !isSidebarOpen,
            })}>
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
                    <button className="text-black text-left" onClick={closeSession}>Cerrar sesión</button>
                </aside>
            </div>
            
            <aside className={clsx({
                'absolute' :  isSidebarOpen,
                'p-[3vh]' :  isSidebarOpen,            
                'pt-[10vh] w-[60%] right-0' :  isSidebarOpen,
                'hidden w-full':   isSidebarOpen,
                }, "hidden md:flex flex-col h-full w-full z-30 bg-green-1 gap-4 md:inline-block md:col-span-3 md:p-8 md:py-12 lg:py-14 xl:col-span-2")}>
                {
                    navItems.map( navItem => (
                        <ActiveLink key={navItem.path} { ...navItem }  />
                    ))
                }
                <button className="text-black text-left" onClick={closeSession}>Cerrar sesión</button>
            </aside>
        </>
    )
}
