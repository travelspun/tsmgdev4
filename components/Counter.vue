<script setup lang="ts">
import { onMounted } from 'vue';

import type { BlockCounterItem, Counter} from '~/types';
  const { fileUrl } = useFiles();

  const hover = ref(false);

  const props = defineProps<{
    data: Counter;
  }>();


const counter = ref(0);
onMounted(() => {
    setInterval(() => {
        if(counter.value < unref(props.data)?.count) {
            counter.value = counter.value + unref(props.data)?.increment;
        }
    }, 10);
});

onMounted
</script>
<template>
    <v-container class="bg-primary">
        <p class="flex justify-center">
            <div class="text-h3 text-white font-weight-bold">{{ counter.toLocaleString('en-US') }}</div>
        </p>
        <p class="flex justify-center">
            <div class="ucase text-white font-weight-bold"> {{ unref(props.data)?.title }} </div>
        </p>
       
    </v-container>
</template>
<style scoped>
    .ucase {
        text-transform: uppercase;
    }
</style>
