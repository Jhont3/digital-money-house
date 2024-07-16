import { Footer, Navbar } from "@/components";

export default async function NewAccountLayout( { children }: {
  children: React.ReactNode;
} ) {

  return (
    <main className="flex flex-col justify-center">
      <div>
        { children }
      </div>
      <Footer/>
    </main>
  );
}