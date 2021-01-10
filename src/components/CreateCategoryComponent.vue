<template>
  <b-container>
    <b-form @submit="addCategory">
      <b-form-group label="Catégorie">
        <b-form-input
          type="text"
          placeholder="Catégorie"
          v-model="productype.category"
          required
        />
      </b-form-group>
      <b-form-group label="Sous catégorie">
        <b-form-input
          type="text"
          placeholder="Sous catégorie"
          v-model="productype.subcategory"
          required
        />
      </b-form-group>

      <b-button
        type="submit"
        variant="primary"
        class="btn btn-dark btn-lg btn-block"
        >Ajouter</b-button
      >
    </b-form>
  </b-container>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "CreateCategory",
  data() {
    return {
      productype: {
        category: "",
        subcategory: "",
      },
    };
  },
  methods: {
    addCategory: function () {
      let apiURL = `http://localhost:4000/api/category/`;
      console.log(this.productype);
      axios
        .post(apiURL, this.productype)
        .then((res) => {
          if (res.data) {
            alert("Category operation success !");
          } else {
            alert("Category operation failed !");
          }
          // this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
