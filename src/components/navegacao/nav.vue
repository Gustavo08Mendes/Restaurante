<template>
  <div>
    <button id="btn-sideBar" @click="sideBar">
      <MiSolidMenuExpandLeft v-if="verSideBar == true" /><MiMenuExpandRight
        v-if="verSideBar == false"
      />
    </button>
    <nav v-if="verSideBar == true">
      <div>
        <header>
          <h1>Restaurante</h1>
        </header>
        <div class="menu">
          <RouterLink class="link" to="/Home"><AnFilledHome />Home</RouterLink>
          <RouterLink class="link" to="/cadastros"
            ><FlFilledPersonAdd />Cadastros</RouterLink
          >
          <RouterLink class="link" to="/cardapio"
            ><MdTwoToneRestaurantMenu />Cardapio</RouterLink
          >
          <RouterLink class="link" to="/cardapio"
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
} from "@kalimahapps/vue-icons";
export default {
  name: "Nav",
  data() {
    return {
      verSideBar: true,
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
  },
  methods: {
    sideBar() {
      this.verSideBar = !this.verSideBar;
      const btnSideBar = document.getElementById("btn-sideBar");
      const main = document.getElementsByTagName("main");
      if (this.verSideBar == false) {
        btnSideBar.style.left = "30px";
      } else {
        btnSideBar.style.left = "260px";
      }
    },
  },
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
  left: 0;
  transition: 2s;
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
  left: 260px;
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
}
#btn-sideBar svg {
  margin: 0px;
  padding: 0 !important;
  font-size: 40px;
}
</style>
