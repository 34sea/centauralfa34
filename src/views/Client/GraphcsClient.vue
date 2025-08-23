<!-- src/components/GraphcsClient.vue -->
<template>
    <div class="chart-container">
        <h2>
            Estatistica de Uso
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
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Uso mensal",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
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
  