<script setup>
import { onMounted, ref } from "vue";
import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

const nome = ref("");
const idade = ref("");
const mensagem = ref("");
const isLoad = ref(false);
const usuarios = ref([]);

const salvarUsuario = async () => {
  isLoad.value = true;
  try {
    await addDoc(collection(db, "usuarios"), {
      nome: nome.value,
      idade: idade.value,
    });
    mensagem.value = "Usuário salvo com sucesso!";
    nome.value = "";
    idade.value = "";
    isLoad.value = false;
    buscarUsuarios()
  } catch (error) {
    console.error("Erro ao salvar usuário:", error);
    mensagem.value = "Erro ao salvar usuário.";
  }
};
const buscarUsuarios = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "usuarios"));
    console.log(querySnapshot.docs)
    usuarios.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
  }
};

onMounted(buscarUsuarios);
</script>

<template>
  <div class="load" v-if="isLoad">Loading...</div>
  <div v-else>
    <h2>Adicionar Usuário</h2>
    <input type="text" v-model="nome" placeholder="Nome" />
    <input type="number" v-model="idade" placeholder="Idade" />
    <button @click="salvarUsuario">Salvar</button>
    <p>{{ mensagem }}</p>
    <div class="listaDeUsers">
      <h2>Users</h2>
      <ul>
        <li v-for="usuario in usuarios" :key="usuario.id">
          {{ usuario.nome }} - {{ usuario.idade }} anos
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.load {
  height: 100vh;
  width: 100vh;
}
</style>
