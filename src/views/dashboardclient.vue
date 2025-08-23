<script setup>
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { ref } from "vue";
import BarsLatClient from "../components/BarsLatClient.vue"
import BarRigth from "../components/BarRigth.vue"

const nameCliente = ref("unkonown")


const storedData = localStorage.getItem("usermartelclientelogin");
const getDocumentById = async (documentId) => {
  const docRef = doc(db, "usermartelclient", documentId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    nameCliente.value = docSnap.data().name
    console.log(docSnap.data().name)
  } else {
    console.log("Nenhum documento encontrado com esse ID.");
  }
};
if (storedData) {
  console.log("Dados encontrados:", storedData);
  getDocumentById(storedData);
} else {
  console.log("Nenhum dado encontrado para essa chave.");
}
</script>

<template>
  <div class="latB">
    <BarsLatClient/>
    <!-- <BarRigth/> -->
  </div>
</template>