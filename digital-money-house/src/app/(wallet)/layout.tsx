import { Footer, Navbar } from "@/components";

export default function WalletLayout( {children} : { children: React.ReactNode} ){
  return (
    <main>
        <Navbar isBgGreen={false}/>

        <div className="px-0 sm:px-10">
            {children}
        </div>
        
        <Footer/>
    </main>
  )
}
