<script setup>
import { RouterLink, useRouter } from "vue-router";
import { db } from "../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ref } from "vue";

const route = useRouter();
const email = ref("")
const password = ref("")
const usuarios = ref()
const changeRouter = ref(false)
const changeLoader = ref(true)

localStorage.getItem("usermartelclientelogin")==null?changeRouter.value=false:changeRouter.value=true

if(changeRouter.value){
    // route.push("/dash")
    console.log("Ir para a dash")
}

console.log(`Dado storage: ${localStorage.getItem("usermartelclientelogin")}`)
console.log(`changeRouter: ${changeRouter.value}`)



//logout
//localStorage.removeItem("chave");


const buscarUsuarios = async () => {
    changeLoader.value = false
   try {
        const q = query(
            collection(db, "usermartelclient"),
            where("email", "==", email.value),
            where("password", "==", password.value)
        );

        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            usuarios.value = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
             localStorage.setItem("usermartelclientelogin", usuarios.value[0].id);
             changeLoader.value = true
             route.push("/dash")
        } else {
            console.log("Credenciais Invalidas")
            changeLoader.value = true
        }
    } catch (e) {
        console.error("Erro", e)
        changeLoader.value = true
    }
};


</script>


<template>
      <main class="loginForm">
        <form action="#" @submit.prevent="buscarUsuarios">
            <div class="logoLogin">
                <img src="/public/centaur-logo.png" alt="logo" />
            </div>
            <h1>
                Bem vindo de volta
            </h1>
            <h4>
                Preencha com suas credenciais
            </h4>
            <div class="formsIn">
                <input type="email" name="email" id="email" placeholder="Email" v-model="email">
                <input type="password" name="pass" id="pass" placeholder="Senha" v-model="password">
            </div>
            <div class="labelS">
                <div class="senhaE"> <a href="#">
                    Esqueceste a senha?
                </a></div>
                <div class="contaE">
                    <span>Não tens uma</span>
                    <RouterLink to="/sigup">Conta?</RouterLink>
                </div>
               
                 
            </div>
            <input type="submit" value="Entrar" v-if="changeLoader">
            <div class="containerLoader" v-else>
                <div class="loader"></div>
            </div>
            
        </form>
      </main>
</template>
<style scoped>
main{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #f9f9f9;
}


</style>