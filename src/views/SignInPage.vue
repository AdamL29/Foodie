<template>
    <v-container>
        <h1>Sign In</h1>
        <SignIn/>
    </v-container>  
</template>

<script>
    import SignIn from '@/components/SignIn.vue';
    
    export default {
        name: 'SignInPage',
        components: {
        SignIn,
        },
    }

</script>