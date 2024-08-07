"use client";
import {getAccountInfo} from "@/api/digitalMoneyApi";
import {useState, useEffect} from "react";

export default function ActualCash() {
	const [accountInfo, setAccountInfo] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchAccountInfo = async () => {
			try {
				const data = await getAccountInfo();
				console.log("data", data);
				setAccountInfo(data);
			} catch (error) {
				console.error("Error fetching account info:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchAccountInfo();
	}, []);

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<p className="text-white py-2 font-bold text-2xl md:text-4xl">
			<span className="rounded-full border border-green-1 py-2 px-4 md:pr-6 md:pl-4 md:border-2">
				{accountInfo?.available_amount || "No data available"}
			</span>
		</p>
	);
}
