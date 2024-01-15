<template>
  <v-app>
    <app-bar/>
    <v-divider></v-divider>
    <!-- ナビゲーションバー -->
    <default-view/>
  </v-app>
</template>

<script setup>
  import AppBar from '@/components/AppBar.vue';
  import DefaultView from './View.vue'
</script>


