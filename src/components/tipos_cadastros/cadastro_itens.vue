<template>
  <div class="container">
    <h1>Cadastro de itens</h1>
    <Alert v-show="alert == true" />
    <div class="form">
      <button @click="form_tipo" class="btn btn-primary">
        Exibir cadastro tipo itens
      </button>
      <Cadastro_tipo v-show="cadastro_tipo_item == false" />
      <form @submit="criar_item">
        <div class="form-group">
          <label for="nome">Nome Item</label>
          <input
            type="text"
            class="form-control"
            name="nome"
            v-model="nome"
            id="nome"
            required
          />
        </div>
        <div class="form-group">
          <label for="infoemacoes">Informações</label>
          <input
            type="text"
            class="form-control"
            id="infoemacoes"
            name="infoemacoes"
            v-model="infoemacoes"
            required
          />
        </div>
        <div class="form-group">
          <label for="preco">Preço</label>
          <input
            type="text"
            class="form-control"
            id="preco"
            name="preco"
            v-model="preco"
            required
          />
        </div>
        <div class="form-group">
          <label for="tipo_item">Tipo de item</label>
          <select @click="buscar_itens" id="tipo_item" class="form-control" required>
            <option selected>Escolha o tipo do item</option>
            <option
              v-for="tipo_item in itens"
              :key="tipo_item.id"
              :value="tipo_item.tipo_item"
              name="tipo_item"
            >
              {{ tipo_item.tipo_item }}
            </option>
          </select>
        </div>
        <div class="botao">
          <button type="submit" class="btn btn-primary">Criar Item</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { AnOutlinedPlusCircle } from "@kalimahapps/vue-icons";
import Cadastro_tipo from "./cadastro_tipo.vue";
import Alert from "../alerts/sucesso.vue";
export default {
  name: "cadastro_itens",
  data() {
    return {
      nome: "",
      infoemacoes: "",
      preco: "",
      itens: [],
      cadastro_tipo_item: true,
      alert: false,
    };
  },
  components: {
    AnOutlinedPlusCircle,
    Cadastro_tipo,
    Alert,
  },
  methods: {
    async criar_item(e) {
      e.preventDefault();

      const nome = this.nome;
      const infoemacoes = this.infoemacoes;
      const preco = this.preco;
      const tipo_item = document.getElementById("tipo_item").value;

      //busca todos os tipos de item no banco

      const req = await fetch("http://localhost:3000/tipo_item");
      const data_id_tipo = await req.json();

      //busaca o id do tipo de item

      for (let i = 0; i < data_id_tipo.length; i++) {
        if (data_id_tipo[i].tipo_item == tipo_item) {
          var id_tipo = data_id_tipo[i].id;
        }
      }

      //cadasra um item com o id do tipo tipo de item

      const data = {
        nome,
        infoemacoes,
        preco,
        id_tipo,
      };

      const dataJson = JSON.stringify(data);

      await fetch("http://localhost:3000/item", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      this.nome = "";
      this.infoemacoes = "";
      this.preco = "";
      this.tipo_item = "";
      this.alert = true;

      this.alert = true;
      setTimeout(() => {
        this.alert = false;
      }, "5000");
    },
    async buscar_itens() {
      const req = await fetch("http://localhost:3000/tipo_item");
      const data_id_tipo = await req.json();

      this.itens = data_id_tipo.map((iten) => ({
        id: iten.id,
        tipo_item: iten.tipo_item,
      }));
    },
    form_tipo() {
      this.cadastro_tipo_item = !this.cadastro_tipo_item;
    },
  },
  mounted() {
    this.buscar_itens();
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
}

.teste {
  display: flex;
}

.botao {
  text-align: center;
  margin-top: 40px;
}

.bnt-add-tipo {
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 5px 5px;
  border-radius: 5px;
  margin: 5px 0;
}

.form {
  margin-top: 80px;
}

form {
  text-align: left;
}
</style>
