<script lang="ts" setup>

const props = defineProps({
    images: {
        type: Array,
        required: true,
    }
});
const slideInterval = ref(Math.floor(Math.random() * 1000) + 3000);
const { images } = props;
const { fileUrl } = useFiles();

const video_url = computed(() => {
    if (images.slides_id.type === 'video' && images.slides_id.video) {
        return fileUrl(images.slides_id.video);
    }

    // if image.slides_id.type === 'url' && image.slides_id.video_url) {
    //     return pimage.slides_id.video_url;
    // }

    return null;
});

const image_url = computed(() => {
    if (images.slides_id.type === 'image' && images.slides_id.image) {
        return fileUrl(images.slides_id.image);
    }
    return null;
});
</script>

<template>
    <v-container  no-gutters>
        <!-- {{  images }} -->
        <v-carousel 
            :cycle='false' 
            :continuous='true' 
            hide-delimiters 
            :show-arrows="true"
            >
            
            <template v-for="(image, index) in images"> 
                <!-- {{  image.slides_id.type }} -->
                    <template v-if="image.slides_id.type === 'image'">
                        <v-carousel-item
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                            :src="fileUrl(image.slides_id.image)"
                            cover
                        >
                        </v-carousel-item>
                    </template>
                    <template v-else>
                        <video  
                            playsinline 
                            autoplay 
                            muted 
                            loop>
                            <source :src='fileUrl(image.slides_id.video)' type='video/mp4'>
                        </video>
                    </template>
            </template>

        </v-carousel>
    </v-container>
</template>