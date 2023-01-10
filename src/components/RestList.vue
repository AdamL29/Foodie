<template>
    <div>
        <div v-for="rest in restaurants" :key="rest.restaurantId">
            <router-link :to="'/restaurant/'+rest.restaurantId">{{rest.name}}</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: "RestList",
        data() {
            return {
                apiKey: process.env.VUE_APP_API_KEY,
                apiUrl: process.env.VUE_APP_API_URL,
                restaurants: []
            }
        },
        methods: {
            getRestaurants() {
                axios.request({
                    url: 'https://foodierest.ml/api/restaurant',
                    method: "GET",
                    headers:{
                        "x-api-key": this.apiKey,
                    },
                    }).then((response)=>{
                        this.restaurants = response.data;
                    }).catch((error)=>{
                        console.log(error);
                    });
            }
        },
        mounted () {
            this.getRestaurants();
        },
    }
</script>

<style scoped>

</style>