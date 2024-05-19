import { Footer, Navbar } from "@/components";

export default async function AuthLayout( { children }: {
  children: React.ReactNode;
} ) {

  return (
    <main className="flex flex-col justify-center ">
      <Navbar isBgGreen={true}/>

      <div className="w-full sm:w-[350px] px-10 min-h-[86vh] bg-dark-1">
        { children }
      </div>

      <Footer/>
    </main>
  );
}