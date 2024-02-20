<script setup lang="ts">
import type { BlockButtonGroup, BlockButton, Page, Post } from '~/types';

defineProps<{
	data: BlockButtonGroup;
}>();

function getUrl(button: BlockButton): string | undefined {
	switch (button.type) {
		case 'pages':
			return (button.page as Page)?.permalink ?? undefined;
		case 'posts':
			return (button.post as Post)?.slug ?? undefined;
		case 'external':
			return button.external_url ?? undefined;
		case 'page_anchor':
			return button.page_anchor ?? undefined;
		default:
			return undefined;
	}
}
</script>
<template>
	
	<div :class="`flex flex-col justify-${data.alignment} space-y-4 md:space-x-4 md:flex-row md:space-y-0`">
		<template 
			v-for="button in data.buttons as BlockButton[]"
			:key="button.id">
			<NuxtLink :href="getUrl(button)" :target="button?.external_url ? '_blank' : '_self'">
				 <v-btn 
						size="large"
						rounded="xl"
						class='text-white font-weight-bold'
						:color='button?.color' 
					>{{ button.label }}</v-btn>
				<!-- <v-btn
					color="secondary"
					flat
					variant="rounded"
					align="center"
					>
					Explore More
				</v-btn> -->
			</NuxtLink>
		</template>
		<!-- <v-btn
          color="secondary"
          flat
          variant="rounded"
          align="center"
        >
          {{ button?.label }}
         
        </v-btn> -->
		<!-- <UButton
			v-for="button in data.buttons as BlockButton[]"
			:key="button.id"
			:to="getUrl(button)"
			:color="button?.color"
			:variant="button?.variant"
			:target="button?.external_url ? '_blank' : '_self'"
			:label="button?.label ?? undefined"
			size="xl"
			trailing-icon="material-symbols:arrow-forward-rounded"
		/> -->
	</div>
</template>
