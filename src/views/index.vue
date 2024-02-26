<template>
  <div class="container-login">
    <div class="container">
      <h1>
        Autenticar <br />
        Usuário
      </h1>
      <form @submit="confirmLogin">
        <div class="form-group">
          <label for="login">Login</label>
          <input
            type="text"
            class="form-control"
            id="login"
            aria-describedby="login"
            name="login"
            v-model="login"
            placeholder="Login"
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
            placeholder="Senha"
          />
        </div>

        <button type="submit" class="btn btn-primary">Entrar</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      senha: "admin",
      login: "admin"
    };
  },
  methods: {
    async confirmLogin(e) {
      e.preventDefault();
      const senha = this.senha;
      const login = this.login;

      const req = await fetch("http://localhost:3000/usuarios");
      const data = await req.json();

      for (let i = 0; i < data.length; i++) {
        if (data[i].login == login && data[i].senha == senha) {
          localStorage.setItem("nome", data[i].nome);
          this.$router.push('/painel')
        }
      }

    },
  },
};
</script>

<style scoped>
.container-login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(
    circle at -7.92% 9.44%,
    #ddffff 0,
    #b1f0ff 16.67%,
    #7fd8ff 33.33%,
    #38beff 50%,
    #00a4f6 66.67%,
    #008ced 83.33%,
    #0076e4 100%
  );
}

.container {
  width: 400px;
  height: 500px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.15);
  color: rgb(38, 38, 112);
  border-radius: 10px;
  padding: 0 40px;
}
h1 {
  margin: 40px 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 30%);
}

button {
  margin-top: 40px;
}
label {
  margin: 10px 0;
}
nav{
  display: none !important;
}
</style>
