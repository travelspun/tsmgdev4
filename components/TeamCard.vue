<script setup lang="ts">
	import type { Team } from '~/types';

	defineProps<{
		person: Team;
	}>();

	const { fileUrl } = useFiles();
	
</script>

<template>
    <v-col align='center' >
		<!-- {{  person }} -->
        <v-container no-gutter align='center' fluid>
            <v-row >
                <v-col cols='1'  align='center'>
                    <v-sheet>
                        <v-avatar
							v-if="person?.image"
                            :image="fileUrl(person?.image)"
                            size="100">
                        </v-avatar>
                    </v-sheet>
                </v-col>
                <v-col cols='11' >
                    <v-sheet>
						<div class="ml-10 pl-10">
							<span class='font-weight-bold '>{{person.name}}</span><br>
							<span class=''>{{person.job_title}}</span><br>
							<span  class='text-body'>
								<nuxt-link :to="'mailto:' + person.email">
								<v-btn
									class=""
									variant="plain"
									size="large"
									:href="'mailto:' + person.email"
								>
									<v-icon color="primary" size='40' icon="mdi-email-fast-outline"  /> 
									<!-- mx-3 {{icon.text}}<v-icon color="red" :icon="icon.text"  size="24px">o99{{ icon.text }}</v-icon> -->
								</v-btn>
								</nuxt-link>
							</span>
						</div>
                        <!-- <span  class='text-body'><a href='#' class='color-primary text-decoration-none'>{{member.email}}</a></span><br> -->
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </v-col>

</template>

<style scoped>
   
</style>
