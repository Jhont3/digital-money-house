"use client"
import { useSideBarContext } from "@/context";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    text: string;
  }

export const ActiveLink = ({  path, text }: Props) => {

    const pathName = usePathname();
    const { setIsSidebarOpen } = useSideBarContext() 


    return (
      <Link 
        className={ `text-black block md:pb-4 ${(pathName === path) ? "font-extrabold" : "font-semibold"} ` } 
        href={ path }
        onClick={()=>setIsSidebarOpen(false)}
      >
          { text }
      </Link>
    )
}
  