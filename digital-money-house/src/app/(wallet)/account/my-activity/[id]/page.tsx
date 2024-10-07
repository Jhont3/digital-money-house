import { getAccountInfo, getTransactionById } from '@/services';
import { cookies } from 'next/headers';
import React from 'react'

interface Props {
  params: { id: string; };
}

const activityTypeMap: { [key: string]: string } = {
  'Deposit': 'Depósito',
  'Transaction': 'Transacción',
};

const activityOriginDestMap: { [key: string]: string } = {
  'My account': 'Mi cuenta',
};

export default async function ActivityByIdPage({ params }: Props) {

  const { id } = params;

  const token = cookies().get('authToken')?.value || '';
  const accountInfo = await getAccountInfo(token);
  const activity = await getTransactionById(accountInfo.id, token, Number(id));

  console.log(activity, "Activity");

  return (
    <section className="flex flex-col gap-4 md:col-span-9 md:p-12 md:py-12 lg:py-8 ">

      <h2 className="text-2xl font-bold">Información de la actividad:</h2>
      <hr className="border-t border-black mb-2"/>
      
      <table className="min-w-full bg-white border border-gray-200">
        <tbody>
          <tr className="bg-zinc-50">
            <td className="px-4 py-2 font-bold border">ID:</td>
            <td className="px-4 py-2 border">{activity.id}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-bold border">Tipo:</td>
            <td className="px-4 py-2 border">{activityTypeMap[activity.type] || activity.type}</td>
          </tr>
          <tr className="bg-zinc-50">
            <td className="px-4 py-2 font-bold border">Descripción:</td>
            <td className="px-4 py-2 border">{activity.description}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-bold border">Valor:</td>
            <td className="px-4 py-2 border">${activity.amount}</td>
          </tr>
          <tr className="bg-zinc-50">
            <td className="px-4 py-2 font-bold border">Fecha:</td>
            <td className="px-4 py-2 border">{new Date(activity.dated).toLocaleString()}</td>
          </tr>

          {activity.type === 'Deposit' && (
            <>
              <tr>
                <td className="px-4 py-2 font-bold border">Origen:</td>
                <td className="px-4 py-2 border">{activityOriginDestMap[activity.origin] || activity.origin}</td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="px-4 py-2 font-bold border">Destino:</td>
                <td className="px-4 py-2 border">{activityOriginDestMap[activity.destination] || activity.destination}</td>
              </tr>
            </>
          )}

        </tbody>
      </table>
    </section>
  )
}
