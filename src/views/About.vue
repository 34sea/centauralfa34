<script setup>
import Banner from "../components/Banner.vue";
import Footer from "../components/Footer.vue";
import Contact from "../components/Contact.vue";
import AboutComponent from "../components/AboutComponent.vue"
import Plans from "../components/Plans.vue"
</script>

<template>
<Banner></Banner>
<AboutComponent></AboutComponent>
<Plans></Plans>
<Contact></Contact> 
<div class="lineShadow"></div>
<Footer></Footer>
</template>

<style scoped>
.conteudo{
    height: 400px;
}
</style>