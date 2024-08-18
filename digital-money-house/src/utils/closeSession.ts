import { digitalMoneyApi } from "@/api";
import { deleteCookie } from "cookies-next";

export function logOut() {
    digitalMoneyApi.post("/logout")
    localStorage.clear();
    deleteCookie('userData');
}
