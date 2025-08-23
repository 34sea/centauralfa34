<script setup>
import { Facebook, MessageCircle, Instagram, Linkedin } from "lucide-vue-next";
</script>


<template>
  <footer>
    <div class="roLso">
      <div class="logoItemFooter">
        <img src="/public/centaur-logo.png" alt="" />
        <span> Centaur </span>
      </div>
      <div class="redes">
        <a href="#"> <Facebook class="itemsRedes" /> </a>
        <a href="#"><MessageCircle class="itemsRedes" /></a>
        <a href="#"><Instagram class="itemsRedes" /></a>
        <a href="#"><Linkedin class="itemsRedes" /></a>
      </div>
      <p>
        &copy; 2025 Centaur, todos os direitos reservados
      </p>
    </div>

    <ul class="headerFooter">
      <li>
        <h2>Empresa</h2>
        <ul>
          <li>
            <RouterLink to="/suport">Suporte</RouterLink>
            <RouterLink to="/termos">Termos</RouterLink>
            <RouterLink to="/about">Sobre</RouterLink>
            <RouterLink to="/termos">Blog</RouterLink>
          </li>
        </ul>
      </li>

      <li>
        <h2>Links</h2>
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/login">Entrar</RouterLink>
            <RouterLink to="/sigup">Registrar</RouterLink>
          </li>
        </ul>
      </li>

      <li>
        <h2>Suporte</h2>
        <ul>
          <li>
            <RouterLink to="/">Centro</RouterLink>
          </li>
        </ul>
      </li>

      <li>
        <h2>FAQ</h2>
        <ul>
          <li>
            <RouterLink to="/"
              >Como funciona a ativação de licenças?</RouterLink
            >
            <RouterLink to="/about"
              >Posso revogar uma licença em caso de uso indevido?</RouterLink
            >
            <RouterLink to="/suport"
              >Existe período de teste gratuito?</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
  </footer>
  <div class="copyri">
    <span> By </span>
    <a href="https://martinho-portifolio.vercel.app/" target="_blank">34sea</a>
  </div>
</template>