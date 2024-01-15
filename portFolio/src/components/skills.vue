<template>
  <v-container fluid>
    <v-row>
      <!-- 見出し -->
      <v-col class="text-center pa-5 text-h3" cols="12">
        <v-card>
          <v-icon icon="mdi-code-tags" size="xsmall"></v-icon>
          skills
          <v-icon icon="mdi-xml" size="xsmall"></v-icon>
        </v-card>
      </v-col>
      <v-col v-for="item in items" :key="item" :value="item" cols="4">
        <v-card>
          <div class="text-center">
            <v-progress-circular :size="100" :width="15" :model-value="item.progress" :color="item.color" style="overflow: hidden;">
              <template v-slot:default> {{ item.progress }} % </template>
            </v-progress-circular>
            <h2>{{ item.name }}</h2>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            name: "javascript",
            progress: 40,
            color: "yellow",
          },
          {
            name: "python",
            progress: 40,
            color: "blue",
          },
          {
            name: "php",
            progress: 60,
            color: "purple",
          },
          {
            name: "java",
            progress: 35,
            color: "red",
          },
          {
            name: "go",
            progress: 5,
            color: "blue",
          },
          {
            name: "vue",
            progress: 60,
            color: "green",
          },
          {
            name: "vuetify",
            progress: 60,
            color: "green",
          },
          {
            name: "Laravel",
            progress: 40,
            color: "orange",
          },
          {
            name: "Django",
            progress: 10,
            color: "blue",
          },
          {
            name: "Jsp",
            progress: 10,
            color: "red",
          },
          {
            name: "Mysql",
            progress: 60,
            color: "pink",
          },

        ]
      }
    },
    // mounted () {
    //   this.interval = setInterval(() => {
    //     if (this.value === 100) {
    //       return (this.value = 0)
    //     }
    //     this.value += 10
    //   }, 1000)
    // },
    // beforeUnmount () {
    //   clearInterval(this.interval)
    // },
  }
</script>
