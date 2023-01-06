<template>
    <v-container>
        <OrderCart/>
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