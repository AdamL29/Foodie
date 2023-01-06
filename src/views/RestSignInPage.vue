<template>
    <v-container>
        <RestSignIn/>
    </v-container>  
</template>

<script>
    import RestSignIn from '@/components/RestSignIn.vue';
    
    export default {
        name: 'SignInPage',
        components: {
        RestSignIn,
        },
    }

</script>