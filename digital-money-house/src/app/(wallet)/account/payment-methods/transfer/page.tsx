import { CvuAndAlias, Subtitle } from "@/components";
import { getAccountInfo } from "@/services";
import { cookies } from "next/headers";

export default async function TransferPage() {
    const token = cookies().get('authToken')?.value || '';
    const accountInfo = await getAccountInfo(token);

    return (
        <section className="flex flex-col gap-4 md:col-span-9 md:p-12 md:py-12 lg:py-8 md:gap-5">
            <Subtitle text="Cargar dinero"/>

            <CvuAndAlias accountInfo={accountInfo}/>
        </section>
    )
}
