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
			<div  align="center" class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
				<template v-for="(feature, index) in features as Feature[]"
					:key="feature?.id"
					ref="featureRefs"
				>
					<div>
						<div class="flex justify-center items-center  mb-4 w-20 h-20 lg:h-25 lg:w-25">
							<img v-if="(feature?.image as unknown as File)?.id"
								:src="fileUrl((feature?.image as unknown as File)?.id)"
								max-width="50px"
								class="d-block ml-auto mr-auto"
								:class="{ 'zoom-efect': hover }"
							>

						</div>
						<h3 class="mb-2 text-xl font-bold dark:text-white">{{ feature?.title }}</h3>
						<p class="text-lg">{{ feature?.text }}</p>
					</div>
				</template>
			</div>
			<!-- <v-row align="center" justify="center">
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
			</v-row> -->
		</BlockContainer>
	</section>
</template>

<style>

</style>
