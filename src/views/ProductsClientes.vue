<template>
  <div class="container">
    <!-- Filtros -->
    <div class="filters">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="selectedCategory = cat"
        :class="{ active: selectedCategory === cat }"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Grid de imagens -->
    <div class="grid">
      <div
        v-for="(img, index) in filteredImages"
        :key="index"
        class="image-card"
        @click="openFullScreen(img)"
      >
      <div class="frontLogo"></div>
        <img :src="img.src" :alt="img.category" />
      </div>
    </div>

    <!-- Fullscreen -->
    <div v-if="fullscreenImage" class="fullscreen">
      <button class="close-btn" @click="fullscreenImage = null">✖</button>
      <div class="frontLogo"></div>
      <img :src="fullscreenImage" alt="Fullscreen" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const categories = ["Todos", "Dark", "Light", "Colorido", "Copo", "Parede", "Camisa"];
const selectedCategory = ref("Todos");

const images = ref([
  { src: new URL('@/assets/clients/logo-light.png', import.meta.url).href, category: "Light" },
  { src: new URL('@/assets/clients/logo-dark.png', import.meta.url).href, category: "Dark" },
  { src: new URL('@/assets/clients/logo-colorido.png', import.meta.url).href, category: "Colorido" },
  { src: new URL('@/assets/clients/logo-in-cup.png', import.meta.url).href, category: "Copo" },
  { src: new URL('@/assets/clients/logo-in-wall.png', import.meta.url).href, category: "Parede" },
  { src: new URL('@/assets/clients/logo-tshirt.png', import.meta.url).href, category: "Camisa" },
]);

const filteredImages = computed(() => {
  if (selectedCategory.value === "Todos") return images.value;
  return images.value.filter(img => img.category === selectedCategory.value);
});

const fullscreenImage = ref(null);
const openFullScreen = (img) => {
  fullscreenImage.value = img.src;
};
</script>

<style scoped>
/* Container geral */
.container {
  padding: 20px;
  font-family: Arial, sans-serif;
}

/* Botões de filtro */
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}
.filters button {
  padding: 8px 16px;
  border: none;
  background: #ddd;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
}
.filters button:hover {
  background: #bbb;
}
.filters button.active {
  background: #007bff;
  color: white;
}

/* Grid responsivo */
.grid {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr; /* padrão: celular */
}
@media (min-width: 600px) {
  .grid {
    grid-template-columns: 1fr 1fr; /* tablet */
  }
}
@media (min-width: 900px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr; /* desktop */
  }
}

.image-card{
   position: relative;
}

.frontLogo{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    left: 0;
    top: 0;
    cursor: pointer;
    z-index: 999;
}
/* Cartões de imagem */
.image-card img {
  width: 100%;
  /* height: 220px; */
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s;
   /* border: 2px solid #ccc; */
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
.image-card img:hover {
  transform: scale(1.05);
}

/* Fullscreen */
.fullscreen {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.fullscreen img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
}
.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: red;
  border: none;
  color: white;
  padding: 8px 12px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  z-index: 9999999999;
}
</style>
