<template>
  <form @submit="criar_tipo_item">
    <div class="form-group">
      <label for="tipo">Tipo Item</label>
      <input
        type="text"
        class="form-control"
        name="tipo"
        v-model="tipo"
        id="tipo"
        required
      />
      <button type="submit" class="btn btn-primary">Registrar Item</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "cadastro_tipo",
  methods: {
    async criar_tipo_item(e) {
      e.preventDefault();
      const tipo_item = this.tipo;
      const data_tipo_item = {
        tipo_item,
      };

      const dataJson_tipo_item = JSON.stringify(data_tipo_item);

      await fetch("http://localhost:3000/tipo_item", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson_tipo_item,
      });
    },
  },
};
</script>

<style scoped>
button {
  margin: 20px 0 80px 0;
}
</style>
