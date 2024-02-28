<script lang='ts' setup>
import type { BlockBannerAd } from '~/types/blocks/block-banner-ad';
  const props = defineProps({
    bannerData: {
          type: Object,
          required: true,
      },
      groupLocation: {
        type: String
      }
  });
  
  // const slideInterval = ref(Math.floor(Math.random() * 1000) + 3000);
  const { bannerData, groupLocation } = props;


  import { defineComponent, ref, toRef } from 'vue'
  import { Carousel, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  const  settings = ({
      itemsToShow: 1,
      snapAlign: 'center',
    })
    
    
    const tsmgCarousel = ref(null);
    defineExpose({
        tsmgCarousel
    })
  
      // now we can use myCarsousel's exposed methods
      const slideToBeginning = () => tsmgCarousel.value.slideTo(0);
      const slideNext = () => tsmgCarousel.value.next();
      const slidePrev = () => tsmgCarousel.value.prev();
  
  
  const breakpoints = ref({
        // 700px and up
        700: {
          itemsToShow: 1.5,
          snapAlign: 'center',
        },
        992: {
          itemsToShow: 2,
          snapAlign: 'center',
        },
        // 1024 and up
        1024: {
          itemsToShow: 2,
          snapAlign: 'start',
        },
        1200: {
          itemsToShow: 2.5,
          snapAlign: 'start',
        },
      })
  </script>
  
<template>
    <BlockContainer>
        {{ bannerData.banners }}
        
        <Carousel 
            v-bind="settings" 
            :breakpoints="breakpoints" 
            :wrap-around="true" 
            ref="tsmgCarousel"
            >
  
            <template  v-for="(ad, index) in bannerData.banners" :key="item"> 
            sss    {{ ad.block_banner_ad_id }}
                <template v-if="ad.block_banner_ad_id.location === groupLocation"> 
                   
                    <Slide>
                        <NuxtLink
                            :href="ad.block_banner_ad_id?.link"
                            class=""
                            exact-active-class=""
                            target="_blank"
                        >
                            <a target="_blank" :ref="'ad_'+ groupLocation + '_' + index" :href="ad.block_banner_ad_id.link">
                                <NuxtImg v-if="ad?.block_banner_ad_id.image" :src="ad?.block_banner_ad_id.image" alt="" 
                                        sizes="300vw sm:150px md:300px"/>
                            </a>
                        </NuxtLink>
                    </Slide>
                </template>
            </template>
        </Carousel>
    </BlockContainer>
  </template>
  
  