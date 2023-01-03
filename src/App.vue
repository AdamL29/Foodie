<template>
  <v-app>
    <v-app-bar
      app
      color="red"
      dark
    >

      <v-spacer><v-btn @click="goHome">Home</v-btn></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import router from '@/router';

export default {
  name: 'App',
  data() {
    return {
      apiKey: process.env.VUE_APP_API_KEY,
      apiUrl: process.env.VUE_APP_API_URL,
    }
  },
  methods: {
    goHome() {
      router.push('/')
    }
  },
    
  
};
</script>
