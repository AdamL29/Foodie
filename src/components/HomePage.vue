<template>
    <v-container>
        <v-btn @click="signUp">Client Sign Up</v-btn>
        <v-btn @click="restSignUp">Restaurant Sign Up</v-btn>

        <div>
            <v-btn @click="signIn">Sign In</v-btn>
            <v-btn @click="createMenu">Menu</v-btn>
            <v-btn @click="profilePage">Profile</v-btn>
        </div>
    </v-container>
</template>

<script>
import router from '@/router';
// import axios from 'axios';

export default {
    name: "HomePage",
    methods: {
        signUp() {
            router.push('/sign-up')
        },
        restSignUp() {
            router.push('/restaurant-sign-up')
        },
        profilePage(){
            router.push('/profile-page')
        },
        signIn(){
            console.log('You are signed in');
            router.push('/signin')
        },
        createMenu(){
            console.log("menu time");
            router.push('/menu')
        },
    },
}

</script>

<style scoped>
div{
    margin-top: 10px;
}
</style>