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
    { path: '/account/deposit', text: 'Cargar dinero'},
    { path: '/account/payments', text: 'Pagar Servicios' },
    { path: '/account/my-cards', text: 'Tarjetas' },
  ]

  export const SideMenu = () => {

    const { isSidebarOpen } = useSideBarContext() 
    const router = useRouter();

    const closeSession = () => {
        logOut()
        router.push('/')
    }

    return (
        <aside className={clsx({
            'absolute' :  isSidebarOpen,
            'p-[3vh]' :  isSidebarOpen,
            'pt-[10vh]' :  isSidebarOpen,
            'hidden' :    !isSidebarOpen,
             }, "flex flex-col w-full h-full z-30 bg-green-1 gap-4 md:inline-block md:col-span-3 md:p-8 md:py-12 lg:py-14 xl:col-span-2")}>
            {
                navItems.map( navItem => (
                    <ActiveLink key={navItem.path} { ...navItem }  />
                ))
            }
            <button className="text-black text-left" onClick={closeSession}>Cerrar sesión</button>
        </aside>
    )
}
