"use client"
import { CreditCard } from '@/components';
import { PayServiceButton } from './ui/PayServiceButton';

export function Step3PayService({cardsUser, accountInfo}: any) {

    return (
        <>
            <div className="bg-dark-1 rounded-lg px-5 py-4 md:px-14 md:py-12 flex flex-col gap-3 ">
                <div className='flex justify-end md:hidden '>
                    <span className='text-white font-semibold text-xs underline'>Ver detalles del pago</span>
                </div>
                <div className='md:flex md:justify-between items-center'>
                    <h2 className="font-bold text-xl text-green-1 pb-4 md:p-0 md:text-2xl">
                        Cablevisión
                    </h2>
                    <span className='hidden md:inline-block text-white font-semibold text-xs underline'>Ver detalles del pago</span>
                </div>
                <hr className="border-t border-gray-[#cecece]] py-2"/>
                <div className='text-white font-bold flex justify-between'>
                    <span >Total a pagar</span>
                    <span >1.153,75</span>
                </div>
            </div>

            <article className="bg-white p-5 rounded-lg flex flex-col gap-4 md:p-8 md:py-10">       
                <p className="text-dark-1 font-bold">Tus tarjetas</p>
                <hr className="md:border-t  md:border-black"/>

                <CreditCard cardsUser={cardsUser} accountId={accountInfo.id} onSelectCardPg/>
            </article>

            <PayServiceButton accountId={accountInfo.id} />
        </>
    );
}
