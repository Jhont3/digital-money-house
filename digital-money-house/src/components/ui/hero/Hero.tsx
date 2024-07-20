import Image from "next/image";

export const Hero = () => {
  return (
    <main className="relative flex flex-col justify-between md:justify-around h-full w-full min-h-[86vh] ">
      
      {/* Resposive background images */}
      <Image
        src="/imgs/bgMobile3.png"
        alt="background image women looking phone"
        width={390}
        height={780}
        className="-z-30 absolute object-cover w-full h-full md:hidden "
      />

      <Image
        src="/imgs/bgTablet3.png"
        alt="background image women looking phone"
        width={800}
        height={950}
        className="-z-40 absolute object-cover w-full h-full lg:hidden "   
      />

      <Image
        src="/imgs/bgDesktop3.png"
        alt="background image women looking phone"
        width={1440}
        height={732}
        className=" -z-50 absolute object-cover w-full h-full"   
      />

      {/* Decorative green bar */}
      <div
          className="bottom-0 w-full bg-green-1 rounded-t-2xl inline-block absolute h-2/5 -z-30 lg:h-1/5"
      />

      {/* Description text */}
      <article className="w-full p-4 mb-16 md:pl-[6%] lg:mb-0 lg:pl-[4%]">
        <p className="text-white text-2xl w-1/2 mt-8 h-1/4 font-semibold lg:w-1/3 md:text-4xl md:font-normal lg:text-5xl">
          <span className="block lg:inline-block ">De ahora</span> en adelante, hacés más con tu
          dinero
        </p>
        <span className="inline-block border-b-4 border-green-1  w-1/12 pt-5" />
        <p className="w-1/2 text-green-1 pt-4 text-xl font-normal md:text-2xl lg:text-4xl">
          Tu nueva{" "}
          <span className="font-bold inline-block">billetera virtual</span>
        </p>
      </article>

      {/* Descriptive text bubbles */}
      <article className="flex flex-col w-full p-4 gap-4 md:px-[15vw] md:pb-8 lg:pb-4 md:gap-8 lg:flex-row lg:px-[16vw]">

        <div className="rounded-3xl bg-white p-4 md:p-8 lg:w-1/2">
          <p className="text-dark-1 font-bold text-2xl md:text-3xl lg:text-4xl">Transferí dinero</p>
          <span className="inline-block border-b-4 border-green-1  w-full pt-1 " />
          <p className="md:text-lg lg:font-normal lg:text-xl">
            Desde Digital Money House vas a poder transferir dinero a otras
            cuentas, así como también recibir tranferencias y nuclear tu capital
            en nuestra billetera virtual.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-4 md:p-8 lg:w-1/2 ">
          <p className="text-dark-1 font-bold text-2xl md:text-3xl lg:text-4xl">Pago de servicios</p>
          <span className="inline-block border-b-4 border-green-1 w-full pt-1" />
          <p className="md:text-lg lg:font-normal lg:text-xl">
            Pagá mensualmente los servicios en 3 simples clicks. Fácil, rápido y
            conveniente. Olvidate de las facturas en papel
          </p>
        </div>
        
      </article>
    </main>
  );
};
