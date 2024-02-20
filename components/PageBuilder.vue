<script setup lang="ts">
import type { Page, OsProposal, PageBlock, BlockType } from '~/types';

const componentMap: Record<BlockType, any> = {
	block_event_carousel: resolveComponent('BlocksEventCarousel'),
	block_hero: resolveComponent('BlocksHero'),
	block_faqs: resolveComponent('BlocksFaqs'),
	block_features: resolveComponent('BlocksFeatures'),
	block_richtext: resolveComponent('BlocksRichText'),
	block_testimonials: resolveComponent('BlocksTestimonials'),
	block_quote: resolveComponent('BlocksQuote'),
	block_cta: resolveComponent('BlocksCta'),
	block_form: resolveComponent('BlocksForm'),
	block_logocloud: resolveComponent('BlocksLogoCloud'),
	block_team: resolveComponent('BlocksTeam'),
	block_html: resolveComponent('BlocksRawHtml'),
	block_video: resolveComponent('BlocksVideo'),
	block_gallery: resolveComponent('BlocksGallery'),
	block_slideshow: resolveComponent('BlocksImageCarousel'),
	block_stat_counters: resolveComponent('BlocksStatisticsCounters'),
	block_steps: resolveComponent('BlocksSteps'),
	block_columns: resolveComponent('BlocksColumns'),
	block_divider: resolveComponent('BlocksDivider'),
	block_page_anchor: resolveComponent('BlocksPageAnchor'),
};

const props = defineProps<{
	page: Page | OsProposal;
}>();

const blocks = computed(() => {
	const blocks = unref(props.page as Page)?.blocks as PageBlock[];
	return blocks?.filter((block) => {
		return block.hide_block !== true;
	});
});
</script>
<template>
	<div id="content" class="mx-auto">
		
		<template v-for="block in blocks" :key="block.id">
			<!-- Block {{ block.collection}} -->
			<component :is="componentMap[block.collection]" v-if="block && block.collection" :data="block.item" />
		</template> 
	</div>
</template>
