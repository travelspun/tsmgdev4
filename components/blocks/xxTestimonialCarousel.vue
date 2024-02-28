<script setup>

import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

const  settings = ({
    itemsToShow: 1,
    snapAlign: 'center',
})
const breakpoints = ref({
    // 700px and up
    700: {
    itemsToShow: 2,
    snapAlign: 'center',
    },
    // 1024 and up
    1024: {
    itemsToShow: 2,
    snapAlign: 'start',
    },
})
</script>
<template>
    <BlockContainer>
            
        <Carousel 
            :items-to-show='1'
            :breakpoints="breakpoints" 
            :wrap-around="true" 
            :autoplay='3000'
        >
        <Slide v-for="(slide, index) in 8" :key="slide">
            
            <v-sheet class="d-flex pa-2 ma-2" >
                <TestimonialCard v-if='index % 2' :data="slide"/>
                <v-container v-else>
                    <v-row align="center" justify="center">
                        <v-col>
                            <v-card
                                color="tertiary"
                                class="mx-auto"
                                max-width="500"
                                title="Bob Barker"
                                subtitle="Travel when Price is Right"
                            >
                                <template v-slot:append>
                                    <!-- <v-avatar size="125" rounded="0"> -->
                                    <v-img
                                            class="avatarDrop"
                                            src="https://cmsvegas.travelsmg.com//uploads/melia_caribe_logo_77414f33e4.png"
                                            alt="John"
                                            width='125'
                                        ></v-img>
                                    <!-- </v-avatar> -->
                                </template>
                                <v-card-text class="pa-5" style="background-color:#ffffff;color:#000000">
                                    The advantage in combining one-to-one meetings/roundtable meetings with a 
                                    trade show is that you don't feel like you missed out on connecting with 
                                    other participants. Then throw in informational sessions and you have the 
                                    ideal trade show!
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-sheet>
            
        </Slide>

    </Carousel>
    </BlockContainer>
    
</template>


<style scoped>
.avatarDrop {
    position: realative;
    top: 30px;
  }
</style>