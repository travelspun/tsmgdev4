<script setup lang="ts">
import type { HeroType, BlockHero, BlockButtonGroup } from '~/types';

defineProps<{
	data: BlockHero;
}>();

const componentMap: Record<HeroType, any> = {
	video: resolveComponent('BlockHeroVideo'),
	image: resolveComponent('BlockHeroImage'),
	slider: resolveComponent('BlockHeroSlider'),
};


</script>
<template>

	<div>
		<!-- Use the component map to render the correct component based on the type of the post -->
		<component :is="componentMap[data.type as HeroType]" v-if="data && data.type" :page="data" />
	</div>

</template>
