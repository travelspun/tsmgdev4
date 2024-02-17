import { defineStore } from 'pinia'

export interface GlobalState {
	social_links: object;
}

export const useGlobalStore = defineStore('globals', {
	state: (): GlobalState => ({
		social_links: {},
	}),
});


