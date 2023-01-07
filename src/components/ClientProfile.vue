<template>
    <v-container>
        <h1>Test Header</h1>
            <button>Just Click</button>
            <!-- <div v-for="(, index) in " :key="index">            
                <h1>{{ .name }}</h1>
                <h3>{{ .phoneNum }}</h3>
                <div>
                    <h4>{{ .bio }}</h4>
                    <h3>{{ .address }}</h3>
                    <h4>{{ .city }}</h4>
                    <h4>{{ .email }}</h4>
                </div> -->
            <!-- </div> -->
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