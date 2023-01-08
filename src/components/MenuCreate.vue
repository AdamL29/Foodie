<template>
    <v-container>
        <h1>Create Menu Item:</h1>
            <h3>Name:</h3>
                <v-text-field
                v-model="name"
                />
            <h3>Price:</h3>
                <v-text-field
                v-model="price"
                />
            <h3>Description:</h3>
                <v-text-field
                v-model="description"
                />
        <v-btn @click="makeMenuItem">
            Create
        </v-btn>
    </v-container>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
import router from '@/router';

    export default {
        name: "MenuCreate",
        data() {
            return {
                apiKey: process.env.VUE_APP_API_KEY,
                apiUrl: process.env.VUE_APP_API_URL,
                name: "",
                price: "",
                description: "",
            }
        },
        methods: {
            makeMenuItem() {
                let restToken = cookies.get('restToken');
                axios.request({
                    url: 'https://foodierest.ml/api/menu',
                    method: "POST",
                    headers: {
                        "x-api-key": this.apiKey,
                        token: restToken,
                    },
                    data: {
                        name: this.name,
                        price: this.price,
                        description: this.description,
                    }
                }).then((response)=>{
                    console.log(response);
                    router.push('/restaurant-page');
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },
    }
</script>

<style scoped>

</style>