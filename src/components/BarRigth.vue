<script setup>
const storedData = localStorage.getItem("usercentaurclientelogin");
if (storedData) {
  console.log("Dados encontrados:", storedData);
} else {
  console.log("Nenhum dado encontrado para essa chave.");
}
</script>


<template>
    <div class="barR">
        
    </div>
</template>