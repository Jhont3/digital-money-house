"use client"
import Image from "next/image";
import { formatNumberToARS, getDayOfWeek } from "@/utils";
import { UserActivityProps } from "@/interfaces";
import { useSearchParams } from "next/navigation";
import { useMemo, useState, useEffect } from "react";

export function UserActivity({ itemsPerPage, showPagination, allActivities }: UserActivityProps) {
  
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  const [filteredActivities, setFilteredActivities] = useState(allActivities || []);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Handle pagination
  const paginatedActivities = useMemo(() => {
    if (!showPagination) {
      // Show only the 10 most recent activities if pagination is not required
      return filteredActivities.toReversed().slice(0, 10);
    }

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredActivities.slice(start, end);
  }, [filteredActivities, currentPage, itemsPerPage, showPagination]);

  // Calculate total pages if pagination is enabled
  const totalPages = useMemo(() => {
    if (!showPagination) return 0;
    return Math.ceil(filteredActivities.length / itemsPerPage);
  }, [filteredActivities, itemsPerPage, showPagination]);
  
  // Filter activities based on search query
  useEffect(() => {
    try {
      if (searchQuery) {
        setFilteredActivities(allActivities?.filter(activity => 
          activity.type.toLowerCase().includes(searchQuery) || 
          activity.origin.toLowerCase().includes(searchQuery) ||
          activity.destination.toLowerCase().includes(searchQuery)
        ) || []);
      } else {
        setFilteredActivities(allActivities || []);
      }
    } catch (error) {
      console.error("Error fetching user activities:", error);
    }  finally {
      setLoading(false);
    }
  }, [searchQuery, allActivities]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (filteredActivities.length === 0) {
    return <div>No activities found</div>;
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
