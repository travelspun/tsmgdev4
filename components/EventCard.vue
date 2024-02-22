<script setup lang="ts">
    import type { EventShow, File } from '~/types';
    const { fileUrl } = useFiles();

    const hover = ref(false);
    const show = ref(false)

    const props = defineProps<{
        data: EventShow;
    }>();
    
// const features = computed(() => {
// 	const featuresArray = unref(props.data).features as BlockFeatureItem[];

// 	if (!featuresArray) return [];

// 	return featuresArray.map((item) => {
// 		return item.features_id as Feature;
// 	});
// });

                        
        // <v-btn
        //   color="secondary"
        //   flat
        //   variant="rounded"
        //   align="center"
        // >
        //   Explore More
         
        // </v-btn>

</script>

<template>
    <v-card
      class="mx-auto"
      width='250'
    >
      <v-img
        :src="fileUrl(unref(props.data)?.cover_image)"
       
      ></v-img>
      <v-card-title>
        {{ unref(props.data)?.name }}
      </v-card-title>
  
      <v-card-text>
        {{ unref(props.data)?.dates }}<br>
        {{ unref(props.data)?.host }}<br>
        {{ unref(props.data)?.location }}
      </v-card-text>
  
      <v-card-actions>
         <BlocksButtonGroup v-if="props.data.button_group" :data="props.data.button_group as BlockButtonGroup"  />
        

      </v-card-actions>
    </v-card>
  </template>
  

  