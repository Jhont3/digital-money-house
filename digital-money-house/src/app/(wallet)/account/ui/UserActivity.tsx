"use client"
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { fetchAccountData, fetchUserActivities, formatNumberToARS } from "@/utils";
import { useAccountStore } from "@/store";
import { getDayOfWeek } from '../../../../utils/getDay';
interface Activity {
    id: number;
    account_id: number;
    type: string;
    description: string;
    origin: string;
    destination: string;
    amount: number;
    dated: string;
}
interface UserActivityProps {
    itemsPerPage: number;
    showPagination: boolean;
}

export function UserActivity({ itemsPerPage, showPagination }: UserActivityProps) {
  const { accountData, setAccountInfo } = useAccountStore();
  const [ userActivities, setUserActivities ] = useState<Activity[] | null>(null);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const loadUserActivities = async () => {
      try {
        let accountId = 0
        if (accountData.id === 0) {
            const data = await fetchAccountData();
            setAccountInfo(data);
            accountId = data.accountData.id
        }

        if (accountId === 0) {
            const accountIdFromStorage = localStorage.getItem('account-id');
            if (accountIdFromStorage) {
                accountId = parseInt(accountIdFromStorage);
            }
        }

        const activities = await fetchUserActivities(accountId);
        setUserActivities(activities);
      } catch (error) {
        console.error("Error fetching user activities:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUserActivities();
  }, [accountData, setAccountInfo]);

  // Sort and paginate activities
  const paginatedActivities = useMemo(() => {
    if (!userActivities) return [];

    const sortedActivities = userActivities.toSorted((a, b) => new Date(b.dated).getTime() - new Date(a.dated).getTime());

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return sortedActivities.slice(start, end);
  }, [userActivities, currentPage, itemsPerPage]);

  // Calculate total pages
  const totalPages = useMemo(() => {
    if (!userActivities) return 0;
    return Math.ceil(userActivities.length / itemsPerPage);
  }, [userActivities, itemsPerPage]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {paginatedActivities.map((activity, i) => (
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

      {showPagination && (
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
        </div>
      )}
    </>
  );
}
