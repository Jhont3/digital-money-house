"use client"
import { useFilterModalContext } from "@/context";
import { Activity } from "@/interfaces";
import { useActivitiesManagement } from "@/store";
import React, { useState } from "react";
import { DownArrow } from "../common/icons/DownArrow";
import clsx from "clsx";
import { RightArrow } from "../common/icons/RightArrow";

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

  
  const { isFilterModalOpen, setIsFilterModalOpen } = useFilterModalContext()

  const { activities, setActivities } = useActivitiesManagement();

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

  const handleClearFilters = () => {
    setActivities(allActivities);
    setSelectedFilter("");
  };

  return (
    <>
      {isFilterModalOpen && (
        <>
          <div
            onClick={(event) => event.stopPropagation()} 
            className="absolute right-0 top-16 bg-white shadow-lg rounded-lg p-4 z-50 "
            style={{ minWidth: "280px" }}
          >
            <div className="flex justify-between items-center pb-1">
              <div className="flex gap-2">
                <h3 className="font-semibold">Período</h3>
                <span className="flex items-center pt-1"><DownArrow/></span>
              </div>
              
              <button
                onClick={handleClearFilters}
                className="text-gray-500 text-sm"
              >
                Borrar filtros
              </button>
            </div>
            <hr className="md:border-t md:border-black mb-3 "/>

            <div className="space-y-2">
              {filters.map((filter) => (
                <div key={filter} className="flex justify-between items-center ">
                  <label htmlFor={filter} className={clsx({
                    "font-bold": selectedFilter === filter,
                    "opacity-50": selectedFilter !== filter
                  },"text-sm ")}>
                    {filter}
                  </label>
                  <input
                    type="radio"
                    id={filter}
                    name="filter"
                    value={filter}
                    checked={selectedFilter === filter}
                    onChange={() => handleFilterChange(filter)}
                    className={clsx({
                      "hidden": filter === "Otro período",
                    },
                      "w-4 h-4 cursor-pointer appearance-none border-[1.6px] border-dark-1 border-opacity-50 checked:bg-green-1 rounded-full relative")}
                  />
                  {filter === "Otro período" && <span className="w-4 h-4 flex justify-center items-center"><RightArrow/></span>}                                    
                </div>
              ))}
            </div>

            <button
              onClick={handleApplyFilter}
              className="mt-4 w-full bg-green-1 text-black py-2 font-bold rounded-lg md:w-36"
            >
              Aplicar
            </button>
          </div>
        </>
      )}
    </>
  );
};
