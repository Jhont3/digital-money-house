import { getAccountInfo } from "@/api";

export const Footer = async () => {

  const accountInfo = await getAccountInfo();
  console.log(accountInfo, "account info en footer")

  return (
    <footer className="h-[7vh] bg-dark-2 text-green-1 flex justify-center items-center text-sm md:justify-start md:pl-3">
      © 2024 Digital Money House
      {accountInfo.id}
    </footer>
  );
};
