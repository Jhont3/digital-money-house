import { Footer } from "@/components";

export default function WalletLayout( {children} : { children: React.ReactNode} ){
  return (
    <>
        {children}
        <Footer/>
    </>
  )
}
