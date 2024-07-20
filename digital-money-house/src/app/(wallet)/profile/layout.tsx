import { Footer, Navbar } from "@/components";

export default function WalletLayout( {children} : { children: React.ReactNode} ){
  return (
    <>  
        <Navbar isBgGreen={false} onUserPage={true} />
        <main className="min-h-[86vh] bg-gray-1 flex flex-col p-4 gap-4">
          {children}
        </main>
    </>
  )
}
