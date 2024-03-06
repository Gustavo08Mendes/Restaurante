<template>
  <main id="main">

    <div class="container">
      <h1>Cardápio</h1>
      <div class="botoes">
        <button
          v-for="tipos_itens in tipos_itens"
          :key="tipos_itens.id"
          @click="buscaPedido(tipos_itens.id)"
        >
          {{ tipos_itens.nome }}
        </button>
      </div>
      <div class="container_itens">
        <div>
          <div
            v-for="(item, id) in itenss"
            :key="id"
            @click="registraCarrinho(item.id)"
          >
            <div class="itens">
              <div class="img">
                <MiSolidBurger />
              </div>
              <div class="itens_info">
                <div class="iten">
                  <p class="infos">{{ item.nome }}</p>
                  <p class="infos">{{ item.preco }}</p>
                </div>
                <div class="info">
                  <p class="infos">{{ item.infoemacoes }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Carrinho :quant="quant" />
    <Nav />
  </main>

</template>

<script>
import Nav from "@/components/navegacao/nav.vue";
import { MiSolidBurger } from "@kalimahapps/vue-icons";
import Carrinho from "@/components/carrinho/carrinho.vue";

export default {
  name: "Cardapio",
  components: {
    Nav,
    MiSolidBurger,
    Carrinho,
  },
  data() {
    return {
      tipos_itens: [],
      itenss: [],
      quant: 0
    };
  },
  methods: {
    async getPedidos() {
      const req = await fetch("http://localhost:3000/tipo_item");
      const data = await req.json();

      this.tipos_itens = data.map((tipos_itens) => ({
        id: tipos_itens.id,
        nome: tipos_itens.tipo_item,
      }));
    },
    async buscaPedido(id) {
      const req = await fetch("http://localhost:3000/item?id_tipo=" + id);
      const data = await req.json();

      this.itenss = data.map((itenss) => ({
        id: itenss.id,
        nome: itenss.nome,
        infoemacoes: itenss.infoemacoes,
        preco: itenss.preco,
      }));
    },
    registraCarrinho(item) {

      console.log(item);

      var itens_carrinho = JSON.parse(
        localStorage.getItem("itens_carrinho")
      ) || { id_itens: [] };

      // Adiciona o novo item à lista
      itens_carrinho.id_itens.push({
        id: item
      });

      localStorage.setItem("itens_carrinho", JSON.stringify(itens_carrinho));

      var lista_pessoas = JSON.parse(localStorage.getItem("itens_carrinho"));

      console.log(lista_pessoas.id_itens.length);

      this.quant = lista_pessoas.id_itens.length;

      console.log("Salva com sucesso.");
    },
  },
  mounted() {
    this.getPedidos();
  },
};
</script>

<style scoped>
main {
  transition: all 0.5s ease;
}
button {
  border: none;
  margin: 0 10px;
  background-color: #212529;
  padding: 10px 30px;
  color: #fff;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
  font-weight: bold;
  letter-spacing: 1px;
}

button:hover {
  background-color: #00a4f6;
}

.container_itens,
.titulos {
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  padding: 0;
  margin: 0;
}

.itens {
  display: flex;
  margin: 20px 0;
  width: 500px;
  background-color: rgb(236, 236, 236);
  padding: 20px 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 10px rgb(146, 146, 146);
  cursor: pointer;
}

.img {
  width: 150px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.iten {
  display: flex;
  width: 100%;
}
.iten p {
  width: 50%;
}
.iten p:last-child {
  text-align: right;
}
.info {
  height: 80%;
}
.info p {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.itens_info {
  width: 80%;
}
svg {
  font-size: 80px;
}
</style>
