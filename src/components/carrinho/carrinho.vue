<template>
  <main>
    <Alert v-show="alert == true" :texto="texto" />
    <div class="container-carrinho" id="container-carrinho">
      <div class="bnt_carrinho" id="bnt_carrinho">
        <div class="container-bnts">
          <div class="limpar" v-if="carrinho == true">
            <CaClean v-on="limpar" @click="$emit('limparCarrinho')" />
          </div>
          <div class="pedir" v-if="carrinho == true">
            <BsBasket3Fill @click="pedir" />
          </div>
          <div v-on="$emit('cleam')" @click="show_carrinho">
            <div class="quant">
              <p id="quant">{{ quant }}</p>
            </div>
            <BsCartPlusFill v-if="carrinho == false" />
            <BsCartXFill v-if="carrinho == true" />
          </div>
        </div>
      </div>
      <div class="conteudo">
        <h1>Carrinho</h1>
        <div class="container col-md-2">
          <form>
            <div class="form-group">
              <label for="tipo">Mesa</label>
              <input
                type="text"
                class="form-control"
                name="tipo"
                v-model="mesa"
                id="tipo"
                required
              />
            </div>
          </form>
        </div>
        <div class="container-itens">
          <div>
            <div
              v-for="itens_carrinho in itens_carrinho"
              :key="itens_carrinho"
              class="teste"
              v-show="itens_carrinho != ''"
            >
              <p v-show="itens_carrinho != ''">{{ itens_carrinho }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { BsCartPlusFill, BsCartXFill, CaClean } from "@kalimahapps/vue-icons";
import { BsBasket3Fill } from "@kalimahapps/vue-icons";
import Alert from "../alerts/sucesso.vue";
export default {
  name: "Carrinho",
  components: {
    BsCartPlusFill,
    BsCartXFill,
    BsBasket3Fill,
    CaClean,
    Alert,
  },
  data() {
    return {
      carrinho: false,
      itens_carrinho: [],
      alert: false,
      limpar: {
        click: this.limpar_Carrinho,
      },
    };
  },
  props: {
    quant: Number,
  },
  methods: {
    altera_dimensao() {
      var container_carrinho = document.getElementById("container-carrinho");
      if (this.carrinho == true) {
        container_carrinho.style.bottom = "-320px";
      } else {
        container_carrinho.style.bottom = "0px";
      }
    },
    async BuscarItens() {
      var itens_carrinho_list = JSON.parse(
        localStorage.getItem("itens_carrinho")
      );

      var id = itens_carrinho_list.id_itens;

      for (let i = 0; i < id.length; i++) {
        const req = await fetch("http://localhost:3000/item?id=" + id[i].id);
        var data = await req.json();
        this.itens_carrinho.push(data[0].nome);
      }
      this.itens_carrinho = this.itens_carrinho.reverse();
    },
    async show_carrinho() {
      this.itens_carrinho = [];
      this.altera_dimensao();
      this.carrinho = !this.carrinho;

      var itens_carrinho_list = JSON.parse(
        localStorage.getItem("itens_carrinho")
      );

      if (itens_carrinho_list == null) {
        return;
      } else {
        this.BuscarItens();
      }
    },
    cleam() {
      this.quant;
    },
    async pedir() {
      var quantidade = document.getElementById("quant").textContent;

      console.log(quantidade);

      if (quantidade != 0) {
        this.alert = true;
        this.texto = "Pedido encaminado para a cozinha!";
      } else {
        this.alert = true;
        this.texto = "Carrinho vazio! Adicione itens ao carrinho para pedir!";
        setTimeout(() => {
          this.alert = false;
        }, 5000);
        return;
      }

      var nome = this.itens_carrinho;

      for (let i = 0; i < nome.length; i++) {
        const data = {
          nome: nome,
          mesa: this.mesa,
        };

        console.log(data);

        var dataJson = JSON.stringify(data);
      }
      await fetch("http://localhost:3000/pedidos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      setTimeout(() => {
        this.alert = false;
      }, 5000);

      localStorage.removeItem("itens_carrinho");

      this.limpar_Carrinho();
      this.mesa = "";
    },
    limpar_Carrinho() {
      this.itens_carrinho = [];
    },
  },

  mounted() {},
};
</script>

<style scoped>
p {
  padding: 0;
}
.bnt_carrinho {
  display: flex;
  justify-content: center;
  font-size: 40px;
  width: 98vw;
  color: #fff;
  z-index: 10;
  background-color: #212529;
  height: 80px;
  border-radius: 10px;
}
.conteudo {
  background-color: rgb(238, 238, 238);
  width: 100%;
  height: 300px;
  border-radius: 10px;
  overflow: auto;
  overflow-y: scroll;
  transition: 0.5ms;
  margin-top: 10px;
}
.conteudo::-webkit-scrollbar {
  width: 16px;
  margin: 50px; /* width of the entire scrollbar */
}

.conteudo::-webkit-scrollbar-thumb {
  background-color: #212529;
  border-radius: 20px;
  border: 2px solid rgb(63, 138, 107);
}
.quant p {
  font-size: 20px;
  padding: 0;
  width: 85.5%;
  margin-left: -5px;
}
.pedir svg {
  margin: 10px 0px 0 -150px;
  font-size: 30px;
  cursor: pointer;
}
.limpar svg {
  margin: 10px -230px 0 0;
  font-size: 30px;
  cursor: pointer;
}
svg {
  margin: -70px 18px 0 0;
  cursor: pointer;
}
.container-bnts {
  height: 30px;
  display: flex;
}
.container-itens {
  display: flex;
  justify-content: center;
}

.teste {
  background-color: #212529;
  color: #fff;
  width: 500px;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 0;
  margin: 10px 0;
}

.container-carrinho {
  position: fixed;
  bottom: -320px;
  transition: all 0.5s ease;
  margin: 20px 20px;
  z-index: 10;
}
</style>
