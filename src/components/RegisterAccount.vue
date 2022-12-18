<template>
    <v-container>
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
        <v-btn @click="apiCall">
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
                apiKey : process.env.VUE_APP_API_KEY,
                apiUrl : process.env.VUE_APP_API_URL,
                email : "",
                password : "",
                firstName: "",
                lastName: "",
                userName: "",
            }
        },
        methods: {
            apiCall() {
                cookies.set('username', this.email);
                console.log(this.email);
                console.log(this.password);
                router.push('/explore');
            },
            registerCall(){
                axios.request({
                    url: "https://reqres.in/api/login",
                    method: "POST",
                    data: {
                        email: this.email,
                        password: this.password,
                    }
                }).then((response)=>{
                    console.log(response);
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