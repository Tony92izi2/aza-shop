<template>
  <b-container>
    <b-form @submit.prevent="handleSubmitForm">
      <b-form-group label="Nom">
        <b-form-input
          type="text"
          placeholder="Nom"
          v-model="product.name"
          required
        />
      </b-form-group>
      <b-form-group label="Type de produit">
        <select
          name="productTypes"
          id="cars"
          class="form-control"
          v-model="product.type"
          required
        >
          <optgroup label="Nos catégories">
            <option value="Mode">Mode</option>
            <option value="Informatique">Informatique</option>
            <option value="Téléphones et tablettes">
              Téléphones et tablettes
            </option>
            <option value="Alimentation">Alimentation</option>
            <option value="Electroménagers">Electroménagers</option>
            <option value="Meuble Déco">Meuble Déco</option>
          </optgroup>
        </select>
      </b-form-group>
      <b-form-group label="Type de sous produit">
        <b-form-select
          v-model="selected"
          :options="this.categories[this.product.type]"
        ></b-form-select>
      </b-form-group>
      <b-form-group label="Prix">
        <b-form-input
          type="number"
          placeholder="Prix"
          v-model="product.price"
          required
        />
      </b-form-group>

      <b-form-group label="Description du produit">
        <b-form-textarea
          id="textarea"
          v-model="product.description"
          placeholder="Enter something..."
          rows="6"
          max-rows="6"
          required
        ></b-form-textarea>
      </b-form-group>

      <b-form-group
        label="Image principale:"
        label-for="file-default"
        label-cols-sm="2"
      >
        <b-form-file
          v-if="!product.image1"
          ref="file-input1"
          @change="onFileUpload1"
          size="lg"
          required
        ></b-form-file>
        <b-img
          v-if="product.image1"
          :src="require(`../assets/products/${product.image1}`)"
          class="col-md-8 col-sm-4"
        />
        <div id="preview1">
          <img
            v-if="previewImage1"
            :src="previewImage1"
            class="col-md-8 col-sm-4"
          />
        </div>
        <br />
        <b-button
          v-if="product.image1"
          @click="remove1"
          variant="danger"
          class="mr-2"
          >Supprimer</b-button
        >
      </b-form-group>

      <b-form-group label="Image 2:" label-for="file-default" label-cols-sm="2">
        <b-form-file
          v-if="!product.image2"
          ref="file-input2"
          @change="onFileUpload2"
          size="lg"
          required
        ></b-form-file>
        <b-img
          v-if="product.image2"
          :src="require(`../assets/products/${product.image2}`)"
          class="col-md-8 col-sm-4"
        />
        <div id="preview2">
          <img
            v-if="previewImage2"
            :src="previewImage2"
            class="col-md-8 col-sm-4"
          />
        </div>
        <br />
        <b-button
          v-if="product.image2"
          @click="remove2"
          variant="danger"
          class="mr-2"
          >Supprimer</b-button
        >
      </b-form-group>

      <b-form-group label="Image 3:" label-for="file-default" label-cols-sm="2">
        <b-form-file
          v-if="!product.image3"
          ref="file-input3"
          @change="onFileUpload3"
          size="lg"
          required
        ></b-form-file>
        <b-img
          v-if="product.image3"
          :src="require(`../assets/products/${product.image3}`)"
          class="col-md-8 col-sm-4"
        />
        <div id="preview3">
          <img
            v-if="previewImage3"
            :src="previewImage3"
            class="col-md-8 col-sm-4"
          />
        </div>
        <br />
        <b-button
          v-if="product.image3"
          @click="remove3"
          variant="danger"
          class="mr-2"
          >Supprimer</b-button
        >
      </b-form-group>

      <b-button type="submit" class="btn btn-success btn-lg btn-block">
        ENREGISTRER
      </b-button>
      <br />
      <router-link to="/" tag="button" class="btn btn-danger btn-lg btn-block"
        >ANNULER</router-link
      >
    </b-form>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  name: "createProduct",
  data() {
    return {
      product: {},
      FILE1: null,
      FILE2: null,
      FILE3: null,
      previewImage1: null,
      previewImage2: null,
      previewImage3: null,
      imageOld1: null,
      imageOld2: null,
      imageOld3: null,
      categories: {
        Informatique: [
          "Composants-Périphériques",
          "Impression-Bureautique",
          "Stockage-Réseau",
        ],
        Mode: ["Accessoire de mode", "Mode femme", "Mode homme", "Mode enfant"],
        "Meuble Déco": [
          "Meuble Déco",
          "Armoires",
          "Bureau & Rangement",
          "Canapés",
          "Coiffeuses",
          "Décoration",
          "Lits",
          "Luminaires",
          "Tables",
          "Tapis",
        ],
        Alimentation: [
          "Boisson eau et jus",
          "Boites de conserve",
          "Charcuterie",
          "Epices-Condiments-Assaisonnements",
          "Lait-Sucre",
          "Riz-Pâtes",
          "Santé & Beauté",
        ],
        "Téléphones et tablettes": ["Téléphone portable", "Tablette"],
      },
    };
  },
  created() {
    let apiURL = `http://localhost:4000/api/products/edit-product/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.product = res.data;

      if (this.product.image1 && this.product.image1 === "undefined") {
        this.product.image1 = null;
      }
      if (this.product.image2 && this.product.image2 === "undefined") {
        alert(this.product.image2);
        this.product.image2 = null;
      }
      if (this.product.image3 && this.product.image3 === "undefined") {
        this.product.image3 = null;
      }

      this.imageOld1 = this.product.image1;
      this.imageOld2 = this.product.image2;
      this.imageOld3 = this.product.image3;
    });
  },
  computed: {
    filename1() {
      alert(JSON.stringify(this.$refs["file-input1"]));
      return "fileName1.png";
    },
  },
  beforeRouteUpdate(to, from, next) {
    const url = "/" + to.params.id;
    next(url);
  },
  methods: {
    handleSubmitForm() {
      const formData = new FormData();
      formData.append("name", this.product.name);
      formData.append("type", this.product.type);
      formData.append("price", this.product.price);
      formData.append("description", this.product.description);

      var fileModified = 0;
      // upload file
      if (this.FILE1) {
        let fileName =
          Math.floor(Date.now() / 1000) + "-" + this.FILE1.name.trim();
        formData.append("image1", fileName);
        formData.append("imageOld1", this.imageOld1);
        formData.append("files", this.FILE1, fileName);
        fileModified = 1;
      } else {
        formData.append("image1", this.imageOld1);
      }
      if (this.FILE2) {
        let fileName =
          Math.floor(Date.now() / 1000) + "-" + this.FILE2.name.trim();
        formData.append("image2", fileName);
        formData.append("imageOld2", this.imageOld2);
        formData.append("files", this.FILE2, fileName);
        fileModified = 1;
      } else {
        formData.append("image2", this.imageOld2);
      }
      if (this.FILE3) {
        let fileName =
          Math.floor(Date.now() / 1000) + "-" + this.FILE3.name.trim();
        formData.append("image3", fileName);
        formData.append("imageOld3", this.imageOld3);
        formData.append("files", this.FILE3, fileName);
        fileModified = 1;
      } else {
        formData.append("image3", this.imageOld3);
      }

      if (fileModified == 1) {
        alert("File modified");
      }
      let apiURL = `http://localhost:4000/api/products/update-product/${this.$route.params.id}`;

      axios
        .post(apiURL, formData, {})
        .then((res) => {
          console.log(res);
          this.$router.push("/products");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onFileUpload1(e) {
      const image = e.target.files[0];
      this.FILE1 = image;
      this.previewImage1 = URL.createObjectURL(image);
    },
    onFileUpload2(e) {
      const image = e.target.files[0];
      this.FILE2 = image;
      this.previewImage2 = URL.createObjectURL(image);
    },
    onFileUpload3(e) {
      const image = e.target.files[0];
      this.FILE3 = image;
      this.previewImage3 = URL.createObjectURL(image);
    },
    remove1() {
      // this.$refs["file-input1"].reset();
      this.FILE1 = null;
      this.product.image1 = null;
      this.previewImage1 = null;
    },
    remove2() {
      // this.$refs["file-input2"].reset();
      this.FILE2 = null;
      this.product.image2 = null;
      this.previewImage2 = null;
    },
    remove3() {
      // this.$refs["file-input3"].reset();
      this.FILE3 = null;
      this.product.image3 = null;
      this.previewImage3 = null;
    },
  },
};
</script>
