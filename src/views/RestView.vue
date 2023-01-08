<template>
    <div>
        <h1>List</h1>
        <!-- {{ $route.params.restaurantId }} -->
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: 'RestView',
        methods: {
            getMenu() {
                // console.log(this.$route.params.restaurantId);
                axios.request({
                url: 'https://foodierest.ml/api/menu',
                headers: {
                    "x-api-key": this.apiKey,
                },
                params: {
                    // restaurantId: restaurantId
                },
            }).then((response)=>{
                this.menu = response.data;
            }).catch((error)=>{
                console.log(error);
            })
            },
            getRestInfo() {
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
            }
        },
        mounted () {
            this.getRestInfo();
            this.getMenu();
        },
    }
</script>

<style scoped>

</style>