<template>
    <div>
        <h1>Explore</h1>
        <div v-for="(restaurant, index) in restaurants" :key="index">
        <h2>{{ RestName }}</h2>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

    export default {
        name: 'ExploreComp',
        data() {
            return {
                restaurants: [],
            }
        },
        mounted () {
            axios.request;
        },
    }
</script>

<style scoped>

</style>