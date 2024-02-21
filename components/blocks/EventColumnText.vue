<script lang="ts" setup>

const props = defineProps({
    event: {
        type: Object,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
});
const { event, color } = props;
const { fileUrl } = useFiles();

</script>

<template>
    <BlockContainer  align="center">
        <v-card
            :class="'mx-auto my-auto'"
            flat
            height='100%'
        >
            <div class='ma-2 pa-1' align="center">
                <v-img
                    v-if="(event?.event_logo as unknown as File)?.id"
                    :src="fileUrl((event?.event_logo as unknown as File)?.id)"
                    width="200"
                    height='50'
                /> 
            </div>
            <v-card-title class='text-h5 text-primary'>
                {{event.name}}
            </v-card-title>
        
            <v-card-text>
                <span v-if="event?.dates">{{event?.dates}}</span><br>
                <span v-if="event?.host">{{event?.host}}</span><br>
                <span v-if="event?.location">{{event?.location}}</span><br>
                
                <div class='mt-3'>
                    <template v-if="event?.text">
                        <p>
                            <div  v-html="event?.text"></div>
                        </p>
                    </template>
                    <template v-if="event?.button_group">
                        <p class='mt-5'>
                            <BlocksButtonGroup v-if="event?.button_group" :data="event.button_group as BlockButtonGroup"  />
                        </p>
                    </template>
               
                </div>
            </v-card-text>
        
        </v-card>
    </BlockContainer>
    
</template>