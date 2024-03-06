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
    text-align: center;
    transition: all 0.5s ease;
  }

</style>

