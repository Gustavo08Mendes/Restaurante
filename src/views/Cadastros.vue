<template>
    <main>
        <div>
            <Cadastro_itens v-if="cadastro_itens === true" />
            <Cadastro_adm v-else />
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
                cadastro_itens: true
            }    
        },
        components: {
            Nav,
            Cadastro_itens,
            Cadastro_adm
        }
    }
</script>

