<template>
    <v-container>
        <h1>HOrder Page</h1>
        <orderCart/>
    </v-container>
</template>

<script>
import orderCart from '@/components/OrderCart.vue';

    export default {
    name: "OrderPage",
    components: {
        orderCart,
    },
    }

</script>

<style scoped>
</style>