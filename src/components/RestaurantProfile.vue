<template>
    <v-container>
        <h1>Restaurant Profile</h1>
            <v-btn @click="menu">Edit Menu</v-btn>
            <div v-for="(restaurant, index) in restaurants" :key="index">            
                <h1>{{ restaurant.name }}</h1>
                <h3>{{ restaurant.phoneNum }}</h3>
                <div>
                    <h4>{{ restaurant.bio }}</h4>
                    <h3>{{ restaurant.address }}</h3>
                    <h4>{{ restaurant.city }}</h4>
                    <h4>{{ restaurant.email }}</h4>
                </div>
            </div>
    </v-container>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"
import router from '@/router';

    export default {
        name: "RegisterProfile",
        data() {
            return {
                apiKey: process.env.VUE_APP_API_KEY,
                apiUrl: process.env.VUE_APP_API_URL,
                restaurants: [],
            }
        },
        methods: {
            menu() {
                router.push('/menu')
            }
        },
        mounted() {
            let restaurantId = cookies.get('restaurantId');

                axios.request({
                    url: 'https://foodierest.ml/api/restaurant',
                    method: "GET",
                    headers:{
                        "x-api-key": this.apiKey,
                    },
                    params: {
                        restaurantId: restaurantId,
                    }
                    }).then((response)=>{
                        this.restaurants = response.data;
                    }).catch((error)=>{
                        console.log(error);
                    });
            }
    }
</script>

<style scoped>

</style>