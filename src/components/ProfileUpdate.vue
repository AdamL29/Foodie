<template>
    <v-container>
        <h1>Profile</h1>
        <h3>Update Username:</h3>
            <v-text-field
            v-model="userName"
            />
        <h3>Update Password:</h3>
            <v-text-field
            v-model="password"
            />
        <h3>Update email:</h3>
            <v-text-field
            v-model="email"
            />
        <h3>First Name:</h3>
            <v-text-field
            v-model="firstName"
            />
        <h3>Last Name:</h3>
            <v-text-field
            v-model="lastName"
            />
        <v-btn @click="updateCall">
        Update
        </v-btn>
    </v-container>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import router from '@/router';

    export default {
        name: 'ProfileUpdate',
                
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
            updateCall(){
                let tokenNum = cookies.get('token')
                axios.request({
                    url: 'https://foodierest.ml/api/client',
                    method: "PATCH",
                    headers: {
                        "x-api-key": this.apiKey,
                        token: tokenNum,
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