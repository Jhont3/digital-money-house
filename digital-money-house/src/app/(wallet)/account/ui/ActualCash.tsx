import { formatNumberToARS } from "@/utils";

export default function ActualCash({amount}:any) {

  return (
    <p className="text-white py-2 font-bold text-2xl md:text-4xl">
      <span className="rounded-full border border-green-1 py-2 px-4 md:pr-6 md:pl-4 md:border-2">
        {formatNumberToARS(amount)  || "No data available"}
      </span>
    </p>
  );
}
