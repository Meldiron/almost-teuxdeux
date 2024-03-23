import { account } from '$lib/appwrite';
import type { LayoutLoad } from './$types';

export const ssr = false;

export const load: LayoutLoad = async () => {
	try {
		const user = await account.get();
		return {
			user
		};
	} catch (err) {
		return {
			user: null
		};
	}
};
