<template>
    <div>
        <h1>Update</h1>
            <v-btn @click="profileUpdate">
            Your Profile
            </v-btn>
        <h1>Explore</h1>
            <div v-for="(restaurant, index) in restaurants" :key="index">            
                <div @click="restaurantChoice(restaurant.restaurantId, restaurantId)">
                    <h2>{{ restName }}</h2>
                    <h3>{{ restPhone }}</h3>
                    <h4>{{ restBio }}</h4>
                    <h3>{{ restAddress }}</h3>
                    <h4>{{ restCity }}</h4>
                    <h4>{{ restEmail }}</h4>
                </div>
            </div>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import router from "@/router"

    export default {
        name: 'ExploreComp',
        data() {
            return {
                restaurants: "",
            }
        },
        mounted() {
            axios.request({
                url: 'https://foodierest.ml/api/restaurant',
                headers: {
                    "x-api-key": this.apiKey,
                },
                params: {
                    // restaurantId: restaurantId
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
                router.push("/restaurantpage");
            },
            profileUpdate(){
                router.push('/profile-page')
            }
        },
    }
</script>

<style scoped>

</style>