<template>
  <div class="container">
    <h1>Cadastro de itens</h1>
    <div class="form">
      <form @submit="criar_item">
        <div class="form-group">
          <label for="nome">Nome Item</label>
          <input
            type="text"
            class="form-control"
            name="nome"
            v-model="nome"
            id="nome"
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
          />
        </div>
        <div class="form-group">
          <label for="tipo_item">Tipo de item</label>
          <input
            type="text"
            class="form-control"
            id="tipo_item"
            name="tipo_item"
            v-model="tipo_item"
          />
          <div class="cadastro_tipo_item">
            <button type="submit" class="bnt-add-tipo">
              <AnOutlinedPlusCircle />
            </button>
          </div>
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
export default {
  name: "cadastro_itens",
  data() {
    return {
      nome: "",
      infoemacoes: "",
      preco: "",
      tipo_item: "",
    };
  },
  components: {
    AnOutlinedPlusCircle,
  },
  methods: {
    async criar_item(e) {
      e.preventDefault();
      const nome = this.nome;
      const infoemacoes = this.infoemacoes;
      const preco = this.preco;
      const tipo_item = this.tipo_item;

      const data ={
        nome,
        infoemacoes,
        preco,
        tipo_item
      }

    const dataJson = JSON.stringify(data)    

    await fetch("http://localhost:3000/item", {
    method: "POST",
    headers: { "Content-Type" : "application/json" },
    body: dataJson
    });

    this.nome = "";
    this.infoemacoes = "";
    this.preco = "";
    this.tipo_item = "";
    },
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
form{
    text-align: left;
}
</style>
