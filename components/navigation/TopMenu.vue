<script lang="ts" setup>
import { onMounted, watch } from 'vue';

const color = '#ffffff';
const flat = false;
const isXs = ref(false);
const drawer = ref(false);

const {
	data: navigation,
	pending,
	error,
} = await useAsyncData(
	'mainNavigation',
	() => {
		return useDirectus(
			readItem('navigation', 'main', {
				fields: [
					{
						items: [
							'id',
							'has_children',
							'title',
							'icon',
							'label',
							'type',
							'url',
							{
								page: ['permalink', 'title'],
								children: [
									'id',
									'title',
									'has_children',
									'icon',
									'label',
									'type',
									'url',
									{
										page: ['permalink', 'title'],
									},
								],
							},
						],
					},
				],
			}),
		);
	},
	{
		transform: (data) => data,
	},
);

const logo = {
  src: '/images/tsmglogo.png',
  width: 200,
  maxWidth: 200
}
const onResize = () => {  isXs.value = window.innerWidth < 850; }

watch(isXs, (value) => {
  if (!value) {
      if (drawer) {
        drawer.value = false;
      }
    }
});

onMounted(() => {
  onResize();
  window.addEventListener("resize", onResize, { passive: true });
});

</script>

<template>
  <v-container>
    <NavigationMobileMenu v-if="navigation" :navigation="navigation" />
    
    <!-- <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      src="/images/bgDrawer.jpg"
    >
      <v-divider />
      <div align='center'>
        <nuxt-link to="/">
          <Logo 
            :logo="logo"  />
        </nuxt-link>
      </div>
      <v-list dense>
        <v-list-item
          v-for="(nav, i) in navItems"
          :key="i"
          link
        >
        <nuxt-link :to="nav.link">
          <v-btn 
            flat 
            variant="text"
            color='primary' 
          >
            <span class="mr-2">{{nav.text}}</span>
          </v-btn>
        </nuxt-link>
       
            <v-list-item
            v-for="(sub, i) in nav.subNav"
              v-if="nav.subNav"
              :key="i"
            >
            <nuxt-link :to="sub.link" class='pl-2'>
              <v-btn 
              flat 
              variant="text"
              color='primary' 
              > 
              <span class="mr-2">{{sub.text}}</span>
              </v-btn>
            </nuxt-link>
            </v-list-item>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    

    <v-app-bar
      app
      :color="color"
      :flat="true"
      class="px-5"
      :class="{ expand: flat }"
    >
   
    <!-- <v-app-bar-nav-icon 
      class="d-flex d-sm-none" 
      @click="drawer = true" 
    ></v-app-bar-nav-icon> -->
    <!-- <div class='d-flex d-sm-none'>
      <nuxt-link to="/">
        <v-img src="/img/tsmglogo.png" width='200' max-width="276px" />
      </nuxt-link>
    </div> -->
      <v-app-bar-title  >
        <nuxt-link to="/">
          <Logo 
            :logo="logo"  />
        </nuxt-link>
      </v-app-bar-title>
      <div class='d-none d-sm-flex '>
        <NavigationMenuItem v-for="item in navigation?.items" :key="item.id" :item="item" />
      </div>
    </v-app-bar>
  </v-container>
</template>

<style scoped>
.v-app-bar-title {
  transition: 0.6s;
}
.no-background-btn::before {
   background-color: transparent !important; 
}
.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>
