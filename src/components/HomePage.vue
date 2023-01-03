<template>
    <v-container>
        <v-btn @click="signUp">Client Sign Up</v-btn>
        <v-btn @click="restSignUp">Restaurant Sign Up</v-btn>

        <div>
            <v-btn @click="signIn">Sign In</v-btn>
            <v-btn @click="createMenu">Menu</v-btn>
        </div>
    </v-container>
</template>

<script>
import router from '@/router';
import axios from 'axios';

export default {
    name: "HomePage",
    methods: {
        signUp() {
            axios.request({
                url: 'https://api.adviceslip.com/advice',
                method: "GET"
            }).then((response)=>{
                console.log(response);
                router.push('/sign-up')
            }).catch("error")
        },
        restSignUp() {
            axios.request({
                url: 'https://api.adviceslip.com/advice',
                method: "GET"
            }).then((response)=>{
                console.log(response);
                router.push('/restaurant-sign-up')
            }).catch("error")
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