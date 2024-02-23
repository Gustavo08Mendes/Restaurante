<template>
  <header>
    <div class="wrapper">
      <nav>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {
    this.$router.push('/login')
  }
};
</script>

<style>

  main{
    margin-left: 260px;
    text-align: center;
  }

</style>

