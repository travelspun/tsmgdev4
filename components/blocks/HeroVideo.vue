
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
        
        console.log('type' + props.data.type)
        if (props.data.type === 'video' && props.data.video) {
            if (props.data.video?.type === 'url' && props.data.video.video_url) {
                return props.data.video.video_url;
            }
            if(props.data.video?.type === 'file' && props.data.video.video_file) {
                return fileUrl(props.data.video.video_file);
            }
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

    // onMounted(() => {
    // el.value // <div>
    // })

    // const scrollTo = () => rtTop.scrollIntoView({behavior: 'smooth'});
   const scrollTo = () =>  document.getElementById("section1").scrollIntoView({behavior: 'smooth'});

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
                            <div class="text-h2 font-weight-black align-center justify-center mt-5 pt-5">
                               <div v-html="props.data.headline"></div>
                            </div>
                            <div class='text-h3 mt-5 pt-5 font-weight-bold'>
                               {{ props.data.content }}
                            </div>
                            <div class="py-10 mt-5 pt-5">
                                <template 
                                    v-if="props.data.button_group"
                                    v-for="button in props.data.button_group.buttons as BlockButton[]"
			                        :key="button.id"
                                >
                                    <BlocksButtonGroup v-if="props.data.button_group" :data="props.data.button_group as BlockButtonGroup"/>
                               </template>
                               
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