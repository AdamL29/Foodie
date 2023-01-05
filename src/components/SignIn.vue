<template>
    <v-container>
        <h1>Login</h1>
        <h3>Username:</h3>
            <v-text-field
            v-model="userName"
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
        name: "SignIn",
        
        data() {
            return {
                apiKey: process.env.VUE_APP_API_KEY,
                apiUrl: process.env.VUE_APP_API_URL,
                userName: "",
                password: "",
            }
        },
        methods: {
            signCall(){
                axios.request({
                    url: 'https://foodierest.ml/api/client-login',
                    method: "POST",
                    headers: {
                        "x-api-key": this.apiKey,
                    },
                    data: {
                        email: this.userName,
                        password: this.password,
                    }
                }).then((response)=>{
                    cookies.set('token', response.data.token);
                    cookies.set('clientId', response.data.clientId);
                    router.push('/explore');
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },
    }
</script>

<style scoped>

</style>