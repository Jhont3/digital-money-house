import { cookies } from "next/headers";
import { CreateCardForm } from "./ui/CreateCardForm";
import { getAccountInfo } from "@/services";

export default async function NewCardPage() {

  const token = cookies().get('authToken')?.value || '';
	const accountInfo = await getAccountInfo(token);

  return (
    <CreateCardForm AccountID={accountInfo.id} />
  )
}
