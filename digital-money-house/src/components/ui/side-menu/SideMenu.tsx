"use client"
import { useSideBarContext } from "@/context"
import clsx from "clsx"
import { ActiveLink } from "./ActiveLink"
import { logOut } from "@/utils"
import { useRouter } from "next/navigation"
import { navItems } from "@/lib"

  export const SideMenu = () => {

    const { isSidebarOpen } = useSideBarContext() 
    const router = useRouter();

    const closeSessionAndRedirect = () => {
        logOut()
        router.push('/')
    }

    return (
        <>            
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
                <button className="text-black text-left" onClick={closeSessionAndRedirect}>Cerrar sesión</button>
            </aside>
        </>
    )
}
