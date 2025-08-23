<script setup>
import { RouterLink, useRouter } from "vue-router";
import { ref } from "vue";
import { ChevronLeft } from "lucide-vue-next";
import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

const route = useRouter();
const email = ref("");
const password = ref("");
const page = ref(true);
const nameBtn = ref("Proximo");
const isLoad = ref(false);
const changeLoader = ref(true)



const objectUser = ref({
  name: "",
  email: "",
  number: "",
  password: "",
});

const salvarUsuario = async () => {
  console.log(page.value);
  if (page.value) {
    page.value = false;
    nameBtn.value = "Criar";
  } else {
    changeLoader.value = !changeLoader.value
    isLoad.value = true;
    try {
      await addDoc(collection(db, "usermartelclient"), {
        ...objectUser.value
      });
      isLoad.value = false;
      changeLoader.value = !changeLoader.value
      route.push("/login")
    //   buscarUsuarios();
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
      changeLoader.value = !changeLoader.value
    }
    console.log(objectUser.value);
  }
};

const back = () => {
  console.log("Correct function");
  page.value = true;
  nameBtn.value = "Proximo";
};
</script>


<template>
  <main class="loginForm">
    <form action="#" @submit.prevent="salvarUsuario">
      <div class="logoLogin">
        <img src="/public/centaur-logo.png" alt="logo" />
      </div>
      <h1>Bem vindo a <span>centaur</span></h1>
      <h4>Preencha os campos</h4>
      <div class="formsIn" v-if="page">
        <input
          type="text"
          name=""
          id=""
          placeholder="Nome completo"
          v-model="objectUser.name"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          v-model="objectUser.email"
        />
      </div>
      <div class="formsIn" v-else>
        <input
          type="tel"
          name=""
          id=""
          placeholder="Telefone"
          v-model="objectUser.number"
        />
        <input
          type="password"
          name="pass"
          id="pass"
          placeholder="Senha"
          v-model="objectUser.password"
        />
      </div>
      <div class="labelS">
        <div class="senhaE"><a href="#"> Esqueceste a senha? </a></div>
        <div class="contaE">
          <span>Já tens uma</span>
          <RouterLink to="/login">Conta?</RouterLink>
        </div>
      </div>
      <input type="submit" :value="nameBtn" v-if="changeLoader"/>
      <div class="containerLoader" v-else>
        <div class="loader"></div>
      </div>
      <div class="back" v-if="page == false">
        <button @click="back"><ChevronLeft /> <span>Voltar</span></button>
      </div>
    </form>
  </main>
</template>
<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
}
</style>