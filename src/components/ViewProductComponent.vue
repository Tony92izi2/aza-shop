<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 2540px">
      <b-row no-gutters>
        <b-col md="8">
          <b-card-img
            :src="require(`../assets/products/${product.image1}`)"
            alt="Image"
            style="height: 600px"
            id="imageMain"
          ></b-card-img>
        </b-col>

        <b-col md="4" mr="4">
          > <a href="#">Home</a> > <a href="#">Produits</a> >
          <a href="#">{{ product.type }}</a>
          <b-card-body>
            <h4>{{ product.name }}</h4>
            <b-card-text>
              {{ product.description }}
            </b-card-text>

            <h5>Prix : {{ product.price }} FCFA</h5>
            <br />
            <br />
            <b-card-text>
              <b-button-group>
                <router-link
                  :to="{ name: 'editProduct', params: { id: product._id } }"
                  class="btn btn-primary mr-2"
                  >Modifier</router-link
                >
                <b-button href="#" variant="success" @click="addtocard(product)"
                  >Ajouter</b-button
                >
              </b-button-group>
            </b-card-text>
            <b>
              <p>
                Vous êtes interessé par ce produit ? Appellez vite au 99552121
              </p>
            </b>
            <b
              ><p>
                Vous voulez plusieurs produits ? Ajoutez-les dans votre panier ,
                puis validez et vous serez immédiatement contacté par l'un de
                nos conseillers clientèles
              </p></b
            >
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>

    <b-img
      thumbnail
      fluid
      :src="require(`../assets/products/${product.image1}`)"
      alt="Image 1"
      style="height: 200px"
      v-on:mouseover="changeImage1"
      id="image1"
    ></b-img>
    <b-img
      thumbnail
      fluid
      :src="require(`../assets/products/${product.image2}`)"
      style="height: 200px"
      alt="Image 2"
      v-on:mouseover="changeImage2"
      id="image2"
    ></b-img>
    <b-img
      thumbnail
      fluid
      :src="require(`../assets/products/${product.image3}`)"
      style="height: 200px"
      alt="Image 3"
      v-on:mouseover="changeImage3"
      id="image3"
    ></b-img>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "viewProduct",
  data() {
    return {
      product: {},
    };
  },
  created() {
    let apiURL = `http://localhost:4000/api/products/edit-product/${this.$route.params.id}`;
    axios
      .get(apiURL)
      .then((res) => {
        this.product = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
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
    changeImage1() {
      document.getElementById("imageMain").src = document.getElementById(
        "image1"
      ).src;
    },
    changeImage2() {
      document.getElementById("imageMain").src = document.getElementById(
        "image2"
      ).src;
    },
    changeImage3() {
      document.getElementById("imageMain").src = document.getElementById(
        "image3"
      ).src;
    },
  },
  beforeRouteUpdate(to, from, next) {
    const url = "/" + to.params.id;
    next(url);
  },
};
</script>

<style>
.btn-success {
  margin-right: 10px;
}
</style>
