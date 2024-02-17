
<script setup lang="ts">
    import type { BlockHeroVideo, BlockButtonGroup } from '~/types';

    const props = defineProps<{
        data: BlockHeroVideo;
    }>();



    const { fileUrl } = useFiles();

    // // defineProps<{
    // //     data: BlockHeroVideo;
    // // }>();
    // const props = defineProps({
    //     data: {
    //         type: Object,
    //         required: true,
    //     }
    // });

    const url = computed(() => {
        if (props.data.type === 'video' && props.data.video) {
            return fileUrl(props.data.video);
        }

        if (props.data.type === 'url' && props.data.video_url) {
            return props.data.video_url;
        }

        return null;
    });

    const bgimageurl = computed(() => {
        if (props.data.image) {
            return fileUrl(props.data.image);
        }
        //'http://localhost:8055/assets/' + 
        // if (props.data.type === 'url' && props.data.video_url) {
        //     return props.data.video_url;
        // }

        return null;
    });


   const scrollTo = () =>  document.getElementById("about").scrollIntoView({behavior: 'smooth'});
</script>
<template>
  
 <!-- <div class="home-hero" role="banner"> -->
    <v-container fluid class="home-hero"  align-self='center'>
        <v-row>
            <v-col align-self="center">
                <video  
                    playsinline 
                    autoplay 
                    muted 
                    loop
                    :poster='bgimageurl'>
                    <source :src='url' type='video/mp4'>
                </video>
            <v-container align-self='center'>
                <v-row>
                    <v-col align-self="center" class="mt-10 pt-10">
                        <div 
                            align='center' 
                            class="text-box-over d-flex flex-column 
                                fill-height text-white
                                pt-10 mt-10">
                            <h3 class="text-h3 font-weight-black align-center justify-center mt-5 pt-5">
                               <div v-html="props.data.headline"></div>
                            </h3>
                            <h4 class='text-h4 mt-5 pt-5'>
                               {{ props.data.content }}
                            </h4>
                            <div class="py-10 mt-5 pt-5">
                                <template 
                                    v-if="props.data.button_group"
                                    v-for="button in props.data.button_group.buttons as BlockButton[]"
			                        :key="button.id"
                                >
                                    <v-btn 
                                        size="x-large"
                                        rounded="xl"
                                        class='text-white font-weight-bold'
                                        color='secondary' 
                                        @click="scrollTo"
                                    >{{ button.label }}</v-btn>
                                </template>
                               
                                <!-- <BlocksButtonGroup v-if="props.data.button_group" :data="props.data.button_group as BlockButtonGroup"  @click="scrollTo" /> -->
                                
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
            </v-col>
        </v-row>
    </v-container>
<!-- </div> -->
</template>
<style scoped>

    div.home-hero {
        position: relative;
        height: 78vh;
        min-height: 25rem;
        width: 100%;
        overflow: hidden;
    }
    div.home-hero .container {
        position: relative;
        z-index: 2;
        height: 100%;
    }
  
    div.home-hero video {
        position: absolute;
        top: 50%;
        left: 50%;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        z-index: 0;
        -ms-transform: translateX(-50%) translateY(-50%);
        -moz-transform: translateX(-50%) translateY(-50%);
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
    }
   
    .text-box-over {
        position: relative;
        z-index: 2;
        height: 100%;
    } 
</style>