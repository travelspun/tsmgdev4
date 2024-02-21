<script setup lang="ts">
import type { BlocksImageCarousel } from '#build/components';
import type { BlockButtonGroup, BlockColumn, BlockColumnRow } from '~/types';

defineProps<{
	data: BlockColumn;
}>();
</script>

<template>
	<BlockContainer :full-width="true">
		<!-- {{  data }} -->
		<div class="mt-12" align="center">
			<TypographyTitle v-if="data?.title" class="text-align-center" align="center">
				<div class='text-h4 font-weight-bold' align="center">{{ data?.title }}</div>
			</TypographyTitle>
			<TypographyProse v-if="data?.headline" :content="data?.headline" :alignment="center" />
		</div>
		<div class="mt-12">
			<div
				v-for="row in data?.rows as BlockColumnRow[]"
				:key="row?.id"
				class="relative grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10"
			>
				<template v-if="row?.type === 'event'">
					<div class="my-auto text-align-center" align="center">
						<BlocksEventColumnText :event="row?.event"></BlocksEventColumnText>
					</div>
				</template>
				<template v-else>
					<div class="mx-10 my-auto text-align-center" align="center">
						<TypographyTitle v-if="row?.title" class="text-align-center" >
							<span class='text-h5 text-primary font-weight-bold'>{{ row?.title }}</span>
						</TypographyTitle>
						<TypographyProse v-if="row?.content" :content="row?.content" />
						<BlocksButtonGroup v-if="row?.button_group" :data="row?.button_group as BlockButtonGroup" class="mt-4" />
					</div>
				</template>
				
				
				<div
					class="block overflow-hidden aspect-video"
					:class="[
						{
							'lg:order-last': row?.image_position === 'right',
							'lg:order-first': row?.image_position === 'left',
						},
					]"
				>
				<template v-if="row?.type === 'event'">
					<div>
						<BlocksImageCarousel :images="row?.event?.slideshow[0]?.slideshow_id?.slides" />
					</div>
				</template>
				<template v-else>
					<div>
						<BlocksImageCarousel :images="row?.slideshow?.slides" />
					</div>
				</template>
				
					
				</div>
			</div>
		</div>

	</BlockContainer>
</template>
