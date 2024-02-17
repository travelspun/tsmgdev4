<script lang='ts' setup>
  import type { BlockStatisticsCounters, BlockCounterItem, Counter} from '~/types';
  const { fileUrl } = useFiles();

  const hover = ref(false);

  const props = defineProps<{
    data: BlockStatisticsCounters;
  }>();

  const counters = computed(() => {
    const countersArray = unref(props.data).counters as BlockCounterItem[];

    if (!countersArray) return [];

    return countersArray.map((item) => {
      return item.counters_id as Counter;
    });
  });
</script>
<template>
    <v-container
      class="bg-primary"
	    align='center'
      fluid
    >
      <v-container 
        fluid class="bg-primary"
      >
        <v-row
          align="center"
          no-gutters
          fluid
          cols='3'
        >
          <v-col class='text-align-center'>
            <v-sheet class="pa-2 ma-2 bg-primary">
              <p>
                <div class="text-h3 font-weight-bold">{{data?.header}}</div>
              </p>
              <p class="mt-10">
                <div>{{  data?.text }}</div>
              </p>
            </v-sheet>
          </v-col>
        </v-row>

        <v-row 
          align="center"
          no-gutters
          cols='12'
        >
          <v-col class='text-align-center'>
            <h2 class='text-h5 pa-2 ma-2 text-align-center' align='center'>{{ data?.title }}</h2>
          </v-col>
        </v-row>

        <v-row
          align="center"
          no-gutters
          fluid
        >
          <template 
            v-for="(counter, index) in counters as Counter[]"
          >
            <v-col class='text-align-center'>
              <v-sheet class="pa-2 ma-2 bg-primary">
                <Counter :data="counter"></Counter>
              </v-sheet>
            </v-col>
          </template>
        </v-row>
       
      </v-container>
    </v-container>
</template>
