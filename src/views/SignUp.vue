<template>
  <v-container>
    <h1>Create an Account</h1>
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