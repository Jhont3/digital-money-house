import { Footer, Navbar } from "@/components";

export default async function LoginLayout( { children }: {
  children: React.ReactNode;
} ) {

  return (
    <main className="flex flex-col justify-center">
      <Navbar isBgGreen={true}/>

      <div className="w-full min-h-[86vh] bg-dark-1 flex flex-col justify-center">
        { children }
      </div>

      <Footer/>
    </main>
  );
}