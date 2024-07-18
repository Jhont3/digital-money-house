import { Footer, Navbar } from "@/components";

export default function WalletLayout( {children} : { children: React.ReactNode} ){
  return (
    <>
        <Navbar isBgGreen={false}/>

        <div className="px-0 w-full min-h-[86vh]">
            {children}
        </div>
        
        <Footer/>
    </>
  )
}
