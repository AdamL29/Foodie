<template>
    <div>
        <ExploreComp/>
        <RestList/>
    </div>
</template>

<script>
import ExploreComp from '@/components/ExploreComp';
import RestList from '@/components/RestList';

    export default {
        name: 'ExplorePage',
        components: {
            ExploreComp, 
            RestList,
        },
    }
</script>

<style scoped>

</style>