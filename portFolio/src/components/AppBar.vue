<!-- アプリケーションバー -->
<template>

  <!-- ナビゲーションバー -->
  <nav-ber :changeNav="navFlg"/>

  <!-- アプリケーションバー -->
  <v-app-bar flat>
    <v-app-bar-title>
      <!-- <v-icon :icon="navIcon"  @click="editNav"/> -->
      <v-btn :icon="navIcon" @click="editNav" />
      <v-btn icon="mdi-theme-light-dark" @click="toggleTheme" />
    </v-app-bar-title>

  </v-app-bar>
</template>

<script setup>
  import NavBer from '@/components/NavigationDrawer.vue'
  import { useTheme } from 'vuetify'
  const theme = useTheme()
  function toggleTheme () {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }
</script>
<script>
export default {
  data() {
    return {
      navFlg: false,
      themeFlg: false,
      navIcon: 'mdi-login',
    }
  },
  methods: {
    //ナビゲーション開閉
    editNav() {
      //開閉フラグ反転
      this.navFlg = !(this.navFlg);
      //開閉判定、アイコン変化
      if (this.navIcon === 'mdi-login'){
        this.navIcon = 'mdi-logout';
      }else {
        this.navIcon = 'mdi-login';
      }
    },
  },
}
</script>
