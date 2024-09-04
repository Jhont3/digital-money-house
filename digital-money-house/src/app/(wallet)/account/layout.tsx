import { Navbar, SideMenu, TopSidebar } from "@/components";
import { getAccountInfo, getUserInfo } from "@/services";
import { cookies } from "next/headers";

export default async function WalletLayout( {children} : { children: React.ReactNode} ){

  const token = cookies().get('authToken')?.value || '';
	const accountInfo = await getAccountInfo(token);
  const profileInfo = await getUserInfo(accountInfo.user_id, token);

  return (
    <>  
        <Navbar isBgGreen={false} onUserPage={true} />
        <main className={"p-4 min-h-[86vh] bg-gray-1 md:p-0 md:grid md:grid-cols-12 md:gap-0 "}>
          <TopSidebar profileInfo={profileInfo}/>
          <SideMenu/>
          {children}
        </main>
    </>
  )
}
