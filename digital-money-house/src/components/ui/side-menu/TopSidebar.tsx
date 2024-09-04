"use client";
import { useSideBarContext } from "@/context";
import clsx from "clsx";
import Image from "next/image";
import { ActiveLink } from "./ActiveLink";
import { navItems } from "@/lib";
import { useRouter } from "next/navigation";
import { logOut } from "@/utils";


export const TopSidebar = ({profileInfo}:any) => {
  const { isSidebarOpen, setIsSidebarOpen } = useSideBarContext();
  const router = useRouter();

  const closeSessionAndRedirect = () => {
    logOut();
    router.push("/");
  };

  return (
    <>      
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className={clsx(
            "fixed inset-0 z-20 bg-black transition-opacity duration-500",
            {
              "opacity-50": isSidebarOpen,
              "opacity-0": !isSidebarOpen,
            }
            
          )}
        />
      )}
      
      <div
        className={clsx(
          "fixed top-0 right-0 z-30 h-full w-[60%] bg-green-1 transition-transform duration-500 ease-out",
          {
            "translate-x-0": isSidebarOpen,
            "translate-x-full": !isSidebarOpen,
          }
        )}
      >
        <div className="flex flex-col justify-evenly pl-8 py-4 pr-4 bg-dark-2 text-green-1 h-[14vh] w-full">
          <button
            className="flex w-full justify-end z-50"
            onClick={() => setIsSidebarOpen(false)}
          >
            <Image
              src="/imgs/close.png"
              alt="close icon"
              width={14}
              height={14}
            />
          </button>
          <div className="text-green-1 font-bold">
            <p>Hola,</p>
            <p>{profileInfo.firstname} {profileInfo.lastname}</p>
          </div>
        </div>
        <aside className="flex flex-col h-full p-8 gap-4">
          {navItems.map((navItem) => (
            <ActiveLink key={navItem.path} {...navItem} />
          ))}
          <button
            className="text-black text-left"
            onClick={closeSessionAndRedirect}
          >
            Cerrar sesión
          </button>
        </aside>
      </div>
    </>
  );
};
