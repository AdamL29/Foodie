<template>
    <v-container>
        <h1>HOrder Page</h1>
        <OrderCard/>
    </v-container>
</template>

<script>
import OrderCart from '@/components/OrderCart.vue';

    export default {
    name: "OrderPage",
    components: {
        OrderCart,
    },
    }

</script>

<style scoped>
</style>