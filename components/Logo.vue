<script setup lang="ts">
const appConfig = useAppConfig();
const { fileUrl } = useFiles();

const logo = computed(() => {
	return appConfig.globals.logo_on_dark_bg;
});

const props = defineProps({
	color: {
		type: String,
		default: 'currentColor',
	},
	width: {
		type: Number,
		default: 225
	}
});
</script>

<template>
	<NuxtImg v-if="logo" :src="logo" alt="" :width />
	
	<template v-else>
		<NuxtImg src="" alt="" />
		
	</template>
</template>

<style>
.accent {
	fill: rgb(var(--color-primary-500));
}
</style>
