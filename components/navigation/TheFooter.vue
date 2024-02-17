<script setup lang="ts">
import type { RouteLocationRaw } from '#vue-router';
import type { NavigationItem } from '~~/types';

const color = '#ffffff';

const { globals } = useAppConfig();

const { data: navigation } = await useAsyncData('footerNav', () => {
	return useDirectus(
		readItem('navigation', 'footer', {
			fields: [
				{
					items: [
						'id',
						'title',
						'icon',
						'label',
						'type',
						'url',
						'has_children',
						{
							page: ['permalink', 'title'],
							children: [
								'id',
								'title',
								'icon',
								'label',
								'type',
								'url',
								{
									page: ['permalink', 'title'],
								},
							],
						},
					],
				},
			],
		}),
	);
});

const { data: social_links } = await useAsyncData(
	'globals',
	() => {
		return useDirectus(
			readItems('globals', {
				fields: [
					'*.*',
				],
			}),
		);
	},
	{
		transform: (data) => data.social_links,
	},
);
</script>
<template>

	<v-footer  padless :color='color'>
		<v-card flat tile class="secondary text-center"  :color='color'>
			
			<v-card-text>
				<div align="center"  class='ma-0 pa-0 my-0 py-0'>
					<nuxt-link to="/">
						<Logo  :width="276"/>
					</nuxt-link><br />
				</div>
			
				<v-btn
					v-for="link in social_links"
					:key="link.url"
					class="mx-3"
					variant="plain"
					size="large"
					:href="link.url"
					target="_blank"
				>
					<v-icon color="primary" size='large' :icon="`mdi-${link.service}`"  /> 
					
				</v-btn>
			</v-card-text>

			<v-card-text class="text-white pt-0">
				<template v-for="item in navigation?.items as NavigationItem[]" :key="item.id">
					
					<NuxtLink
						:to="getNavItemUrl(item) as RouteLocationRaw"
					>
						<v-btn color='transparent' elevation='0' text>
							<span class="mr-2 text-primary">{{item.title}}</span>
						</v-btn> 
					</NuxtLink>
				</template>
			</v-card-text>

			<v-divider></v-divider>

			<v-card-text class="text-white">
				Copyright © 1988 - {{ new Date().getFullYear() }}
					<NuxtLink href="/" class="mx-2 hover:text-primary" rel="noopener noreferrer">{{ globals.title }}.</NuxtLink>
				All rights reserved.
			</v-card-text>
		</v-card>
	</v-footer>
</template>
<style scoped>
	.v-card { 
		width: 100%;
	}
</style>