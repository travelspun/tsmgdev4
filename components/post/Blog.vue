<script setup lang="ts">
      export interface PostBlogProps {
            page: any;
      }

      defineProps<PostBlogProps>();
</script>
<template>
      <v-container fluid>
            <PostHero :page="page" />
            <PostContent :page="page" />
      </v-container>
<!-- </v-card> -->
</template>