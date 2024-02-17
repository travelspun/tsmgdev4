<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import type { RouteLocationRaw } from '#vue-router';
import type { NavigationItem } from '~~/types';

const route = useRoute();

const props = defineProps<{
	item: NavigationItem;
}>();

const popover: Ref<any> = ref(null);

// If route changes close the menu
watch(
	() => route.path,
	() => {
		return popover.value?.();
	},
);
</script>
<template>
	<NuxtLink
		v-if="!item.has_children"
		:href="getNavItemUrl(item) as RouteLocationRaw"
		class=""
		exact-active-class=""
		:target="item.open_in_new_tab ? '_blank' : '_self'"
	>
		<v-btn
			flat 
			color='primary' 
		> 
			<span class="mr-2">{{ item.title }}</span>
		</v-btn>
	</NuxtLink>
	<v-menu
		v-else
		open-on-hover
	>
		<template v-slot:activator="{ props }">
			<NuxtLink
				:href="getNavItemUrl(item) as RouteLocationRaw"
				class=""
				exact-active-class=""
				:target="item.open_in_new_tab ? '_blank' : '_self'"
			>
				<v-btn 
					v-bind="props"
					color='primary' 
				> 
					<span class="mr-2">{{ item.title }}</span>
				</v-btn>
			</NuxtLink>
		</template>

		<v-list>
			<template 
				v-for="childItem in item.children as NavigationItem[]"
				:key="index">
				
				<v-list-item  >
					<NuxtLink
						:key="childItem.id"
						:href="getNavItemUrl(childItem) as RouteLocationRaw"
						class=""
					>
						<v-btn 
							variant="text"
							color='primary' 
						> 
							<span class="mr-2">{{ childItem.title }}</span>
						</v-btn>
					</NuxtLink>  
				</v-list-item>
			</template>
			
		</v-list>
	</v-menu>
	<!-- <NuxtLink
		v-if="!item.has_children"
		:href="getNavItemUrl(item) as RouteLocationRaw"
		class="menu-link"
		exact-active-class="bg-gray-700"
		:target="item.open_in_new_tab ? '_blank' : '_self'"
	>
		{{ item.title }}
	</NuxtLink> -->

</template>

<style lang="postcss">
.menu-link {
	@apply text-white hover:bg-gray-700 transition duration-150 font-medium hover:text-white py-2 px-3 inline-flex items-center font-display outline-none rounded-button;
}
</style>
