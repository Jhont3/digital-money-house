import { CvuAndAlias, ProfileForm, Subtitle } from "@/components";
import ArrowIcon from "@/components/ui/svg/ArrowIcon";
import { getAccountInfo, getUserInfo } from "@/services";
import { errorAlert, successAlert } from "@/utils";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function ProfilePage() {

    const token = cookies().get('authToken')?.value || '';
    const accountInfo = await getAccountInfo(token);
	const profileInfo = await getUserInfo(accountInfo.user_id, token);

    return(
        <section className="flex flex-col gap-4 md:col-span-9 md:p-12 md:py-12 lg:py-8 md:gap-5">

            <Subtitle text="Perfil"/>

            <ProfileForm profileInfo={profileInfo} token={token}/>

            <Link href={'/account/payment-methods'} className="flex justify-between items-center bg-green-1 text-center p-4 rounded-lg font-bold drop-shadow-md md:min-h-28 md:text-xl">
                Gestioná los medios de pago 
                <span className="flex items-center md:justify-end">
                    <ArrowIcon/>
                </span> 
            </Link>

            <CvuAndAlias/>
        </section>
    )
}
