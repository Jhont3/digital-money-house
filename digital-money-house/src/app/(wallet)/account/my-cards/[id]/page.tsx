"use client"
import clsx from "clsx";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import {  useState } from "react";
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';

interface Props {
    params: {
      id: string;
    };
}

type Inputs = {
    fullCardNumber: string;
    firstAndSecondName: string;
    expirationDate: string;
    securityCode: string;
};

export default function CardByIdPage({ params }: Props) {

    const { id } = params;
    if (id != "1") {redirect("/auth/login")}

    const [cardNumber, setCardNumber] = useState('');

    const { register, handleSubmit, reset, setValue, formState: { errors }, control  } = useForm<Inputs>();
    const hasErrors = Object.values(errors).some(error => error);
    const router = useRouter();

    const firstAndSecondName = useWatch({ control, name: 'firstAndSecondName' });
    const expirationDate = useWatch({ control, name: 'expirationDate' });

    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const formattedValue = value.replace(/[^0-9\s]/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
        setCardNumber(formattedValue);
        setValue("fullCardNumber", formattedValue);
    };

    const onSubmit: SubmitHandler<Inputs> = async (data)  => {
        console.log(data, "1");
        try {
    
          if (hasErrors) return;
            
        //   TODO add user id
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
          // localStorage.setItem("token", responseData?.token);
    
          reset()
          setCardNumber('')          
          router.push(`/auth/account`);
    
        } catch (error) {
          console.error('Error adding a card:', error);
        }
        console.log("final")
        reset()
        setCardNumber('')  
      }


    const getCardNumberDisplay = () => {
        if (cardNumber) {
          const parts = cardNumber.split(' ');
          return (
            <div className="flex justify-between text-[18px] z-20 opacity-50">
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
              <div className="relative flex flex-col justify-end p-4 pb-8 gap-2 w-[301px] h-[174px] rounded-lg bg-gray-1 shadow-[0_4px_4px_rgba(0,0,0,0.25)] mb-3">
                  <span className="absolute bottom-0 left-0">
                    <Image src="/imgs/cardBg.png" alt="card background" width={252} height={113}/>
                  </span>

                  <span className="absolute text-lg bg-gray-2 w-[43px] h-[32px] rounded-md right-4 top-4"></span>

            
                  {getCardNumberDisplay()}

                  <div className="flex justify-between z-10 text-sm opacity-50">
                      <p>{firstAndSecondName || 'NOMBRE DEL TITULAR'}</p>
                      <p>{expirationDate || 'MM/YY'}</p>
                  </div>
              </div>

              {/* TODO: Add validations with pattern, change color of BG button and Visa image according to validations. */}

              {/* form card area */}
              <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-6">
                  <div className="flex flex-col gap-6">
                      <input                                                                            
                          value={cardNumber}
                          onChange={handleCardNumberChange}
                          className="p-4 border-[1.6px] outline-none focus:border-select-1 text-black opacity-50 w-full rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.10)]"
                          placeholder="Número de la tarjeta*"
                          autoComplete="textToSearch"
                      />

                      <input
                          id="firstAndSecondName"
                          type="text"
                          {...register("firstAndSecondName", { required: true, minLength: 2, maxLength: 25 })}
                          className="p-4 border-[1.6px] outline-none focus:border-select-1 text-black opacity-50 w-full rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.10)]"
                          placeholder="Nombre y apellido*"
                          autoComplete="firstAndSecondName"
                      />
                  </div>

                  <div className="flex flex-col gap-6">
                      <input
                          id="expirationDate"
                          type="text"
                          {...register("expirationDate", { required: true, minLength: 4 })}
                          className="p-4 border-[1.6px] outline-none focus:border-select-1 text-black opacity-50 w-full rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.10)]"
                          placeholder="Fecha de vencimiento*"
                          autoComplete="expirationDate"
                      />

                      <input
                          id="securityCode"
                          type="text"
                          {...register("securityCode", { required: true, minLength: 4, maxLength: 4 })}
                          className="p-4 border-[1.6px] outline-none focus:border-select-1 text-black opacity-50 w-full rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.10)]"
                          placeholder="Código de seguridad*"
                          autoComplete="securityCode"
                      />
                  </div>
                  <button
                    type="submit"
                    className="bg-button-1 text-black text-sm font-bold rounded-xl p-3 my-3 w-full"
                  >
                      Continuar
                  </button>
              </form>

          </article>
      </section>
    )
}
