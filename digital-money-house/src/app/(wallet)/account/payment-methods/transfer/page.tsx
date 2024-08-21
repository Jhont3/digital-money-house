import { CvuAndAlias, Subtitle } from "@/components";

export default function TransferPage() {
    return (
        <section className="flex flex-col gap-4 md:col-span-9 md:p-12 md:py-12 lg:py-8 md:gap-5">
            <Subtitle text="Cargar dinero"/>

            <CvuAndAlias/>
        </section>
    )
}
