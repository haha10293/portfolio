<template>
  <v-container>
    <v-carousel
      cycle
      hide-delimiter-background
      show-arrows="hover"
      interval="3000"
    >
      <v-carousel-item
        v-for="item in items"
        :key="item"
        :value="item"
      >
      <v-img cover :src="item.img">
        <v-sheet>
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              {{ item.slides }} Slide
            </div>
          </div>
        </v-sheet>
      </v-img>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        items: [
          {
            slides: 'My portfolio',
            img: '/src/assets/img/portfolio.png',
          },
        ]
      }
    },
  }
</script>
