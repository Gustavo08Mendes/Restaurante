<template>
    <main>
        <div class="container">
            <h1>Cardápio</h1>
            <div class="botoes">
                <button v-for="tipos_itens in tipos_itens" :key="tipos_itens.id" @click="buscaPedido(tipos_itens.id)">{{
                    tipos_itens.nome }}</button>
            </div>
            <div class="container_itens">
                <div>
                    <div v-for="(item, id) in itenss" :key="id" >
                        <div class="itens">
                            <p class="infos">{{ item.nome }}</p>
                            <p class="infos">{{ item.infoemacoes }}</p>
                            <p class="infos">{{ item.preco }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <Nav />
</template>

<script>
import Nav from "@/components/navegacao/nav.vue"

export default {
    name: "Cardapio",
    components: {
        Nav
    },
    data() {
        return {
            tipos_itens: [],
            itenss: []
        }
    },
    methods: {
        async getPedidos() {
            const req = await fetch("http://localhost:3000/tipo_item");
            const data = await req.json();

            console.log(data);

            this.tipos_itens = data.map(tipos_itens => ({
                id: tipos_itens.id,
                nome: tipos_itens.tipo_item
            }));
        },
        async buscaPedido(id) {
            const req = await fetch("http://localhost:3000/item?id_tipo=" + id);
            const data = await req.json();

            this.itenss = data.map(itenss => ({
                id: itenss.id,
                nome: itenss.nome,
                infoemacoes: itenss.infoemacoes,
                preco: itenss.preco
            }));
        }
    },
    mounted() {
        this.getPedidos();
    }

}
</script>

<style scoped>
button {
    border: none;
    margin: 0 10px;
    background-color: #212529;
    padding: 10px 30px;
    color: #fff;
    text-transform: uppercase;
    border-radius: 5px;
    cursor: pointer;
    transition: .5s;
    font-weight: bold;
    letter-spacing: 1px;
}

button:hover {
    background-color: #00a4f6;
}

.itens {
    display: flex;
}

.container_itens, .titulos{
    display: flex;
    justify-content: center;
    align-items: center;
}

.infos{
    padding: 10px 30px;
    margin: 20px 10px;
}
</style>