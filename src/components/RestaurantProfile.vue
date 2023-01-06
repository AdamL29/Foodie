<template>
    <v-container>
        <h1>Test Header</h1>
            <button>Just Click</button>
        <h1>Explore</h1>
            <div v-for="(restaurant, index) in restaurants" :key="index">            
                <h2>{{ restName }}</h2>
                <h3>{{ restPhone }}</h3>
                <h4>{{ restBio }}</h4>
                <h3>{{ restAddress }}</h3>
                <h4>{{ restCity }}</h4>
                <h4>{{ restEmail }}</h4>
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
                restaurant: [],
            }
        },
        mounted() {
            let restaurantId = cookies.get('restaurantId');

                axios.request({
                    url: 'https://foodierest.ml/api/restaurant',
                    method: "POST",
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