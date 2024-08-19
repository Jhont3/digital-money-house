"use client"
import { Navbar, SideMenu, TopSidebar } from "@/components";
import { useSideBarContext } from "@/context";
import clsx from "clsx";

export default function WalletLayout( {children} : { children: React.ReactNode} ){
  const { isSidebarOpen } = useSideBarContext() 

  return (
    <>  
        <Navbar isBgGreen={false} onUserPage={true} />
        <main className={"p-4 min-h-[86vh] bg-gray-1 md:p-0 md:grid md:grid-cols-12 md:gap-0 "}>
          <TopSidebar/>
          <SideMenu/>
          {children}
        </main>
    </>
  )
}
