import { useSideBarContext } from "@/context";
import Image from "next/image";

export const TopSidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSideBarContext();

  return (
    <>
      {isSidebarOpen && (
        <div className="flex flex-col p-[3vh] pb-[7vh] bg-dark-2 text-green-1 h-[14vh] w-full absolute z-40 ">
          
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
      )}
    </>
  );
};
