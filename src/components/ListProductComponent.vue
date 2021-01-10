<template>
  <div>
    <b-container fluid class="bv-example-row mt-4">
      <b-row>
        <b-col cols="3" v-for="product in Products" :key="product._id">
          <router-link
            :to="{ name: 'viewProduct', params: { id: product._id } }"
            class="btn"
          >
            <b-card
              :title="product.name"
              tag="article"
              style="max-width: 20rem; border: none"
              :img-src="require(`../assets/products/${product.image1}`)"
              img-height="150px"
            >
              <b-card-text>
                Some quick example text to build on the card
                <h5>Prix : ${{ product.price }}</h5>
                <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
                <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
                <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
                <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
              </b-card-text>
            </b-card>
          </router-link>
          <!-- <b-button-group>
            <router-link
              :to="{ name: 'editProduct', params: { id: product._id } }"
              class="btn btn-primary mr-2"
              >Modifier</router-link
            >
            <b-button href="#" variant="success" @click="addtocard(product)"
              >Ajouter</b-button
            >
          </b-button-group> -->
        </b-col>
      </b-row>
    </b-container>
    <b-pagination
      right
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="example1"
      @page-click="displaypage"
    ></b-pagination>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "products",
  data() {
    return {
      Products: [],
      perPage: 12,
      currentPage: 1,
      rows: 0,
    };
  },
  created() {
    // let apiURL = "http://localhost:4000/api/products";
    let apiURL = `http://localhost:4000/api/products/list/${this.currentPage}/${this.perPage}`;
    axios
      .get(apiURL)
      .then((res) => {
        this.Products = res.data.products;
        this.rows = res.data.total;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteProduct(id) {
      let apiURL = `http://localhost:4000/api/products/delete-product/${id}`;
      let indexOfArrayItem = this.Products.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Products.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    displayProduct() {
      document.location.href = "https://link.com";
    },
    addtocard(product) {
      alert("Article " + product.name + " ajouté au panier ! ");
      product.quantity = 1;
      product.id = product._id;
      let cart = [];
      if (JSON.parse(localStorage.getItem("products"))) {
        cart = JSON.parse(localStorage.getItem("products"));
      }
      let alreadyAdded = 0;
      //Update quantity for existing products
      for (let index = 0; index < cart.length && alreadyAdded == 0; index++) {
        if (cart[index].id == product._id) {
          cart[index].quantity++;
          alreadyAdded++;
        }
      }
      if (alreadyAdded == 0) {
        cart.push(product);
      }
      localStorage.setItem("products", JSON.stringify(cart));
    },
    displaypage: function (e, newPage) {
      let apiURL = `http://localhost:4000/api/products/list/${newPage}/${this.perPage}`;
      axios
        .get(apiURL)
        .then((res) => {
          this.Products = res.data.products;
          this.rows = res.data.total;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.btn-success {
  margin-right: 10px;
}
</style>
