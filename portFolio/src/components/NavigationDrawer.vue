<!-- ナビゲーションバー -->
<template>
  <v-navigation-drawer
          permanent
          :rail="changeNav"
        >
      <v-list>
        <v-list-item prepend-icon="mdi-checkbox-blank">
          <v-list-item-title style="font-size: larger;cursor: pointer;" @click="home">
            portfolio
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <!-- 区切り線 -->
      <v-divider></v-divider>
      <v-list nav density="compact">
      <v-list-item prepend-icon="mdi-account" title="Home" value="home"  @click="home"></v-list-item>
      <v-list-item prepend-icon="mdi-application-brackets" title="ProgramWorks" value="program" @click="program">
      </v-list-item>
      <v-list-item prepend-icon="mdi-controller" title="GameWorks" value="game" @click="game">
      </v-list-item>
      <v-list-item prepend-icon="mdi-account-cowboy-hat-outline" title="skills" value="skil" @click="skill">
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
  export default {
    props: {
      changeNav: Boolean,
    },
    methods: {
      //各ページに遷移する関数
      home() {
        this.$router.push('/')
      },
      program() {
        this.$router.push({ name: 'program'})
      },
      game() {
        this.$router.push({ name: 'game'})
      },
      skill() {
        this.$router.push({ name: 'skill'})
      },
    }
  }
</script>
