<template>
    <v-container>
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
        <v-btn @click="apiCall">
        Create Account
        </v-btn>
    </v-container>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"

    export default {
        name: "RegisterRest",
        
        data() {
            return {
                apiKey : process.env.VUE_APP_API_KEY,
                apiUrl : process.env.VUE_APP_API_URL,
                restName: "",
                email : "",
                password : "",
            }
        },
        methods: {
            apiCall() {
                cookies.set('restaurantname', this.restName);
                console.log(this.apiKey);
                console.log(this.apiUrl+"client");
                console.log(this.email);
                console.log(this.password);
            },
            login(){
                axios.request({
                    url: "https://reqres.in/api/login",
                    method: "POST",
                    data: {
                        name: this.restName,
                        email: this.email,
                        password: this.password,
                    }
                }).then((response)=>{
                    console.log(response);
                }).catch(()=>{
                    console.log("error");
                })
            }
        },
    }
</script>

<style scoped>

</style>