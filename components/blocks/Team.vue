<script setup lang="ts">
	import type { BlockTeam, Team } from '~/types';
	import { useIntersectionObserver, useResizeObserver } from '@vueuse/core';

	defineProps<{
		data: BlockTeam;
	}>();

	const { data: team }: { data: Ref<Team[]> } = await useAsyncData(
		'team',
		() => {
			return useDirectus(readItems('team', {}));
		},
		{
			transform: (data) => data,
		},
	);

	function splitArray(array: any[], numParts: number = 2) {
		let result = [] as any[];

		for (let i = 0; i < array.length; i++) {
			let index = i % numParts;

			if (!result[index]) {
				result[index] = [];
			}

			result[index].push(array[i]);
		}

		return result;
	}

const teamToDisplay = computed(() => {
	// Split the array into two arrays
	const teamMembersSplit = splitArray(unref(team), 2);

	// Return the two arrays as an object
	return {
		// Duplicate each array so we can animate the last item to the first position
		left: [...teamMembersSplit[0], ...teamMembersSplit[0]],
		right: [...teamMembersSplit[1], ...teamMembersSplit[1]],
	};
});

function animationDelay() {
	let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s'];
	return possibleAnimationDelays[Math.floor(Math.random() * possibleAnimationDelays.length)];
}

const target = ref(null);
const isVisible = ref(false);
const leftCol: Ref<HTMLElement | null> = ref(null);
const rightCol: Ref<HTMLElement | null> = ref(null);
const colHeight = ref(0);
const leftColHeight = ref(0);
const rightColHeight = ref(0);

const { stop } = useIntersectionObserver(
	target,
	([{ isIntersecting }], observerElement) => {
		isVisible.value = isIntersecting;
	},
	{
		threshold: 0.25,
	},
);

useResizeObserver(leftCol, (entries) => {
	if (!entries[0]) return;
	colHeight.value = (entries[0].target as HTMLElement).offsetHeight;
});

const duration = computed(() => {
	return `${colHeight.value * 15}ms`;
});
</script>
<template>
	<section>
		<BlockContainer>
			<div class="flex flex-col mx-auto  text-align-center" align="center">
				<!-- Text -->
				<div class="flex flex-col">
					<TypographyTitle v-if="data?.title" >
						<div class='text-h4 font-weight-bold' align="center">{{ data?.title }}</div>
					</TypographyTitle>
					<TypographyProse v-if="data?.content" :content="data?.content" />
				</div>

				<div
					ref="target"
					class="w-full relative grid h-[49rem] max-h-[60vh] 
						grid-cols-1 items-start gap-8 
						px-4 md:grid-cols-2 mt-8 lg:mt-0 "
						align="center"	
				>
					<!-- Left Col -->
					<div
						ref="leftCol"
						:class="['space-y-10 py-4 md:max-w-[320px] ']"
					>
						<TeamCard v-for="person in teamToDisplay.left" :key="person.id" :person="person" />
					</div>
					<!-- Right Col -->
					<div
						ref="rightCol"
						:class="['space-y-10 py-4 md:max-w-[320px]']"
					>
						<TeamCard
							v-for="person in teamToDisplay.right"
							:key="person.id"
							:person="person"
						/>
					</div>
				</div>
				
			</div>
			
		</BlockContainer>
	</section>
</template>

<style>
.animate-marquee {
	animation: marquee var(--marquee-duration) linear infinite;
	&:hover {
		animation-play-state: paused;
	}
}

@keyframes marquee {
	0% {
		transform: translateY(0);
	}
	100% {
		transform: translateY(calc(-50%));
	}
}
</style>
