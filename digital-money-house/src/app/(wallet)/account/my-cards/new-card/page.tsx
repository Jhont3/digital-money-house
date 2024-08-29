import { cookies } from "next/headers";
import { CreateCardForm } from "./ui/CreateCardForm";
import { getAccountInfo, getCards } from "@/services";

export default async function NewCardPage() {

  const token = cookies().get('authToken')?.value || '';
	const accountInfo = await getAccountInfo(token);
  const cardsUser = await getCards(accountInfo.id, token);

  return (
    <CreateCardForm accountID={accountInfo.id} cardsUser={cardsUser} />
  )
}
