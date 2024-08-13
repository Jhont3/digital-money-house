"use client"
import { useEffect, useState } from "react";

import Image from "next/image";
import { fetchAccountData, fetchUserActivities, formatNumberToARS } from "@/utils";
import { useAccountStore } from "@/store";
import { getDayOfWeek } from '../../../../utils/getDay';

export function UserActivity() {
    const { accountData, setAccountInfo } = useAccountStore();
    const [userActivities, setUserActivities] = useState(null);
	const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUserActivities = async () => {
            try {
                if (accountData.id === 0) {
                    try {
                    const data = await fetchAccountData()
                      setAccountInfo(data);
                    } catch (error) {
                      console.error("Error fetching account info:", error);
                    }
                }
                const activities = await fetchUserActivities(accountData.id);
                console.log(activities,"activities here")
                setUserActivities(activities);
            } catch (error) {
                console.error("Error fetching user activities:", error);
            } finally {
                setLoading(false);
            }
        };

        loadUserActivities();
	}, [accountData, setAccountInfo]);

	if (loading) {
		return <p className="">Loading...</p>;
	}

    return (        
        <>
            {userActivities && userActivities.map(activity => (
                <>
                <div className="flex justify-between" key={activity.id}>
                    <p className="flex items-center text-sm gap-2 text-dark-1 md:text-base md:gap-3">        
                        <span className="">
                            <Image src="/imgs/greenCircle.png" alt="icon" width={24} height={24} className="md:w-8 md:h-8"/>
                        </span>
                        {activity.origen === activity.destination ? 'Ingresaste dinero' : `${activity.type} a ${activity.destination}`}
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
                <hr className="md:border-t md:border-transparent md:border-black"/>        
                </>
            ))}
        </>
    );
}
