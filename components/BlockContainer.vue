<script setup lang="ts">
interface BlockContainerProps {
	fullWidth?: boolean;
}

withDefaults(defineProps<BlockContainerProps>(), {
	fullWidth: false,
});
</script>
<template>
	<!-- <section :class="['py-8 mx-auto', !fullWidth ? 'px-6 lg:px-16 lg:py-24 max-w-6xl' : '']"> -->
	<v-container fluid class="mx-auto py-8 mb-5 mt-5">
		<slot />
	</v-container>
		
	<!-- </section> -->
</template>
