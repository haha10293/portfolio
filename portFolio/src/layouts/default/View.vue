<template>

  <v-main >
    <router-view />
  </v-main>

  <v-footer
    class="bg-indigo-lighten-1 text-center d-flex flex-column"
    absolute
    app
  >
    <!-- <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div> -->
    <v-divider></v-divider>

    <div>
      2023 — <strong>My Portfolio</strong>
    </div>
  </v-footer>
</template>

<script setup>
  //
</script>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

