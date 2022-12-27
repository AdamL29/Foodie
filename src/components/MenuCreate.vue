<template>
    <v-container>
        <h1>Menu</h1>
        <v-text-field
        v-model="items"
        />
    </v-container>
</template>

<script>
    export default {
        name: "MenuCreate",
        data() {
            return {
                apiKey: process.env.VUE_APP_API_KEY,
                apiUrl: process.env.VUE_APP_API_URL,
                items: "",
                image: "",
            }
        },
        methods: {
            makeMenuItem() {
                console.log(this.item);
            }
        },
    }
</script>

<style scoped>

</style>