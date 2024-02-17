<script setup lang="ts">

    // import type { BlockTestimonialCard, File } from '~/types';

    // defineProps<{
    //     data: BlockTestimonial;
    // }>();

    const props = defineProps({
        data: {
            type: Object,
            default: null,
        }
    });
    const { fileUrl } = useFiles();

    // const url = computed(() => {
    //     if (props.data.type === 'video' && props.data) {
    //         return fileUrl(data.video);
    //     }

    //     // if (props.data.type === 'url' && props.data.video_url) {
    //     //     return props.data.video_url;
    //     // }

    //     return null;
    // });
</script>
<template>
    <v-container>
        asdf     {{ props?.data.company_logo }}
        <v-row align="center" justify="center">
            <v-col cols="auto">
                {{ props.data.image.id }}
                <v-card
                    color="tertiary"
                    class="mx-auto"
                    max-width="375"
                    :title="props.data.title"
                    :subtitle="props.data.subtitle"
                    >
                    
                    <template>
                        <v-avatar 
                            size="50" 
                            class="avatarDrop" 
                            v-if="props.data.type === 'attendee'">
                            <!-- <NuxtImg
                                v-if="(props.data?.image as unknown as File)?.id"
                                :src="(props.data?.image as unknown as File)?.id"
                                :alt="props.data.image.title ?? ''"
                            /> -->
                            <v-img
                                 v-if="(props.data?.image as unknown as File)?.id"
                                :src="(props.data?.image as unknown as File)?.id"
                                :alt="props.data.image.title ?? ''"
                            />
                        </v-avatar>
                        <template v-else-if="props?.data.type === 'supplier'">
                      
                            <NuxtImg
                                class="avatarDrop"
                                v-if="props?.data.company_logo"
                                :src="props?.data.company_logo"
                                :alt="props?.data.company ?? ''"
                            />
                        </template>
                        
                        <!-- <v-img
                            class="avatarDrop"
                            :src="props.data.company_logo"
                            :alt="props.data.company"
                            width='125'
                            v-else-if="props.data.type === 'supplier'"
                        /> -->
                    </template>
                    <v-card-text 
                        class="pa-5" 
                        style="background-color:#ffffff;
                        color:#000000">
                        {{ props.data.content }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
  </template>

  <style scoped>
  .avatarDrop {
    position: realative;
    top: 30px;
  }
  </style>