<script lang='ts' setup>
  const props = defineProps({
      eventList: {
          type: Object,
          required: true,
      }
  });
  
  // const slideInterval = ref(Math.floor(Math.random() * 1000) + 3000);
  const { eventList } = props;
  
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
  // export default defineComponent({
  //   name: 'WrapAround',
  //   components: {
  //     Carousel,
  //     Slide,
  //     Navigation,
  //   },
  // })
  </script>
  
<template>
    <v-container>
      <v-row>
        <v-col 
          align-self="center"
          cols='4' 
          sm="10"
          md='4'
        >
        <h2>TravelSMG's Current<br> Event Schedule</h2>
        <v-divider :thickness="5" color="primary" width='85%' class="mt-5 mb-5 border-opacity-75"></v-divider>
          <v-sheet class="text-h6">
            <div class="d-flex align-center py-4 px-10">
              <!-- <button type="button" @click="slideToBeginning">BUBIBIBIBI</button><br>
              <button type="button" @click="slideNext">to beginning</button>
                    <input type="number" min="0" max="9" v-model="currentSlide" />
                     -->
                    <!-- <v-img
                      src="/img/Arrow-Left.png"
                      class='mr-10'
                      max-width="50px"
                      width="50"
                      @click="slideNext"
                    ></v-img>
                  <v-img
                      src="/img/Arrow-Right.png"
                      width="50"
                      max-width="50px"
                      @click="slidePrev"
                    ></v-img> -->
              </div>
          </v-sheet>
        </v-col>
  
        <v-col 
          cols='12' 
          sm="6"
          md='8'
          >
          <Carousel 
            v-bind="settings" 
            :breakpoints="breakpoints" 
            :wrap-around="true" 
            ref="tsmgCarousel"
            >
  
            <template  v-for="(item, index) in eventList" :key="item"> 
              <Slide>
                <EventCard :event="eventList[index]" />
              </Slide>
            </template>
  
          </Carousel>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  