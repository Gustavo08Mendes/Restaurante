<template>
    <div class="container-cards">
      <router-link
        class="card-link"
        v-for="card in cards" :key="card.to"
        :to="card.to"
      >
        <div class="card">
          <h1>{{ card.title }}</h1>
        </div>
      </router-link>
    </div>
  </template>
  
  <script>
  import { AnFilledHome } from "@kalimahapps/vue-icons";
  export default {
    name: "Card",
    components: {
      AnFilledHome,
    },
    data() {
      return {
        cards: [],
      };
    },
    methods: {
      async gerarCard() {
        const req = await fetch("http://localhost:3000/cards");
        const data = await req.json();
  
        this.cards = data.map(card => ({
          to: card.to,
          title: card.title,
          img: card.img,
        }));
      },
    },
    mounted() {
      this.gerarCard();
    },
  };
  </script>
  
  <style scoped>
  .card {
    width: 200px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #192852;
    color: white;
    font-size: 40px;
    transition: .7s;
  }
  
  .card:hover {
    background-color: #4973e7;
  }
  
  .card-link {
    text-decoration: none;
  }

  .container-cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 40px;
  }
  </style>
  