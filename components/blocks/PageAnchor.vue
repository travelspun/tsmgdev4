<script lang="ts" setup>
import type { BlockPageAnchor } from '~/types';

withDefaults(
	defineProps<{
		data: BlockPageAnchor;
	}>(),
	{
		data: () => ({
			alignment: 'center',
		}),
	},
);

</script>

<template>
    <div  :id="data?.anchor_id"></div>
</template>