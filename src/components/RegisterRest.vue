<template>
    <v-container>
        <h1>Create an Account</h1>
            <h3>Restaurant Name:</h3>
                <v-text-field
                v-model="restName"
                />
            <h3>Restaurant Email:</h3>
                <v-text-field
                v-model="email"
                />
            <h3>Password:</h3>
                <v-text-field
                v-model="password"
                />
            <h3>Address:</h3>
                <v-text-field
                v-model="address"
                />
            <h3>City:</h3>
                <v-text-field
                v-model="city"
                />
            <h3>Phone Number:</h3>
                <v-text-field
                v-model="phoneNumber"
                />
            <h3>Bio:</h3>
                <v-text-field
                v-model="bio"
                />
            <v-btn @click="restCall">
            Create Account
            </v-btn>
    </v-container>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"
import router from '@/router';

    export default {
        name: "RegisterRest",
        
        data() {
            return {
                apiKey: process.env.VUE_APP_API_KEY,
                apiUrl: process.env.VUE_APP_API_URL,
                restName: "",
                email: "",
                password: "",
                address: "",
                city: "",
                phoneNumber: "",
                bio: "",
            }
        },
        methods: {
            restCall() {
                axios.request({
                    url: 'https://foodierest.ml/api/restaurant',
                    method: "POST",
                    headers:{
                        "x-api-key": this.apiKey,
                    },
                    data: {
                        name: this.restName,
                        email: this.email,
                        password: this.password,
                        address: this.address,
                        city: this.city,
                        phoneNum: this.phoneNumber,
                        bio: this.bio,
                    }
                }).then((response)=>{
                    cookies.set('restToken', response.data.token);
                    cookies.set('restId', response.data.restId);
                    router.push('/restaurant-signin')
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },
    }
</script>

<style scoped>

</style>