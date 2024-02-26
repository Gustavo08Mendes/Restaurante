<template>
  <header></header>

  <main>
    <div class="container-saudacao">
      <h1>Bem vindo Administrador {{ nome }}</h1>
    </div>
    <div class="conatainer-cards">
      <Card />
    </div>
  </main>
  <Nav />
</template>

<script>
import Nav from "@/components/navegacao/nav.vue";
import Card from "@/components/card/card.vue";
export default {
  name: "Painel",
  data() {
    return {
      nome: "",
    };
  },
  components: {
    Nav,
    Card,
  },
  mounted() {
    const nome = localStorage.getItem("nome");
    this.nome = nome;
  },
};
</script>

<style scoped>
.conatainer-cards {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container-saudacao {
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  margin-top: 50px;
}

</style>
