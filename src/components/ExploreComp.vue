<template>
    <v-container>
        <h1>Update</h1>
            <v-btn @click="profileUpdate">
            Your Profile
            </v-btn>
        <h1>Explore</h1>
            <div v-for="(restaurant, index) in restaurants" :key="index">            
                <div @click="restSelect(restaurant.restaurantId, restaurantId)">
                    <h2>{{ restaurant.name }}</h2>
                    <h3>{{ restaurant.phoneNum }}</h3>
                    <div>
                        <h4>{{ restaurant.bio }}</h4>
                        <h3>{{ restaurant.address }}</h3>
                        <h4>{{ restaurant.city }}</h4>
                        <h4>{{ restaurant.email }}</h4>
                    </div>
                </div>
            </div>
    </v-container>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import router from "@/router"

    export default {
        name: 'ExploreComp',
        data() {
            return {
                apiKey: process.env.VUE_APP_API_KEY,
                apiUrl: process.env.VUE_APP_API_URL,
                restaurants: [],
            }
        },
        mounted() {
            let restaurantId = cookies.get('restaurantId');

            axios.request({
                url: 'https://foodierest.ml/api/restaurant',
                headers: {
                    "x-api-key": this.apiKey,
                },
                params: {
                    restaurantId: restaurantId
                }
            }).then((response)=>{
                this.restaurants = response.data;
            }).catch((error)=>{
                console.log(error);
            });
        },
        methods: {
            restSelect(restaurantId) {
                cookies.set('restaurantId', restaurantId);
                router.push('/restaurant-page/:restaurantId');
            },
            profileUpdate(){
                router.push('/profile-page')
            }
        },
    }
</script>

<style scoped>

</style>