"use client"
import { useFilterModalContext } from "@/context";
import { Activity } from "@/interfaces";
import { useActivitiesManagement } from "@/store";
import clsx from "clsx";
import React, { useState } from "react";

interface FilterModalProps {
  allActivities: Activity[];
}

export const FilterModalActivities = ({ allActivities }: FilterModalProps) => {
  const [ selectedFilter, setSelectedFilter ] = useState<string>("");

  const filters = [
    "Hoy",
    "Ayer",
    "Última semana",
    "Últimos 15 días",
    "Último mes",
    "Último año",
    "Otro período",
  ];

  
  const {isFilterModalOpen,setIsFilterModalOpen} = useFilterModalContext()
  console.log(isFilterModalOpen);

  const { activities, setActivities } = useActivitiesManagement();
  console.log(activities);

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const handleApplyFilter = () => {
    const today = new Date();
    const filteredActivities = allActivities.filter((activity) => {
      const activityDate = new Date(activity.dated);

      switch (selectedFilter) {
        case "Hoy":
          return (
            activityDate.getFullYear() === today.getFullYear() &&
            activityDate.getMonth() === today.getMonth() &&
            activityDate.getDate() === today.getDate()
          );

        case "Ayer":
          const yesterday = new Date(today);
          yesterday.setDate(today.getDate() - 1);
          return (
            activityDate.getFullYear() === yesterday.getFullYear() &&
            activityDate.getMonth() === yesterday.getMonth() &&
            activityDate.getDate() === yesterday.getDate()
          );

        case "Última semana":
          const oneWeekAgo = new Date(today);
          oneWeekAgo.setDate(today.getDate() - 7);
          return activityDate >= oneWeekAgo && activityDate <= today;

        case "Últimos 15 días":
          const fifteenDaysAgo = new Date(today);
          fifteenDaysAgo.setDate(today.getDate() - 15);
          return activityDate >= fifteenDaysAgo && activityDate <= today;

        case "Último mes":
          const oneMonthAgo = new Date(today);
          oneMonthAgo.setMonth(today.getMonth() - 1);
          return activityDate >= oneMonthAgo && activityDate <= today;

        case "Último año":
          const oneYearAgo = new Date(today);
          oneYearAgo.setFullYear(today.getFullYear() - 1);
          return activityDate >= oneYearAgo && activityDate <= today;

        case "Otro período":
          return true;

        default:
          return true;
      }
    });

    setActivities(filteredActivities);
  };

  return (
    <>
      {isFilterModalOpen && (
        <>
          {/* Contenido del modal */}
          <div
            onClick={(event) => event.stopPropagation()} // <-- Detén la propagación del evento de clic
            className="absolute right-0 top-16 bg-white shadow-lg rounded-lg p-4 z-50"
            style={{ minWidth: "280px" }}
          >
            <div className="flex justify-between items-center pb-3">
              <h3 className="font-semibold">Período</h3>
              <hr />
              <button
                onClick={() => setActivities(allActivities)}
                className="text-gray-500 text-sm"
              >
                Borrar filtros
              </button>
            </div>

            <div className="space-y-2">
              {filters.map((filter) => (
                <div key={filter} className="flex justify-between items-center">
                  <label htmlFor={filter} className="text-sm">
                    {filter}
                  </label>
                  <input
                    type="radio"
                    id={filter}
                    name="filter"
                    value={filter}
                    checked={selectedFilter === filter}
                    onChange={() => handleFilterChange(filter)}
                    className="w-[18px] h-[18px] cursor-pointer appearance-none border-[1.6px] border-dark-1 checked:bg-green-1 
                      rounded-full"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={handleApplyFilter}
              className="mt-4 w-full bg-lime-500 text-white py-2 rounded"
            >
              Aplicar
            </button>
          </div>
        </>
      )}
    </>
  );
};
