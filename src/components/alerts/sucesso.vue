<template>
    <div v-show="alert == true" class="container-sucesso" id="container-sucesso">
        <div class="container-conteudo" id="container-conteudo">
            <div class="imagem">
                <GlStatusSuccess />
            </div>
            <div class="conteudo">
                <p>{{ texto }}</p>
            </div>
            <div class="fechar">
                <button @click="fechar" ><BsXLg /></button>
            </div>
        </div>
    </div>
</template>

<script>
import { GlStatusSuccess, BsXLg } from "@kalimahapps/vue-icons";
export default {
    name: "Sucesso",
    components: {
        GlStatusSuccess,
        BsXLg
    },
    props: {
        texto: String,
    },
    data() {
        return {
            alert: false,
        }
    },
    methods: {
        fechar() {
        }
    }
}
</script>

<style scoped>
    .container-conteudo{
        display: flex;
        background-color: rgb(234, 255, 234);
        width: 340px;
        justify-content: center;
        align-items: center;
        padding: 10px 5px;
        border: 2px solid rgb(197, 255, 197);
        border-radius: 7px;
        transition: all 2s ease;
   }
    button{
        border: none;
        background: transparent;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .fechar, .imagem, .conteudo{
        margin: 0 10px;
    } 
    .imagem svg{
        font-size: 30px;
        color: rgb(41, 168, 41);
    }
    p{
        margin: 0;
        padding: 0;
    }
    .container-sucesso{
        position: fixed;
        top: 30px;
        right: 60px;
    }
</style>