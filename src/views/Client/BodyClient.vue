<template>
  <div class="containerBodyClient">
    <div class="graphicsClient">
      <GraphcsClient/>
      <GraphicPizzaCLient/>
    </div>
    <div class="lincencesCLient">
      <div class="minhasLincencas">
        <h3>Minhas Lincenças</h3>
        <table >
          <thead>
            <th>ID Licença</th>
            <th>Nome</th>
            <th>Data de Aqui...</th>
            <th>Data de Expi...</th>
            <th>Status</th>
            <th>Ações</th>
          </thead>
          <tr>
            <td>2</td>
            <td>S. Gestão</td>
            <td>2025-01-01</td>
            <td>-</td>
            <td class="ativeL statusL">
              <span>
                Ativa
              </span>
            </td>

            <td>
              <div class="actions">
                <Eye class="iconActions"/>
                <ToggleRight class="iconActionsActiveviewIactiv"/>
              </div>
              
            </td>
          </tr>

          <tr>
            <td>22</td>
            <td>S. Dashboard</td>
            <td>2025-02-01</td>
            <td>2025-04-01</td>
            <td class="inativeL statusL">
              <span>
                Expirada
              </span>
            </td>

            <td>
              <div class="actions">
                <Eye class="iconActions"/>
                <ToggleLeft class="iconActionsActiveviewActiv"/>
              </div>
              
            </td>
          </tr>

          <tr>
            <td>45</td>
            <td>Gestão</td>
            <td>2025-02-01</td>
            <td>2025-04-01</td>
            <td class="ativeL statusL">
              <span>
                Ativa
              </span>
            </td>

            <td>
              <div class="actions">
                <Eye class="iconActions"/>
                <ToggleRight class="iconActionsActiveviewIactiv"/>
              </div>
              
            </td>
          </tr>

          <tr>
            <td>22</td>
            <td>S. Dashboard</td>
            <td>2025-02-01</td>
            <td>2025-04-01</td>
            <td class="inativeL statusL">
              <span>
                Expirada
              </span>
            </td>

            <td>
              <div class="actions">
                <Eye class="iconActions"/>
                <ToggleLeft class="iconActionsActiveviewBuy"/>
              </div>
              
            </td>
          </tr>

          <tr>
            <td>45</td>
            <td>Gestão</td>
            <td>2025-02-01</td>
            <td>2025-04-01</td>
            <td class="inativeL statusL">
              <span>
                Expirada
              </span>
            </td>
            <td>
              <div class="actions">
                <Eye class="iconActions"/>
                <ToggleLeft class="iconActionsActiveviewBuy"/>
              </div>
              
            </td>
          </tr>

          
        </table>
      </div>
      <div class="dispoLincencas">
        <h3>Lincenças Disponiveis</h3>
        <table>
          <thead>
            <th>ID Licença</th>
            <th>Nome</th>
            <th>Plano</th>
            <th>Preço</th>
            <th>Usuários</th>
            <th>Descrição</th>
            <th>Ações</th>
          </thead>
          <tr>
            <td>2</td>
            <td>Plano Básico</td>
            <td>9999 MT</td>
            <td>-</td>
            <td>1</td>
            <td class="descTb">Acesso ao dashboard básico</td>
            <td>
              <div class="actions">
                <Eye class="iconActions"/>
                <ShoppingCart  class="iconActionsActiveviewBuy"/>
              </div>
              
            </td>
          </tr>

          <tr>
            <td>32</td>
            <td>Plano Básico</td>
            <td>9999 MT</td>
            <td>-</td>
            <td>1</td>
            <td class="descTb">Acesso ao dashboard básico</td>
            <td>
              <div class="actions">
                <Eye class="iconActions"/>
                <ShoppingCart  class="iconActionsActiveviewBuy"/>
              </div>
              
            </td>
          </tr>

          <tr>
            <td>25</td>
            <td>Plano Básico</td>
            <td>9999 MT</td>
            <td>-</td>
            <td>1</td>
            <td class="descTb">Acesso ao dashboard básico</td>
            <td>
              <div class="actions">
                <Eye class="iconActions"/>
                <ShoppingCart  class="iconActionsActiveviewBuy"/>
              </div>
              
            </td>
          </tr>

          <tr>
            <td>66</td>
            <td>Plano Básico</td>
            <td>9999 MT</td>
            <td>-</td>
            <td>1</td>
            <td class="descTb">Acesso ao dashboard básico</td>
            <td>
              <div class="actions">
                <Eye class="iconActions"/>
                <ShoppingCart  class="iconActionsActiveviewBuy"/>
              </div>
              
            </td>
          </tr>

          <tr>
            <td>23</td>
            <td>Plano Básico</td>
            <td>9999 MT</td>
            <td>-</td>
            <td>1</td>
            <td class="descTb">Acesso ao dashboard básico</td>
            <td>
              <div class="actions">
                <Eye class="iconActions"/>
                <ShoppingCart  class="iconActionsActiveviewBuy"/>
              </div>
              
            </td>
          </tr>
        </table>
      </div>
    </div>
    <SupportContact/>
  </div>
</template>

<script setup>
import SupportContact from "./SupportContact.vue";
import GraphcsClient from "./GraphcsClient.vue"
import GraphicPizzaCLient from "./GraphicPizzaCLient.vue"
import { Pencil, Eye, EyeOff, ToggleLeft, ToggleRight, ShoppingCart  } from "lucide-vue-next";
</script>