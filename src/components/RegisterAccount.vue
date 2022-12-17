<template>
    <v-container>
        <v-text-field
        v-model="email"
        />
        <v-btn @click="apiCall">
        Test API
        </v-btn>
    </v-container>
</template>

<script>
import axios from "axios";

    export default {
        name: "RegisterAccount",
        
        data() {
            return {
                apiKey : process.env.VUE_APP_API_KEY,
                apiUrl : process.env.VUE_APP_API_URL,
                email : "",
                password : "",
            }
        },
        methods: {
            apiCall() {
                console.log(this.apiKey);
                console.log(this.apiUrl+"client");
                console.log(this.email);
            },
            login(){
                axios.request({
                    url: "https://reqres.in/api/login",
                    method: "POST",
                    data: {
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