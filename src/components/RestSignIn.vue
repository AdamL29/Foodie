<template>
    <v-container>
        <h1>Restaurant Login</h1>
        <h3>Restaurant Email:</h3>
            <v-text-field
            v-model="restEmail"
            />
        <h3>User Password:</h3>
            <v-text-field
            v-model="password"
            />
        <v-btn @click="signCall">
        Sign In
        </v-btn>
    </v-container>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import router from '@/router';

    export default {
        name: "RestSignIn",
        
        data() {
            return {
                apiKey: process.env.VUE_APP_API_KEY,
                apiUrl: process.env.VUE_APP_API_URL,
                restEmail: "",
                password: "",
            }
        },
        methods: {
            signCall(){
                axios.request({
                    url: 'https://foodierest.ml/api/restaurant-login',
                    method: "POST",
                    headers: {
                        "x-api-key": this.apiKey,
                    },
                    data: {
                        email: this.restEmail,
                        password: this.password,
                    }
                }).then((response)=>{
                    cookies.set('token', response.data.token);
                    cookies.set('restId', response.data.clientId);
                    router.push('/restaurant-page');
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },
    }
</script>

<style scoped>

</style>