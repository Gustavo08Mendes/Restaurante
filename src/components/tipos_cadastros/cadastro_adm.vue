<template>
    <div class="container">
      <h1>Cadastro de Administradores</h1>
      <div class="form">
        <form @submit="criar_item">
          <div class="form-group">
            <label for="nome">Nome Administrador</label>
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
            <label for="infoemacoes">Login</label>
            <input
              type="text"
              class="form-control"
              id="login"
              name="login"
              v-model="login"
              required
            />
          </div>
          <div class="form-group">
            <label for="senha">Senha</label>
            <input
              type="password"
              class="form-control"
              id="senha"
              name="senha"
              v-model="senha"
              required
            />
          </div>
          <div class="botao">
            <button type="submit" class="btn btn-primary">Cadastrar Administrador</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { AnOutlinedPlusCircle } from "@kalimahapps/vue-icons";
  export default {
    name: "cadastro_adm",
    data() {
      return {
        nome: "",
        login: "",
        senha: ""
      };
    },
    components: {
      AnOutlinedPlusCircle,
    },
    methods: {
      async criar_item(e) {
        e.preventDefault();
        const nome = this.nome;
        const login = this.login;
        const senha = this.senha;
        const status = "adm";
  
        const data ={
          nome,
          senha,
          login,
          status
        }
  
      const dataJson = JSON.stringify(data)    
  
      await fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: { "Content-Type" : "application/json" },
      body: dataJson
      });
  
      this.nome = "";
      this.preco = "";
      this.login = "";
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
  