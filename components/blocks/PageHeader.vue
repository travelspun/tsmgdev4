<script lang="ts" setup>
import type { BlockButtonGroup } from '~/types';

const props = defineProps({
    content: {
        type: Object,
        required: true,
    }
});
const { event, text } = props;
</script>

<template>
    <v-container class='mt-10 mb-5' align='center'>
        <!-- <h2   v-if="content?.title">{{ content.title }}</h2> -->
        <TypographyTitle v-if="content?.title">{{ content?.title }}</TypographyTitle>

        <TypographyProse v-if="content?.content" :content="content?.content"/>
        
        <BlocksButtonGroup v-if="content?.button_group" :data="content?.button_group as BlockButtonGroup" class="mt-4" />
    </v-container>
</template>