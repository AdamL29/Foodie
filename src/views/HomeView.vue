<template>
    <v-container>
      <h1>Home Page</h1>
      <HomePage/>
    </v-container>
</template>

<script>
import HomePage from '@/components/HomePage.vue';

  export default {
    name: "HomeView",
    components: {
      HomePage,
    },
  }

</script>

<style scoped>
</style>