<template>
  <main id="main">
    <div class="container">
      <h1>Pedidos</h1>
      <div class="row">
        <div class="col-sm-3 container-card" v-for="pedidos in getPedidos" :key="pedidos.id">
          <div class="teste card">
            <div class="card-body">
              <div class="mesa">
                <h5 class="card-title">MESA</h5>
              </div>
              <p class="pedidos">
                {{ pedidos.itens }}
              </p>
              <p class="contador">00:00:00</p>
              <a href="#" class="btn btn-danger">Cancelar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Nav />
  </main>
</template>

<script>
import Nav from "@/components/navegacao/nav.vue";

export default {
  name: "pedidos",
  components: {
    Nav,
  },

  data() {
    return {
      getPedidos: [],
      getItens: [],
    };
  },
  methods: {
    async bucarPedidos() {
      const req = await fetch("http://localhost:3000/pedidos");
      const data = await req.json();
      this.getPedidos = data.map((pedido) => ({
        id: pedido.id,
        quant: pedido.nome.length,
        itens: pedido.nome
      }));

    },
  },
  mounted() {
    this.bucarPedidos();
  },
};
</script>

<style scoped>
.mesa {
  background-color: rgb(215, 255, 214);
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 15px;
  border: darkseagreen 2px solid;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
.contador {
  margin: 10px 0;
}
.container-card{
  padding: 12px !important;
}
.card-body{
  min-height: 250px;
}
</style>
