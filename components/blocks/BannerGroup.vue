<script setup lang="ts">
import type { BlockBannerGroup } from '../../types';
    const { path } = useRoute();
    const { globals } = useAppConfig();
    const { fileUrl } = useFiles();

    const { data: banners } = await useAsyncData(
        path,
        () => {
            return useDirectus(
                readItems('block_banner_group', {
                    // @ts-ignore
                    fields: [
                        'title',
                        'alignment',
                        {
                            banners: [
                                {
                                    block_banner_ad_id: [
                                        'id',
                                        'name',
                                        'link',
                                        'location',
                                        'link_type',
                                        'image'
                                    ]
                                }
                            ] 
                        }
                    ],
                }),
            );
        },
        {
            transform: (data) => data[0],
        },
    );

</script>

<template>
    
    <BlockContainer fullWidth="true">
        
        <div class="">
            <div class="max-w-full mx-auto grid grid-cols-12">
                <div class="col-span-4">
                    <BannerRotator :bannerData="banners" :groupLocation="'left'"></BannerRotator>
                </div>
                <div class="col-span-4">
                    <BannerRotator :bannerData="banners" :groupLocation="'center'"></BannerRotator>
                </div>
                <div class="col-span-4">
                    <BannerRotator :bannerData="banners" :groupLocation="'right'"></BannerRotator>
                </div>
            </div>
        </div>
       
    </BlockContainer>
  </template>
  
  