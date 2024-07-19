import { Hero, Navbar } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar isBgGreen={false} onUserPage={false}/>
      
        <Hero/>
     
    </>
  );
}
