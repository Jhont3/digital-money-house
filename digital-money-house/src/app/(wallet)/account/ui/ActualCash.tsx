"use client";
import { getAccountInfo } from "@/api";
import { useAccountStore } from "@/store";
import { formatNumberToARS } from "@/utils";
import { useState, useEffect } from "react";

export default function ActualCash() {
  const { accountData, setAccountInfo } = useAccountStore();
  console.log(accountData, "accountData outside actualcash");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccountInfo = async () => {
      if (accountData.id === 0 ) {
        try {
          const data = await getAccountInfo();
          setAccountInfo(data);
        } catch (error) {
          console.error("Error fetching account info:", error);
        }
      }
      setLoading(false);
    };

    fetchAccountInfo();
  }, [accountData, setAccountInfo]);

  if (loading) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <p className="text-white py-2 font-bold text-2xl md:text-4xl">
      <span className="rounded-full border border-green-1 py-2 px-4 md:pr-6 md:pl-4 md:border-2">
        {formatNumberToARS(accountData.available_amount)  || "No data available"}
      </span>
    </p>
  );
}
