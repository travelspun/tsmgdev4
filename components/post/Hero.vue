<template>
    <BlockContainer :full-width="true">
        <template  
            v-if="page?.image"
            style="padding:0px !important;margin:0px !important;">
        
            <NuxtImg
                style="width:100%; padding:0px !important;margin:0px !important;"
                provider="directus"
                fit='cover'
                :src="page?.image"
            />
        </template>
        <!-- <v-parallax
            style="padding:0px !important;margin:0px !important;"
            :src="page?.hero_image"
        >
        </v-parallax> -->
        
    </BlockContainer>
    
</template>
<script lang='ts' setup>
      export interface PostBlogProps {
            page: any;
      }

      defineProps<PostBlogProps>();
</script>
<style scoped>
    .darken {
        filter: brightness(50%);
    }
  .v-parallax {
    padding: 0px !important;
  }
</style>

