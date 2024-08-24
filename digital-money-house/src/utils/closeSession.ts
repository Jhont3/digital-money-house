
import { deleteCookie } from "cookies-next";

export function logOut() {
    localStorage.clear();
    deleteCookie('userData');
    deleteCookie("authToken");
}
