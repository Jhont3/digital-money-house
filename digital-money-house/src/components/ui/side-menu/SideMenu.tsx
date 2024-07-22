"use client"
import { useSideBarContext } from "@/context"
import clsx from "clsx"
import { ActiveLink } from "./ActiveLink"

const navItems = [
    { path: '/profile', text: 'Inicio' },
    { path: '/profile/my-activity', text: 'Actividad'},
    { path: '/profile/account', text: 'Tu perfil' },
    { path: '/profile/deposit', text: 'Cargar dinero'},
    { path: '/profile/payments', text: 'Pagar Servicios' },
    { path: '/profile/my-cards', text: 'Tarjetas' },
  ]

  export const SideMenu = () => {

    const { isSidebarOpen } = useSideBarContext() 

    return (
        <aside className={clsx({
            'absolute' :  isSidebarOpen,
            'p-[3vh]' :  isSidebarOpen,
            'pt-[10vh]' :  isSidebarOpen,
            'hidden' :    !isSidebarOpen,
             }, "flex flex-col w-full h-full z-30 bg-green-1 gap-4 md:inline-block md:col-span-1 md:p-8")}>
            {
                navItems.map( navItem => (
                    <ActiveLink key={navItem.path} { ...navItem }  />
                ))
            }
            <p className="text-black">Cerrar sesión</p>
        </aside>
    )
}