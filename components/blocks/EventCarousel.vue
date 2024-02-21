
<script lang="ts" setup>
	import type { BlockEventCarousel, BlockEventItem, EventShow, File } from '~/types';

    import { Carousel, Slide } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'
    import {  watch } from 'vue'
    import { useDisplay } from 'vuetify'

    const tsmgCarousel = ref(null);

    const props = defineProps<{
        data: BlockEventCarousel;
    }>();

    const { fileUrl } = useFiles();
    
    // now we can use myCarsousel's exposed methods
    const slideToBeginning = () => tsmgCarousel.value.slideTo(0);
    const slideNext = () => tsmgCarousel.value.next();
    const slidePrev = () => tsmgCarousel.value.prev();




	const events = computed(() => {
		const eventArry = unref(props.data).events as BlockEventItem[];

		if (!eventArry) return [];

		return eventArry.map((item) => {
			return item.events_id as EventShow;
		});
	});

    // // Destructure only the keys you want to use
    const { xs, xl, lg, md, sm } = useDisplay()
    let columns = ref(2);
    const model = ref(0)
    
    const  settings = ({
        itemsToShow: 1,
        snapAlign: 'center',
    })
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

    watch(xs, (val) => {
    columns.value = val ? 1 : 1;
    },{immediate:true});
    watch(sm, (val) => {
    columns.value = val ? 1 : 1;
    },{immediate:true});
    watch(md, (val) => {
    columns.value = val ? 2 : 2;
    },{immediate:true});
    watch(lg, (val) => {
    columns.value = val ? 3 : 3;
    },{immediate:true});
    watch(xl, (val) => {
    columns.value = val ? 2 : 2;
    },{immediate:true});

</script>


<template>
    <v-container>
      <v-row>
        <v-col 
          align-self="center"
          class="col-auto md:col-span-6 sm:col-span-6"
        >
        <h2 class="text-h5 font-weight-bold">{{ unref(props.data).title }}</h2>
        <v-divider :thickness="5" color="primary" width='85%' class="mt-5 mb-5 border-opacity-75"></v-divider>
          <v-sheet class="text-h6">
            <div class="d-flex align-center py-4 px-10">
              <!-- <button type="button" @click="slideToBeginning">BUBIBIBIBI</button><br>
              <button type="button" @click="slideNext">to beginning</button>
                    <input type="number" min="0" max="9" v-model="currentSlide" />
                     -->
                    <v-img
                    :src="fileUrl('f7630d34-3ddb-47ba-8780-b98ac99d1a84.png')"
                      class='mr-10'
                      max-width="50px"
                      width="50"
                      @click="slideNext"
                    ></v-img>
                  <v-img
                    :src="fileUrl('a3788757-5dcc-46ac-8176-57b5ef996739.png')"
                      width="50"
                      max-width="50px"
                      @click="slidePrev"
                    ></v-img>
              </div>
          </v-sheet>
        </v-col>
  
        <v-col 
          cols='12' 
          sm="6"
          md='8'
        >
          <!-- <template  v-for="(event, i) in events" :key="i"> 
            FUCK
            </template> -->
          <Carousel 
            v-bind="settings" 
            :breakpoints="breakpoints" 
            :wrap-around="true" 
            ref="tsmgCarousel"
            >
  
            <template  v-for="(event, item) in events" :key="item"> 
              <Slide>
                <EventCard :data="event" />
              </Slide>
            </template>
  
          </Carousel>
        </v-col>
      </v-row>
    </v-container>
</template>
