<script setup lang="ts">
	import type { BlockTestimonial, BlockTestimonialItem, Testimonial, File } from '~/types';

	import { Carousel, Slide } from 'vue3-carousel'
	import 'vue3-carousel/dist/carousel.css'

	const props = defineProps<{
		data: Testimonial;
	}>();

	const { fileUrl } = useFiles();


	const testimonials = computed(() => {
		const testimonialsArray = unref(props.data).testimonials as BlockTestimonialItem[];

		if (!testimonialsArray) return [];

		return testimonialsArray.map((item) => {
			return item.testimonials_id as Testimonial;
		});
	});

	const  settings = ({
		itemsToShow: 2,
		snapAlign: 'center',
	})
	const breakpoints = ref({
		// 700px and up
		700: {
		itemsToShow: 2,
		snapAlign: 'center',
		},
		// 1024 and up
		1024: {
		itemsToShow: 2,
		snapAlign: 'start',
		},
	})
</script>
<template>
	<BlockContainer class="relative overflow-hidden">
		<!-- <div
			class="absolute inset-0 bg-gradient-to-br from-white via-gray-300 to-primary dark:from-gray-700 dark:via-gray-900 dark:to-primary"
		/>
		<div class="absolute inset-0 opacity-50 grain-bg dark:opacity-10" /> -->

		<div class="relative text-center">
			<TypographyTitle v-if="data.title">{{ data.title }}</TypographyTitle>
			<TypographyHeadline v-if="data.headline" :content="data.headline" size="lg" />
		</div>

		<div v-if="testimonials.length > 0">
			
			<Carousel 
				:items-to-show='itemsToShow'
				:breakpoints="breakpoints" 
				:wrap-around="true" 
				:autoplay='3000'
			>
				<template 
					v-for="(testimonial, index) in testimonials as Testimonial[]"
					:key="testimonial.id"
					ref="testimonialRefs"
				>
					<Slide>
						<v-sheet class="d-flex pa-2 ma-2" >
							<v-row align="center" justify="center">
								<v-col cols="auto">
									<v-card
										color="tertiary"
										class="mx-auto"
										max-width="375"
										:title="testimonial?.title"
										:subtitle="testimonial?.company"
										>
										<!-- lkjfd {{ testimonial?.company_logo}} -->
										<template v-slot:append>
											<template v-if="testimonial?.type === 'attendee'">
												<v-avatar size="50" class="avatarDrop">
													<v-img
														v-if="(testimonial?.image as unknown as File)?.id"
														:src="fileUrl((testimonial?.image as unknown as File)?.id)"
													/> 
												</v-avatar>
											</template>
											<template v-else-if="testimonial?.type === 'supplier'">
												<v-img
													class="avatarDrop"
													v-if="testimonial?.company_logo"
													:src="fileUrl(testimonial?.company_logo)"
													:alt="testimonial?.company ?? ''"
													width='100'
													height='50'
												/>
											</template>
										</template>
										<v-card-text 
											class="pa-5" 
											style="background-color:#ffffff;
											color:#000000">

											<div v-html='testimonial?.content' />
											
										</v-card-text>
									</v-card>
								</v-col>
							</v-row>
						</v-sheet>
						
					</Slide>
				</template>

			</Carousel>
	
		</div>
	</BlockContainer>
</template>
<style scoped>
.avatarDrop {
  position: realative;
  top: 30px;
  z-index: 10;
}
</style>