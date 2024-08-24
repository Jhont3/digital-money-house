
import Image from "next/image";
import { formatNumberToARS } from "@/utils";
import { useAccountStore } from "@/store";
import { getDayOfWeek } from '../../../../utils/getDay';
import { Activity, UserActivityProps } from "@/interfaces";

export function UserActivity({ itemsPerPage, showPagination, allActivities, sortedTenActivities }: UserActivityProps) {

  if (!allActivities) {
    return <div>Cargando...</div>
  }

  return (
    <>
      {allActivities.map((activity, i) => (
        <div className="flex justify-between" key={`${activity.id}${i}`}>
          <p className="flex items-center text-sm gap-2 text-dark-1 md:text-base md:gap-3">
            <span>
              <Image src="/imgs/greenCircle.png" alt="icon" width={24} height={24} className="md:w-8 md:h-8" />
            </span>
            {activity.origin === activity.destination ? 'Ingresaste dinero' : `${activity.type} a ${activity.destination}`}
          </p>
          <div className="flex flex-col">
            <span className="text-sm text-dark-2 text-end md:text-base">
              {activity.amount > 0 ? formatNumberToARS(activity.amount) : `-${formatNumberToARS(Math.abs(activity.amount))}`}
            </span>
            <span className="text-xs text-black opacity-50 text-end md:text-sm md:opacity-40">
              {getDayOfWeek(activity.dated)}
            </span>
          </div>
        </div>
      ))}

      <hr className="md:border-t md:border-transparent md:border-black" />

      {/* {showPagination && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-2 py-1 rounded text-dark-1 ${i + 1 === currentPage ? 'bg-gray-1' : ''}`}
            >
              {i + 1}
            </button>
          ))}
        </div> */}
      {/* )} */}
    </>
  );
}
