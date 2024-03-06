<template>
    <main id="main">
        <div>
            <Cadastro_itens v-show="cadastro_itens == true" />
            <Cadastro_adm v-show="cadastro_adm == true" />
        </div>
        <Nav />
    </main>

</template>

<script>
import Nav from "@/components/navegacao/nav.vue";
import Cadastro_itens from "@/components/tipos_cadastros/cadastro_itens.vue";
import Cadastro_adm from "@/components/tipos_cadastros/cadastro_adm.vue";
export default {
    name: "Cadastros",
    data() {
        return {
            cadastro_itens: false,
            cadastro_adm: false
        }
    },
    components: {
        Nav,
        Cadastro_itens,
        Cadastro_adm
    },
    created() {
        var url_atual = window.location.href;
        const chars = url_atual.split('?');

        if (window.location.href.indexOf("itens") == true) {
            // console.log("Encontrou!")
        }
        if (chars[1] === "itens") {
            this.cadastro_itens = true;
            this.cadastro_adm = false;
        } else if (chars[1] === "adm") {
            this.cadastro_adm = true;
            this.cadastro_itens = false;
        }
    }
}
</script>

<style scoped>
main{
    transition: all 0.5s ease;
} 
</style>
