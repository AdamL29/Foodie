<template>
    <v-container>
        <h1>Test Header</h1>
            <button>Just Click</button>
            <div v-for="(, index) in " :key="index">            
                <h1>{{ client.userName }}</h1>
                <h3>{{ client.phoneNum }}</h3>
                <div>
                    <h4>{{ client.firstName }}</h4>
                    <h3>{{ client.lastName }}</h3>
                    <h4>{{ client.email }}</h4>
                </div>
            </div>
    </v-container>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"
// import router from '@/router';

    export default {
        name: "RegisterProfile",
        data() {
            return {
                apiKey: process.env.VUE_APP_API_KEY,
                apiUrl: process.env.VUE_APP_API_URL,
                email: "",
                firstName: "",
                lastName: "",
            }
        },
        mounted() {
            let clientId = cookies.get('clientId');

                axios.request({
                    url: 'https://foodierest.ml/api/client',
                    method: "GET",
                    headers:{
                        "x-api-key": this.apiKey,
                    },
                    params: {
                        clientId: clientId,
                    }
                    }).then((response)=>{
                        this.email = response.data;
                    }).catch((error)=>{
                        console.log(error);
                    });
            }
    }
</script>

<style scoped>

</style>