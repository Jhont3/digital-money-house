"use client"

import clsx from "clsx"

export function Step1Amount( {handleAmountSubmit, onChangeInput, amount, isValidAmount}: any ) {

    return (
        <>
            <div className="bg-dark-1 rounded-lg px-5 py-4 md:px-14 md:py-12">
                <h2 className="font-bold text-xl text-green-1 pb-4 md:text-2xl md:pb-6">
                    ¿Cuánto querés ingresar a la cuenta?
                </h2>
        
                <form >
                    <input
                    id="amount"
                    type="text"
                    name="amount"
                    value={amount}
                    onChange={onChangeInput}
                    className={"text-black border-[1.6px] outline-none border-gray-1 focus:border-select-1 focus:ring-0 text-base w-full py-3 px-4 rounded-lg xl:w-[360px]"}
                    placeholder="Ingresa una cantidad"
                    autoComplete="off"
                    />
                </form>

                <div className="xl:flex xl:justify-end">
                    <button
                        onClick={()=>handleAmountSubmit(amount)}
                        disabled={!isValidAmount}
                        className= {clsx({                
                            "bg-[#cecece]": !isValidAmount,
                            "bg-green-1": isValidAmount,
                        },
                        "mt-6 text-dark-1 font-bold py-2 px-4 rounded-lg hidden md:block w-full h-16 xl:w-60 shadow-[0_4px_4px_rgba(0,0,0,0.10)]")}             
                        >
                        Continuar
                    </button>
                </div>
            </div>
          
            <button
                onClick={()=>handleAmountSubmit(amount)}
                disabled={!isValidAmount}
                className= {clsx({                
                    "bg-[#cecece]": !isValidAmount,
                    "bg-green-1": isValidAmount,
                },
                "md:mt-4 text-dark-1 font-bold py-2 px-4 rounded-lg block md:hidden shadow-[0_4px_4px_rgba(0,0,0,0.10)]")}             
                >
                Continuar
            </button>
        </>
    )
}
