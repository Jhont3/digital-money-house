import { Footer, Navbar } from "@/components";

export default async function LoginLayout( { children }: {
  children: React.ReactNode;
} ) {

  return (
    <>
      <Navbar isBgGreen={true} onUserPage={false}/>
      <main className="w-full min-h-[86vh] bg-dark-1 flex flex-col justify-center">
        { children }
      </main>
      <Footer/>
    </>
  );
}