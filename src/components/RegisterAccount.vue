<template>
    <v-container>
        <h1>Create an Account</h1>
            <h3>User Email:</h3>
                <v-text-field
                v-model="email"
                />
            <h3>User Password:</h3>
                <v-text-field
                v-model="password"
                />
            <h3>First Name:</h3>
                <v-text-field
                v-model="firstName"
                />
            <h3>Last Name:</h3>
                <v-text-field
                v-model="lastName"
                />
            <h3>Username:</h3>
                <v-text-field
                v-model="userName"
                />
            <v-btn @click="registerCall">
            Create Account
            </v-btn>
    </v-container>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"
import router from '@/router';

    export default {
        name: "RegisterAccount",
        
        data() {
            return {
                apiKey: process.env.VUE_APP_API_KEY,
                apiUrl: process.env.VUE_APP_API_URL,
                email: "",
                password: "",
                firstName: "",
                lastName: "",
                userName: "",
            }
        },
        methods: {
            registerCall(){
                axios.request({
                    url: 'https://foodierest.ml/api/client',
                    method: "POST",
                    headers: {
                        "x-api-key": this.apiKey,
                    },
                    data: {
                        email: this.email,
                        password: this.password,
                        firstName: this.firstName,
                        lastName: this.lastName,
                        username: this.userName,
                    }
                }).then((response)=>{
                    cookies.set('token', response.data.token);
                    cookies.set('clientId', response.data.clientId);
                    console.log(this.apiKey);
                    //Need to sign in after registration
                    router.push('/signin');
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },
    }
</script>

<style scoped>

</style>