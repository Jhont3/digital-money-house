import { digitalMoneyApi } from "@/api";

export async function fetchActivities() {
    try {
        const data = await digitalMoneyApi.get("/users")
        return data
    } catch (error) {
        console.error("Failed to do it!", error);
        throw new Error('Failed to fetch activities')
    }
}

