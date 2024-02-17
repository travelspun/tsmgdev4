<script setup lang="ts">
import type { BlockFeature, BlockFeatureItem, Feature, File } from '~/types';
const { fileUrl } = useFiles();

const hover = ref(false);

const props = defineProps<{
	data: Feature;
}>();

const features = computed(() => {
	const featuresArray = unref(props.data).features as BlockFeatureItem[];

	if (!featuresArray) return [];

	return featuresArray.map((item) => {
		return item.features_id as Feature;
	});
});


</script>
<template>
	<section>
		<BlockContainer>
			<v-row align="center" justify="center">
				<v-col cols="10">
				<v-row align="center" justify="space-around">
					<v-col
					v-for="(feature, index) in features as Feature[]"
					:key="feature?.id"
					ref="featureRefs"
					cols="12"
					sm="4"
					class="text-center"
					>
					<v-hover v-slot="{ isHovering, props }">
						<v-card
						class="card"
						shaped
						:elevation="isHovering ? 12 : 0"
						:class="{ 'on-hover': isHovering }"
						v-bind="props"
						>
						<v-img
							v-if="(feature?.image as unknown as File)?.id"
							:src="fileUrl((feature?.image as unknown as File)?.id)"
							max-width="50px"
							class="d-block ml-auto mr-auto"
							:class="{ 'zoom-efect': hover }"
						></v-img>
						<h2 class="text-h4 font-weight-regular">{{ feature?.title }}</h2>
						<h4 class="font-weight-regular subtitle-1">
							{{ feature?.text }}
						</h4>
						</v-card>
					</v-hover>
					</v-col>
				</v-row>
				</v-col>
			</v-row>
		</BlockContainer>
	</section>
</template>

<style>

</style>
