<template>
  <main id="main">
    <div class="container">
      <h1>Pedidos</h1>
      <div class="row">
        <div
          class="col-sm-3 container-card"
          v-for="pedidos in getPedidos"
          :key="pedidos.id"
        >
          <div class="teste card">
            <div class="card-body">
              <div class="mesa" id="mesa">
                <h5 class="card-title">MESA {{ pedidos.mesa }}</h5>
              </div>
              <p class="pedidos">
                {{ pedidos.itens }}
              </p>
              <p class="contador" id="contador">{{ timer }}</p>
              <a href="#" class="btn btn-danger" @click="cancelar(pedidos.id)"
                >Cancelar</a
              >
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
      timer: 0,
    };
  },
  methods: {
    async bucarPedidos() {
      const req = await fetch("http://localhost:3000/pedidos");
      const data = await req.json();
      this.getPedidos = data.map((pedido) => ({
        id: pedido.id,
        itens: pedido.nome,
        mesa: pedido.mesa,
      }));
    },
    step(timestamp) {
      var start = null;
      var contador = document.getElementById("contador");
      contador.style.position = "absolute";

      if (!start) start = timestamp;
      var progress = timestamp - start;
      contador.style.left = Math.min(progress / 10, 200) + "px";
      if (progress < 2000) {
        window.requestAnimationFrame(step);
      }
    },
    async cancelar(id) {
      await fetch(`http://localhost:3000/pedidos/${id}`, {
        method: "DELETE",
      });

      this.bucarPedidos();
    },
    timerss() {
      setInterval(function () {
        var contador = document.getElementById("contador").innerHTML;
        var mesa = document.getElementById("mesa");
        // var timestamp = new Date().getTime();
        var valorContador = parseInt(contador);
        document.getElementById("contador").innerHTML = valorContador + 1;
        if (contador == 10) {
          mesa.style.backgroundColor = "rgb(255, 180, 130)";
          mesa.style.borderColor = "rgb(255, 121, 31)";
        } else if (contador == 30) {
          mesa.style.backgroundColor = "rgb(255, 172, 172)";
          mesa.style.borderColor = "rgb(255, 116, 116)";
        }
      }, 1000);
    },
  },
  mounted() {
    this.bucarPedidos();
    this.timerss();
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
.container-card {
  padding: 12px !important;
}
.card-body {
  min-height: 250px;
}
</style>
