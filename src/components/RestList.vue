<template>
    <div>
        <div v-for="rest in restaurants" :key="rest.id">
            <router-link :to="'/restaurant/'+rest.id">{{rest.name}}</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: "RestList",
        data() {
            return {
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
                    this.restaurants = [
                                {
                                    name : "Rest 1",
                                    id : 1
                                },
                                {
                                    name : "Rest 2",
                                    id : 20
                                },
                                {
                                    name : "Rest 3",
                                    id : 30
                                },
                            ]
            }
        },
        mounted () {
            this.getRestaurants();
        },
    }
</script>

<style scoped>

</style>