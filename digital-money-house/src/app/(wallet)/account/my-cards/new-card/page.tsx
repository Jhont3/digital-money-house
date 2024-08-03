  "use client"
  import clsx from "clsx";
  import Image from "next/image";
  import { useRouter } from "next/navigation";
  import { useEffect } from "react";
  import { SubmitHandler, useForm, useWatch } from 'react-hook-form';

  type Inputs = {
      fullCardNumber: string;
      firstAndSecondName: string;
      expirationDate: string;
      securityCode: string;
  };

  const inicialForm = {
    fullCardNumber: "",
    firstAndSecondName: "",
    expirationDate: "",
    securityCode: "",
  }

  export default function NewCardPage() {

    const { register, handleSubmit, reset, formState: { errors}, setError, control  } = 
    useForm<Inputs>( {defaultValues: inicialForm, mode: 'onChange', } );
    
    const hasErrors = Object.values(errors).some(error => error);
    const router = useRouter();

    const firstAndSecondName = useWatch({ control, name: 'firstAndSecondName' });
    const expirationDate = useWatch({ control, name: 'expirationDate' });
    const fullCardNumber = useWatch({ control, name: 'fullCardNumber' });

    useEffect(() => {
      setError('fullCardNumber', { type: 'manual', message: 'Initial error message' });
      setError('expirationDate', { type: 'manual', message: 'Initial error message' });
      setError('firstAndSecondName', { type: 'manual', message: 'Initial error message' });
      setError('securityCode', { type: 'manual', message: 'Initial error message' });
    }, []);

    const onSubmit: SubmitHandler<Inputs> = async (data)  => {
      // console.log(data, "1 - data");
      try {
  
        if (hasErrors) return;
    
        const response = await fetch('https://digitalmoney.digitalhouse.com/api/accounts/accountId/cards', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
              cod: Number(data.securityCode),
              expiration_date: data.expirationDate,
              first_last_name: data.firstAndSecondName,
              number_id: Number(data.fullCardNumber),
          })
        });
        
  
        if (!response.ok) {
          throw new Error('Login failed');
        }
        const responseData  = await response.json();
  
        console.log(data);
        console.log(responseData, "respuesta");
  
        reset()
        router.push(`/account/my-cards/`);
  
      } catch (error) {
        console.error('Error adding a card:', error);
      }
      console.log("final")
      reset()

    }

    const getCardNumberDisplay = () => {
        if (fullCardNumber) {
            const parts = fullCardNumber.match(/.{1,4}/g) || [];
            return (
                <div className={clsx({
                  'text-white': !hasErrors,
                  'opacity-100': !hasErrors,
                  'opacity-50': hasErrors,
                }, "flex justify-between text-[18px] z-20")}
                >
                    {parts.map((part, index) => (
                        <p key={index} className="flex-1">{part}</p>
                    ))}
                </div>
            );
        }
        return (
            <div className="flex justify-between text-[18px] z-20 opacity-50">
                <p>****</p>
                <p>****</p>
                <p>****</p>
                <p>****</p>
            </div>
        );
    };
    

    return (
      <section className="flex flex-col gap-4 md:col-span-9 md:p-12 md:py-12 lg:py-8 md:gap-5">
          {/* Title */}
          <div className="flex md:hidden">
            <span className="flex items-center">
                <Image src="/imgs/greyArrow.png" alt="icon" width={12} height={12}/>
            </span> &nbsp;
            <h2 ><span className="underline decoration-1 decoration-[rgba(0,0,0,0.50)] text-base text-dark-1 font-semibold">Tarjetas</span></h2>
          </div>

          <article className="bg-white p-5 rounded-lg flex flex-col justify-center items-center gap-4 md:p-8 md:py-10">
            {/* Visual info data of the card */}
            <div className={ clsx({
                'bg-gray-1': hasErrors,
                'bg-black': !hasErrors,
                'text-white': !hasErrors,
              }, "relative flex flex-col justify-end p-4 pb-8 gap-2 w-[301px] h-[174px] rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)] mb-3"
            )}>
              {hasErrors && 
                <span className="absolute bottom-0 left-0">
                  <Image src="/imgs/cardBg.png" alt="card background" width={252} height={113}/>
                </span>
              }

              {hasErrors ?
                <span className="absolute text-lg bg-gray-2 w-[43px] h-[32px] rounded-md right-4 top-4 transition"></span>
              : <span className="absolute text-lg rounded-md right-4 top-4 transition">
                  <Image src="/imgs/logoVisa.png" alt="icon" width={78} height={43}/>
                </span>}
        
              {getCardNumberDisplay()}

              <div className={clsx({
                'opacity-100': !hasErrors,
                'opacity-50': hasErrors,
              }, "flex justify-between z-10 text-sm")}>
                  <p>{firstAndSecondName || 'NOMBRE DEL TITULAR'}</p>
                  <p>{expirationDate || 'MM/YY'}</p>
              </div>
            </div>

            {/* form card area */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-6 items-center md:gap-4 lg:gap-6">
                <div className="flex flex-col gap-6 min-w-[300px] md:min-w-[360px] md:gap-4 lg:flex-row lg:gap-6">
                  <input                                                                            
                      id="fullCardNumber"
                      {...register("fullCardNumber", {required: true, pattern: { value: /^[+]?(\d.*){6,}$/, message: "El teléfono debe contener al menos 6 números" }})}
                      className="p-4 border-[1.6px] outline-none focus:border-select-1 text-black opacity-50 w-full rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.10)]
                                  xl:w-[360px] md:min-h-16"
                      placeholder="Número de la tarjeta*"
                      autoComplete="fullCardNumber"                            
                  />

                  <input
                      id="firstAndSecondName"
                      type="text"
                      {...register("firstAndSecondName", { required: true, pattern: { value: /^[+]?(\d.*){6,}$/, message: "El teléfono debe contener al menos 6 números" }})}
                      className="p-4 border-[1.6px] outline-none focus:border-select-1 text-black opacity-50 w-full rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.10)]
                                  xl:w-[360px] md:min-h-16"
                      placeholder="Nombre y apellido*"
                      autoComplete="firstAndSecondName"
                  />
              </div>

              <div className="flex flex-col gap-6 min-w-[300px] md:gap-4 md:flex-row md:max-w-[360px] lg:max-w-full lg:gap-6">
                  <input
                      id="expirationDate"
                      type="text"
                      {...register("expirationDate", { required: true, pattern: { value: /^[+]?(\d.*){6,}$/, message: "El teléfono debe contener al menos 6 números" }})}
                      className="p-4 border-[1.6px] outline-none focus:border-select-1 text-black opacity-50 w-full rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.10)] 
                      md:placeholder:whitespace-normal md:placeholder:break-words md:min-h-16 md:pt-0 lg:whitespace-nowrap lg:p-4 xl:w-[360px]"
                      placeholder="Fecha de vencimiento*"
                      autoComplete="expirationDate"
                  />

                  <input
                      id="securityCode"
                      type="text"
                      {...register("securityCode", { required: true, pattern: { value: /^[+]?(\d.*){6,}$/, message: "El teléfono debe contener al menos 6 números" }})}
                      className="p-4 border-[1.6px] outline-none focus:border-select-1 text-black opacity-50 w-full rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.10)] 
                      md:placeholder:whitespace-normal md:placeholder:break-words md:min-h-16 md:pt-0 lg:whitespace-nowrap lg:p-4 xl:w-[360px]"
                      placeholder="Código de seguridad*"
                      autoComplete="securityCode"
                  />
              </div>

              <button
                type="submit"
                className={ clsx({
                  'bg-button-1': hasErrors,
                  'bg-green-1': !hasErrors
              }," transition text-black text-sm font-bold rounded-xl p-3 my-3  min-w-[300px] md:min-w-[360px]")}
              >
                  Continuar
              </button>
          </form>

          </article>
      </section>
    )
  }
