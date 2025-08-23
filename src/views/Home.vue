<script setup>
import Banner from "../components/Banner.vue";
import AboutComponent from "../components/AboutComponent.vue"
import Plans from "../components/Plans.vue"
import axios from "axios";
import {
  FilePlus,
  CheckCircle,
  LayoutDashboard,
  FileText,
  Check,
  Monitor,
  Smartphone,
  Globe,
  Server,
  Star,
  BrainCircuit,
  TextSearch
  
} from "lucide-vue-next";
import Footer from "../components/Footer.vue";
import Contact from "../components/Contact.vue";
</script>
<template>
  <Banner></Banner>
  <div class="containerCompont">
    <div class="publi">
      <h2>O que oferecemos?</h2>
      <p>
        Proteja, monitore e controle todas as suas licenças com uma solução
        segura e eficiente.
      </p>
    </div>
    <div class="cards">
      <div class="card">
        <div class="icon">
          <FilePlus
            class="w-10 h-10 text-blue-600 hover:text-blue-800 transition duration-300 iconsLucide"
          />
        </div>
        <h2>geração de licenças</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div class="card">
        <div class="icon">
          <CheckCircle
            class="w-10 h-10 text-blue-600 hover:text-blue-800 transition duration-300 iconsLucide"
          />
        </div>
        <h2>ativação e validação</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div class="card">
        <div class="icon">
          <LayoutDashboard
            class="w-10 h-10 text-blue-600 hover:text-blue-800 transition duration-300 iconsLucide"
          />
        </div>
        <h2>painel de administração</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div class="card">
        <div class="icon">
          <FileText
            class="w-10 h-10 text-blue-600 hover:text-blue-800 transition duration-300 iconsLucide"
          />
        </div>
        <h2>Relatorios</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>
  </div>
  <div class="containerSoluction linces">
    <div class="publi">
      <h2>Nossos Produtos</h2>
      <p>
        Proteja, monitore e controle todas as suas licenças com uma solução
        segura e eficiente.
      </p>
    </div>
    <div class="cardsLincenses">
      <div class="cardsLincense">
        <div class="iconsLinceses">
          <Monitor class="iconsLincese" />
        </div>
        <h3>Software de Gestão</h3>
        <div class="descL">
          Tenha um controle total das operações com integração de vendas, estoque e finanças.
        </div>
      </div>
      <div class="cardsLincense">
        <div class="iconsLinceses">
          <LayoutDashboard class="iconsLincese"/>
        </div>
        <h3>Dashboards</h3>
        <div class="descL">
          Dashboards personalizados para decisões estratégicas em tempo real.
        </div>
      </div>
      <div class="cardsLincense">
        <div class="iconsLinceses">
          <!-- <Globe class="iconsLincese" /> -->
          <BrainCircuit class="iconsLincese" />
        </div>
        <h3>Soluções de IA</h3>
        <div class="descL">
          Automatize processos e crie experiências inovadoras com tecnologias de ponta.
        </div>
      </div>
      <div class="cardsLincense">
        <div class="iconsLinceses">
          <TextSearch class="iconsLincese" />
          <!-- <Server class="iconsLincese" /> -->
        </div>
        <h3>Consultoria</h3>
        <div class="descL">
          Transformamos dados em estratégias para crescimento sustentável.
        </div>
      </div>
    </div>
    <!-- <RouterLink to="/">Ver mais</RouterLink> -->
  </div>

  <AboutComponent></AboutComponent>
  <Plans></Plans>
  
  <Contact></Contact>
  <div class="containerSoluction depoimento">
    <div class="publi">
      <h2>Depoimentos</h2>
      <p>
        Proteja, monitore e controle todas as suas licenças com uma solução
        segura e eficiente.
      </p>
    </div>
    <div class="dempt">
      <div class="demptItem">
        <div class="fotoPerfil"></div>
        <div class="textoDempt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          facilis quis itaque quae. Aut dolorem laboriosam ea et! Quisquam ut
          eius distinctio cupiditate beatae enim vero similique nam
          reprehenderit voluptatum.
        </div>
        <div class="estrelas">
          <Star class="fill-current"/>
          <Star class="fill-current"/>
          <Star class="fill-current"/>
        </div>
      </div>
      <div class="slideBall">
        <div class="bols"></div>
        <div class="bols"></div>
        <div class="bols"></div>
      </div>
    </div>
  </div>
  <div class="containerSoluction blog">
    <div class="publi">
      <h2>Blog</h2>
      <p>
        Proteja, monitore e controle todas as suas licenças com uma solução
        segura e eficiente.
      </p>
    </div>
    <div class="blogItems">
      <div class="blogItem">
        <img src="/public/mssions.png" alt="logo">
        <h3>
          Tipos de Licenças de Software
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium dolores aliquid
        </p>
      </div>
      <div class="blogItem">
        <img src="/public/not.png" alt="logo">
        <h3>
          Software Livre vs. Open Source
        </h3>
        <p>
          Muitas pessoas confundem software livre e código aberto, mas há..
        </p>
      </div>
      <div class="blogItem">
        <img src="/public/not2.png" alt="logo">
        <h3>
          Licenciamento de Software
        </h3>
        <p>
          Usar um software sem entender sua licença pode gerar complicações jurídicas. Aprenda os conceitos essenciais sobre direitos autorais, restrições de uso e como...
        </p>
      </div>
      <div class="blogItem">
        <img src="/public/mssions.png" alt="logo">
        <h3>
          Nova licença
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium dolores aliquid
        </p>
      </div>
    </div>
    <div class="verMaisL">
      <RouterLink to="/">Ver mais</RouterLink>
    </div>
    
  </div>
  <Footer></Footer>
</template>