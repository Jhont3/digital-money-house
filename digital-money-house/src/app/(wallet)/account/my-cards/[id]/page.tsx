import { redirect } from "next/navigation";

interface Props {
    params: {
      id: string;
    };
}

export default async function CardByIdPage({ params }: Props) {

    const { id } = params;

    if (id != "1") {
        redirect("/auth/login");
    }

    return (
        <>
            <h1>Hola mundo</h1>
        </>
    )
}