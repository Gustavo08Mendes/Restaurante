<template>
  <div>
    <button id="btn-sideBar" @click="sideBar">
      <MiMenuExpandRight
      v-if="verSideBar == true"
      /><MiSolidMenuExpandLeft  v-else />
    </button>
    <nav @mouseleave="verCadastros = false" id="nav">
      <div>
        <header>
          <h1>Restaurante</h1>
        </header>
        <div class="menu">
          <RouterLink class="link" to="/painel"><AnFilledHome />Painel</RouterLink>
          <button @mouseover="verCadastros = true" ><BxSolidAddToQueue  />Cadastros</button>
          <RouterLink v-if="verCadastros == true" @mouseover="verCadastros = true" class="link_subMenu" to="/cadastros?itens"
            ><FlFilledTrayItemAdd />Cadastros Itens</RouterLink
          >
          <RouterLink v-if="verCadastros == true" @mouseover="verCadastros = true" class="link_subMenu" to="/cadastros?adm"
            ><FlFilledPersonAdd />Cadastros Adms</RouterLink
          >
          <RouterLink class="link" to="/cardapio"
            ><MdTwoToneRestaurantMenu />Cardápio</RouterLink
          >
          <RouterLink class="link" to="/pedidos"
            ><FlFilledTextBulletListSquare />Pedidos</RouterLink
          >
          <RouterLink class="link" to="/login"
            ><MiSolidDoorExit />Sair</RouterLink
          >
        </div>
      </div>
    </nav>
    <RouterView />
  </div>
</template>

<script>
import {
  AnFilledHome,
  FlFilledPersonAdd,
  MdTwoToneRestaurantMenu,
  FlFilledTextBulletListSquare,
  MiSolidDoorExit,
  MiSolidMenuExpandLeft,
  MiMenuExpandRight,
  BxSolidAddToQueue,
  FlFilledTrayItemAdd
} from "@kalimahapps/vue-icons";
export default {
  name: "Nav",
  data() {
    return {
      verSideBar: true,
      verCadastros: false
    };
  },
  components: {
    AnFilledHome,
    FlFilledPersonAdd,
    MdTwoToneRestaurantMenu,
    FlFilledTextBulletListSquare,
    MiSolidDoorExit,
    MiSolidMenuExpandLeft,
    MiMenuExpandRight,
    BxSolidAddToQueue,
    FlFilledTrayItemAdd
  },
  methods: {
    sideBar() {
      this.verSideBar = !this.verSideBar;
      const dragHandle = document.getElementById("btn-sideBar");
      const sideMenu = document.getElementById("nav");
      const main = document.getElementById("main");


      if (this.verSideBar == true) {
        dragHandle.style.left = "20px";
        sideMenu.style.left = "-250px";
        main.style.marginLeft = "0px";
      } else {
        dragHandle.style.left = "260px";
        sideMenu.style.left = "0px";
        main.style.marginLeft = "260px";
      }
    },

  },
  mounted() {
    if (this.verCadastros == true) {
      
    }
  }
};
</script>
<style scoped>
nav {
  width: 250px;
  height: 100vh;
  background-color: #212529;
  color: #fff;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: -250px;
  transition: left .5s ease;
}
header {
  text-align: center;
  padding: 20px 0px;
  border-bottom: #b1b1b1 solid 0.3px;
}
h1 {
  font-size: 30px;
}
.menu {
  text-align: left;
  padding: 0 10px;
}
.link {
  display: block;
  padding: 10px 5px;
  margin: 10px 0;
  text-decoration: none;
  color: #fff;
  border-radius: 5px;
}
.link:hover {
  background-color: #00a4f6 !important;
}
svg {
  margin: -5px 10px 0 0;
  font-size: 20px;
}
#btn-sideBar {
  position: fixed;
  top: 20px;
  left: 20px;
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #212529;
  color: #fff;
  font-size: 60px;
  z-index: 999;
  border-radius: 5px;
  transition: left 0.5s ease;
}
#btn-sideBar svg {
  margin: 0px;
  padding: 0 !important;
  font-size: 40px;
}
button{
  border: none;
  background-color: #212529;
  color: #fff;
  width: 100%;
  padding: 10px 5px;
  border-radius: 5px;
  text-align: left;
}
button:hover{
  background-color: #00a4f6;
}
.link_subMenu{
  display: block;
  padding: 10px 5px;
  margin: 10px 0 0 20px;
  text-decoration: none;
  color: #fff;
  border-radius: 5px;
}
.link_subMenu:hover{
  background-color: #2d9c3c !important;
}

main{
    transition: all 0.5s ease;
} 
</style>

