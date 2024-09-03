import { Subtitle } from "@/components";
import { UserActivity } from "../ui/UserActivity";
import { SearchForm } from "../ui";
import { cookies } from "next/headers";
import { getAccountInfo, getActivity } from "@/services";
import { ActivityTittleFilter } from "@/components";

export default async function MyActivityPage() {

    const token = cookies().get('authToken')?.value || '';
	const accountInfo = await getAccountInfo(token);
	const activities = await getActivity(accountInfo.id, token);

    return (
    <section className="flex flex-col gap-4 md:col-span-9 md:p-12 md:py-12 lg:py-8 md:gap-5">

        <Subtitle text="Tu actividad"/>

        <SearchForm allActivities={activities} onDashboard/>

        <article className="bg-white p-4 rounded-lg flex flex-col gap-4 shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:p-8 md:py-10">

            <ActivityTittleFilter/>

            <hr className="md:border-t md:border-black"/>

            <UserActivity itemsPerPage={10} showPagination allActivities={activities}/>

        </article>
     
    </section>
    )
}