import { httpGetServices } from "./common/http";

export async function getServices( revalidateTag = "", options = {} ): Promise<any> {
	return httpGetServices(`/service`, {
		headers: {
			"Content-Type": "application/json",
		},
		...options,
	})
		.then((data) => data as any)
		.catch((error) => {
			console.log(error);
			throw error;
		});
}
