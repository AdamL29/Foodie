<template>
    <v-container>
        <h1>Create an Account</h1>
        <RegisterRest/>
    </v-container>  
</template>

<script>
import RegisterRest from '@/components/RegisterRest.vue';
    
    export default {
        name: 'SignUp',
        components: {
        RegisterRest,
        },
    }

</script>