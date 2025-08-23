<template>
  <div class="containerBr">
    <div class="barraLateral">
      <div class="logoMarcas">
        <img src="/public/centaur-logo.png" alt="logo" />
        <div class="dataUser">
          <RouterLink to="/">Centaur</RouterLink>
          <div class="nomeDash">{{nameCliente}}</div>
        </div>
      </div>
      <div class="linha"></div>
      <div class="linksMenu">
        <div class="cati">
          <h4>Home</h4>
          <div class="abrigaLink">
            <LucideLayoutDashboard class="iconAbrigaLink"/>
            <RouterLink to="/dash">Dashboard</RouterLink>
          </div>
        </div>

        <div class="cati">
          <h4>Paginas</h4>
          <div class="abrigaLink">
            <FileCheck class="iconAbrigaLink" />
            <RouterLink to="/licenses">Lincenças</RouterLink>
          </div>
          <div class="abrigaLink">
            <LifeBuoy class="iconAbrigaLink" />
            <RouterLink to="/supports">Suporte</RouterLink>
          </div>
        </div>

        <div class="cati">
          <h4>Usuario</h4>
          <div class="abrigaLink">
            <UserRound class="iconAbrigaLink" />
            <RouterLink to="/datauser">Dados</RouterLink>
          </div>
          <!-- <div class="abrigaLink">
            <Settings class="iconAbrigaLink" />
            <RouterLink to="/termos">Configurações</RouterLink>
          </div> -->
        </div>
      </div>
      <div class="counteBtnss counteBtns">
        <div class="abrigaLink" @click="logout" style="cursor: pointer;">
          <LogOut class="iconAbrigaLink" />
          <span>Sair</span>
          <!-- <RouterLink to="/termos">Logout</RouterLink> -->
        </div>
      </div>
    </div>

    <div class="bodyViewRouter">
      
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import {
  LucideLayoutDashboard,
  FileCheck,
  LifeBuoy,
  Settings,
  LogOut,
  UserRound,
} from "lucide-vue-next";
import { RouterLink, useRoute } from "vue-router";
import { useRouter } from "vue-router";

import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { ref } from "vue";
import BarsLatClient from "../components/BarsLatClient.vue"
import BarRigth from "../components/BarRigth.vue"

const changeRouter = ref(false)



const route = useRoute();
const routes = useRouter()

localStorage.getItem("usercentaurclientelogin")==null?changeRouter.value=true:changeRouter.value=false
if(changeRouter.value){
    routes.push("/login")
    console.log("Ir para a Login")
}


const nameCliente = ref("unkonown")


const storedData = localStorage.getItem("usercentaurclientelogin");
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

const logout = ()=>{
  localStorage.removeItem("usermartelclientelogin")
  routes.push("/")
}

</script>

<style scoped>
.bodyViewRouter {
  border: 0px solid red;
  width: 100%;
  height: 100vh;
  padding: 0px 0px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #eee;
  box-shadow: rgb(228, 228, 228) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}
</style>
    