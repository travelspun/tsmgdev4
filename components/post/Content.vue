<template>
    <v-container >

        <TypographyTitle v-if="page?.title" >
                <div class='text-h4 font-weight-bold mt-5'>{{ page?.title }}</div>
            </TypographyTitle>
            <TypographyProse v-if="page?.content" :content="page?.content" class="mt-5" />
	</v-container>	
</template>
<style scoped>
</style>

<script lang='ts' setup>
    export interface PostBlogProps {
        page: any;
    }

    defineProps<PostBlogProps>();
</script>