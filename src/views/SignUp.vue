<template>
  <v-container>
    <RegisterAccount/>
  </v-container>  
</template>

<script>
  import RegisterAccount from '@/components/RegisterAccount.vue';
  
  export default {
    name: 'SignUp',
    components: {
      RegisterAccount,
    },
  }

</script>
<style scoped>

</style>