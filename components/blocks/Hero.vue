<script setup lang="ts">
import type { BlockHero, BlockHeroVideo, BlockButtonGroup } from '~/types';

defineProps<{
	data: BlockHero;
}>();
</script>
<template>
	<template v-if="data.type == 'video'">
		<BlocksHeroVideo :data="(data as BlockHeroVideo)"> </BlocksHeroVideo>
	</template>
	<template v-if="data.type == 'image'">
		<BlocksHeroVideo :data="(data as BlockHeroVideo)"> </BlocksHeroVideo>
	</template>
	<template v-if="data.type == 'slider'">
		<BlocksHeroVideo :data="(data as BlockHeroVideo)"> </BlocksHeroVideo>
	</template>

</template>
