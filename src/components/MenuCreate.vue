<template>
    <v-container>
        <h1>Menu</h1>
            <h2>Name:</h2>
                <v-text-field
                v-model="items"
                />
            <h2>Price:</h2>
                <v-text-field
                v-model="items"
                />
            <h2>Description:</h2>
                <v-text-field
                v-model="items"
                />
        <v-btn @click="signCall">
        Sign In
        </v-btn>
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
                description: "",
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