<template>
  <v-app>
    <v-app-bar
      app
      color="purple"
      dark>
      <v-spacer><v-btn @click="goHome">Home</v-btn></v-spacer>
      <v-spacer>
          <img src="https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png" 
          alt="A hand holding a plater of food.">
      </v-spacer>
      <v-spacer><SignOut/></v-spacer>
    </v-app-bar>

    <v-main>
      <div class="body">
        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import router from '@/router';
import SignOut from '@/components/SignOut';

export default {
  name: 'App',
  components: {
    SignOut,
  },
  methods: {
    goHome() {
        router.push('/')
    },
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
img{
  height: 5vh;
}
.body{
  display: grid;
  
  background-color: cyan;
  color: red;
}
</style>