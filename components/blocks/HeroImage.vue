
<script setup>
    const scrollTo = () =>  document.getElementById("about").scrollIntoView({behavior: 'smooth'});
</script>
<template>
 <!-- <div class="home-hero" role="banner"> -->
    <v-container fluid class="home-hero"  align-self='center'>
        <v-row>
            <v-col align-self="center">
                <video  playsinline autoplay muted loop poster='https://cdn.pixabay.com/photo/2020/06/14/16/15/airplane-5298452_1280.jpg'>
                    <source src='https://www.travelsmg.com/TAOF_Landing_Page.mp4' type='video/mp4'>
                </video>
            <v-container align-self='center' >
                <v-row>
                    <v-col align-self="center">
                        <div 
                            align='center' 
                            class="text-box-over d-flex flex-column 
                                fill-height text-white
                                pt-10 mt-10">
                            <h4 class="text-h4 font-weight-black align-center justify-center">
                                Producers of the #1 Travel Industry Trade Events
                            </h4>
                            <h5 class='text-h5 pt-5'>
                                Build your business face-to-face!
                            </h5>
                            <div class="py-10">
                                <v-btn 
                                    size="x-large"
                                    rounded="xl"
                                    class='text-white font-weight-bold'
                                    color='secondary' 
                                    @click="scrollTo"
                                >Learn More</v-btn>
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