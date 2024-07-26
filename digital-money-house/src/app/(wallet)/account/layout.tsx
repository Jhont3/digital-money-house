"use client"
import { Navbar, SideMenu, TopSidebar } from "@/components";
import { useSideBarContext } from "@/context";
import clsx from "clsx";

export default function WalletLayout( {children} : { children: React.ReactNode} ){
  const { isSidebarOpen } = useSideBarContext() 

  return (
    <>  
        <TopSidebar/>
        <Navbar isBgGreen={false} onUserPage={true} />
        <main className={ clsx({
          'p-0': isSidebarOpen,
          'p-4' : !isSidebarOpen,
        },"min-h-[86vh] bg-gray-1 md:p-0 md:grid md:grid-cols-12 md:gap-0 ")}>
          <SideMenu/>
          {children}
        </main>
    </>
  )
}
