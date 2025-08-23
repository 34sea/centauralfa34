<!-- src/components/GraphcsClient.vue -->
<template>
    <div class="chart-container">
        <h2>
            Lincenças Recomendadas
        </h2>
      <canvas ref="chartCanvas"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import Chart from "chart.js/auto";
  
  const chartCanvas = ref(null);
  
  onMounted(() => {
    if (chartCanvas.value) {
      new Chart(chartCanvas.value, {
        type: "pie",  // Mudei para 'pie' para criar um gráfico de pizza
        data: {
          labels: ["Produto A", "Produto B", "Produto C", "Produto D"],
          datasets: [
            {
              data: [300, 50, 100, 150],  // Dados fictícios
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  });
  </script>
  
  <style scoped>
  
  </style>
  