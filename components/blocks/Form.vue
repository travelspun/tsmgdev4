<script setup lang="ts">
import type { BlockForm, Form } from '~/types';

defineProps<{
	data: BlockForm;
}>();
</script>
<template>
	<BlockContainer>
		<div class="p-8 max-w-5xl mx-auto mt-4" align="center">
			<TypographyTitle v-if="data?.title">{{ data?.title }}</TypographyTitle>
			<TypographyHeadline v-if="data?.headline" :content="data?.headline" />
			<UForm v-if="data?.form" :form="data?.form as Form" class="mt-4" />
		</div>
	</BlockContainer>
</template>
