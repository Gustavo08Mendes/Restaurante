<template>
    <main>
        <div>
            <Cadastro_itens v-show="cadastro_itens === true" />
            <Cadastro_adm v-show="cadastro_adm === true" />
        </div>
    </main> 
    <Nav />
</template>

<script>
    import Nav from "@/components/navegacao/nav.vue";
    import Cadastro_itens from "@/components/tipos_cadastros/cadastro_itens.vue";
    import Cadastro_adm from "@/components/tipos_cadastros/cadastro_adm.vue";
    export default {
        name: "Cadastros",
        data() {
            return {
                cadastro_itens: true,
                cadastro_adm: false
            }    
        },
        components: {
            Nav,
            Cadastro_itens,
            Cadastro_adm
        }
    }
</script>

