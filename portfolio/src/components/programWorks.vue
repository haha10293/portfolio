<template>
  <v-card>
    <!-- 表示するデータの設計
      items:コンテンツのlist
      items-per-page:一度に表示する数
      search: 検索ワードのdataプロパティ
    -->
    <v-data-iterator
      :items="programs"
      :items-per-page="6"
      :search="search"
    >
      <!-- ヘッダー（検索バー） -->
      <template v-slot:header>
        <v-toolbar class="px-2">
          <v-text-field
            v-model="search"
            clearable
            density="comfortable"
            hide-details
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
            style="max-width: 300px;"
            variant="solo"
          ></v-text-field>
        </v-toolbar>
      </template>

      <!-- デフォルト（コンテンツの内容） -->
      <template v-slot:default="{ items }">
        <v-container class="pa-2" fluid>
          <v-row dense>
            <!-- 見出し -->
            <v-col class="text-center pa-5 text-h3" cols="12">
              <v-icon icon="mdi-code-tags" size="xsmall"></v-icon>
              Programs
              <v-icon icon="mdi-xml" size="xsmall"></v-icon>
            </v-col>
            <v-col
              v-for="item in items"
              :key="item.title"
              cols="auto"
              md="4"
            >

              <v-card class="pb-3" border flat>
                <v-img :src="item.raw.img" max-height="150px"></v-img>

                <v-list-item class="mb-2" :subtitle="item.raw.subtitle">
                  <template v-slot:title>
                    <strong class="text-h6 mb-2">{{ item.raw.title }}</strong>
                  </template>
                </v-list-item>

                <div class="d-flex justify-space-between px-4">
                  <div class="d-flex align-center text-caption text-medium-emphasis me-1">
                    <v-icon icon="mdi-clock" start></v-icon>

                    <div class="text-truncate">
                      {{ item.raw.duration }}
                    </div>
                  </div>

                  <v-btn
                    border
                    flat
                    size="small"
                    class="text-none"
                    :text="item.raw.button"
                    :to="item.raw.url"
                  >
                  </v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <!-- フッター（ページ遷移＋ページ番号表示） -->
      <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
        <div class="d-flex align-center justify-center pa-4">
          <!-- 左ボタン -->
          <v-btn
            :disabled="page === 1"
            icon="mdi-arrow-left"
            density="comfortable"
            variant="tonal"
            rounded
            @click="prevPage"
          ></v-btn>

          <!-- ページ番号表示-->
          <div class="mx-2 text-caption">
            Page {{ page }} of {{ pageCount }}
          </div>

          <!-- 右ボタン -->
          <v-btn
            :disabled="page >= pageCount"
            icon="mdi-arrow-right"
            density="comfortable"
            variant="tonal"
            rounded
            @click="nextPage"
          ></v-btn>
        </div>
      </template>
    </v-data-iterator>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      search: '',
      programs: [
        {
          img: '/src/assets/img/portfolio.png',
          title: 'My portfolio',
          subtitle: 'このサイトです。vue, vuetify, javascript、SPA遷移の為にvue-router等を使用しています。',
          advanced: false,
          duration: '2023年12月作成',
          button: 'Click!!',
          url: '/',
        },
        {
          img: '/src/assets/img/soundjam.png',
          title: 'Soundjam',
          subtitle: '現在チームで開発中の楽器共有webアプリ。フロントエンドではvue, vuetify, javascript バックエンドは php、Laravel10、mysqlを使用して作成しています。まだテスト段階でサーバーへのデプロイ等が完了していないため公開はできません。',
          advanced: false,
          duration: '2023年9月から開発中',
          button: 'No Data',
          url: '',
        },
      ],
    }),
  }
</script>
