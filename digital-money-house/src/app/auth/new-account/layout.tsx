import { Footer, Navbar } from "@/components";

export default async function NewAccountLayout( { children }: {
  children: React.ReactNode;
} ) {

  return (
    <>
      { children } 
      <Footer/>
    </>
  );
}