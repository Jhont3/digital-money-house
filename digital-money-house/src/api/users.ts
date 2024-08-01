import digitalMoneyApi from "./digitalMoneyApi";

export async function createUser( newUser: {} ) {
    try {
        const response = await digitalMoneyApi.post("/api/users", newUser);
        return response.data;
    } catch (error) {
        console.error("Failed to do it!", error);
        throw new Error('Failed to create an user');
    }
}

export async function getUser( userID: number ) {
    try {
        const response = await digitalMoneyApi.get("/api/users/" + userID);
        return response.data;
    } catch (error) {
        console.error("Failed to do it!", error);
        throw new Error('Failed to get user data');
    }
}

export async function updateUser(userID: number) {
    try {
        const response = await digitalMoneyApi.patch("/api/users/" + userID);
        return response.data;
    } catch (error) {
        console.error("Failed to do it!", error);
        throw new Error('Failed to update user data');
    }
}
