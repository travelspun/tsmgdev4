<script setup lang="ts">
import type { BlockRichtext } from '~/types';

withDefaults(
	defineProps<{
		data: BlockRichtext;
	}>(),
	{
		data: () => ({
			alignment: 'center',
		}),
	},
);
</script>

<template>
	<BlockContainer >
		<span v-if="!data.element_id" :id="data.element_id"></span>
		<div
			:class="[
				{
					'text-left': data.alignment === 'left',
					'text-center': data.alignment === 'center',
				},
			]"
		>
			<TypographyTitle v-if="data.title">{{ data.title }}</TypographyTitle>
			<template v-if="data.show_headline === 'yes'">
				<TypographyHeadline v-if="data.headline" :content="data.headline" size="lg" />
			</template>
		</div>
		<TypographyProse
			v-if="data.content"
			:content="data.content"
			:alignment="data?.alignment"
			:element_id="data?.element_id"
			:class="[
				{
					'mx-auto': data.alignment === 'center',
				},
				'',
			]"
		/>
	</BlockContainer>
</template>
