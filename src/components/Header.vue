<template>
  <div>
    <div v-if="$route.path !== '/login' && $route.path !== '/sigup' && $route.path !== '/dclient' && $route.path !== '/teste'" class="header">
      <nav>
        <div class="logoMarca">
          <img src="/public/centaur-logo.png" alt="logo" />
          <!-- <RouterLink to="/">Martel</RouterLink> -->
        </div>
        <div class="linksMenu">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">Sobre</RouterLink>
          <RouterLink to="/suport">Suporte</RouterLink>
          <RouterLink to="/termos">Termos</RouterLink>
          <RouterLink to="/blog">Blog</RouterLink>
        </div>
        <div class="counteBtns">
          <RouterLink to="/login">Entrar</RouterLink>
          <RouterLink to="/sigup">Registrar</RouterLink>
          <!-- <RouterLink to="/teste">Teste</RouterLink> -->
        </div>
      </nav>
    </div>

    <div class="bodyViewRouter">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
</script>

<style scoped>
</style>
