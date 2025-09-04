<script setup>
    import Header from "./Header.vue"
    import { RouterLink, useRoute } from "vue-router";
    import BarsLatClient from "./BarsLatClient.vue"

    const route = useRoute();
</script>

<template>
     <div class="containerOut">
        <div class="containerIn" v-if="$route.path == '/login' || $route.path == '/' || $route.path == '/sigup' || $route.path == '/about' || $route.path == '/rele'">
            <Header></Header>
        </div>
        <div class="containerIn" v-else>
            <BarsLatClient></BarsLatClient>
        </div>
    </div>
    <!-- <div class="containerOut">
        <div class="containerIn" v-if="$route.path == '/login' || $route.path == '/' || $route.path == '/sigup' || $route.path == '/about'">
            <Header></Header>
        </div>
        <div class="containerIn" v-else>
            <BarsLatClient></BarsLatClient>
        </div>


        <div class="containerIn" v-if="$route.path == '/login' || $route.path == '/' || $route.path == '/sigup' || $route.path == '/about'">
            <Header></Header>
        </div>
        
    </div> -->
</template>