<template>
    <v-container>
        <v-spacer><v-btn @click="signOut">Logout</v-btn></v-spacer>
    </v-container>
</template>

<script>
import router from '@/router';
import axios from 'axios';
import cookies from 'vue-cookies';

    export default {
        name: 'SignOut',
        data() {
            return {
                apiKey: process.env.VUE_APP_API_KEY,
                apiUrl: process.env.VUE_APP_API_URL,
            }
        },
        methods: {
            signOut(){
                let tokenNum = cookies.get('token');
                axios.request({
                    url: 'https://foodierest.ml/api/client-login',
                    method: "DELETE",
                    headers: {
                        "x-api-key": this.apiKey,
                        token: tokenNum,
                    },
                }).then((response)=>{
                    cookies.remove('token', response.data.token);
                    cookies.remove('clientId', response.data.clientId);
                    router.push('/');
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },
    }
</script>

<style scoped>

</style>