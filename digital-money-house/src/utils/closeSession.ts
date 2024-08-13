import { digitalMoneyApi } from "@/api";

export function logOut() {
    digitalMoneyApi.post("/logout")
    localStorage.clear();
}
