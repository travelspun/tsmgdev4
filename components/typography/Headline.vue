<script setup lang="ts">
interface HeadlineProps {
	content: string;
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'title';
}

withDefaults(defineProps<HeadlineProps>(), {
	as: 'div',
	size: 'md',
});
</script>
<template>
	<div
		
		v-html="content"
	/>
</template>

<style lang="postcss">
.color-em {
	em {
		@apply text-primary not-italic;
	}
}
</style>
