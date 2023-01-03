<template>
    <v-container>
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
import cookies from "vue-cookies"
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
            apiCall() {
                cookies.set('username', this.userName);
                console.log(this.email);
                console.log(this.password);
                router.push('/explore');
            },
            signCall(){
                axios.request({
                    url: 'https://foodierest.ml/api/',
                    method: "GET",
                    data: {
                        username: this.userName,
                        password: this.password,
                    }
                }).then(()=>{
                    console.log(this.apiKey);
                    console.log(this.apiUrl+"client");
                    router.push('/explore');
                }).catch(()=>{
                    console.log("error");
                })
            }
        },
    }
</script>

<style scoped>

</style>