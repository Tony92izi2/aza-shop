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
                    <select name="productTypes" id="cars" class="form-control"  v-model="product.type" required>
                   <optgroup label="Téléphones & Gadgets">
                        <option value="Téléphones">Téléphones</option>
                        <option value="Tablettes">Tablettes</option>
                        <option value="Tablettes">Accessoires</option>
                    </optgroup>
                    <optgroup label="Alimentation">
                        <option value="Boisson eau et jus">Boisson, eau & jus</option>
                        <option value="Boites de conserve">Boites de conserve</option>
                        <option value="Charcuterie">Charcuterie</option>
                        <option value="Epices-Condiments-Assaisonnements">Epices-Condiments-Assaisonnements</option>
                        <option value="Lait-Sucre">Lait-Sucre</option>
                        <option value="Riz-Pâtes">Riz-Pâtes</option>
                        <option value="Santé & Beauté">Santé & Beauté</option>
                    </optgroup>
                    <optgroup label="Electroménagers">
                        <option value="Gros Electroménagers">Gros Electroménagers</option>
                            <optgroup label="Gros Electroménagers">
                                <option value="Climatiseurs">Climatiseurs</option>   
                                <option value="Petits Electroménagers">Petits Electroménagers</option>
                            </optgroup>  
                        <option value="Petits Electroménagers">Petits Electroménagers</option>
                    </optgroup>
                    <optgroup label="Informatique">
                        <option value="Composants-Périphériques">Composants-Périphériques</option>
                        <option value="Impression-Bureautique">Impression-Bureautique</option>
                        <option value="Stockage-Réseau">Stockage-Réseau</option>
                    </optgroup>
                    <optgroup label="Mode">
                        <option value="Accessoire de mode">Accessoire de mode</option>
                        <option value="Mode femme">Mode femme</option>
                        <option value="Mode homme">Mode homme</option>
                        <option value="Mode enfant">Mode enfant</option>
                    </optgroup>
                    <optgroup label="Meuble Déco">
                        <option value="Armoires">Armoires</option>
                        <option value="Bureau & Rangement">Bureau & Rangement</option>
                        <option value="Canapés">Canapés</option>
                        <option value="Coiffeuses">Coiffeuses</option>
                        <option value="Décoration">Décoration</option>
                        <option value="Lits">Lits</option>
                        <option value="Luminaires">Luminaires</option>
                        <option value="Tables">Tables</option>
                        <option value="Tapis">Tapis</option>
                    </optgroup>
                    <optgroup label="Ordinateurs">
                        <option value="Ordinateur portable">Ordinateur portable</option>
                        <option value="Ordinateur fixe">Ordinateur fixe</option>
                    </optgroup>
                    <optgroup label="Téléphones & Gadgets">
                        <option value="Téléphones">Téléphones</option>
                        <option value="Tablettes">Tablettes</option>
                        <option value="Tablettes">Accessoires</option>
                   </optgroup>
                    <optgroup label="Sports & Loisirs">
                    </optgroup>
                    </select>
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

  <b-form-group label="Image principale:" label-for="file-default" label-cols-sm="2">
    <b-form-file ref="file-input1" @change="onFileUpload1" size="lg" required></b-form-file>
    <div id="preview1">
        <img v-if="previewImage1" :src="previewImage1" class="col-md-8 col-sm-4"/>
    </div>
    <br>
    <b-button @click="remove1" variant="danger" class="mr-2">Supprimer</b-button>
  </b-form-group>

  <b-form-group label="Image 2:" label-for="file-default" label-cols-sm="2">
    <b-form-file ref="file-input2" @change="onFileUpload2" size="lg" required></b-form-file>
    <div id="preview2">
        <img v-if="previewImage2" :src="previewImage2" class="col-md-8 col-sm-4"/>
    </div>
    <br>
    <b-button @click="remove2" variant="danger" class="mr-2">Supprimer</b-button>
  </b-form-group>

    <b-form-group label="Image 3:" label-for="file-default" label-cols-sm="2">
    <b-form-file ref="file-input3" @change="onFileUpload3" size="lg" required></b-form-file>
    <div id="preview3">
        <img v-if="previewImage3" :src="previewImage3" class="col-md-8 col-sm-4"/>
    </div>
    <br>
    <b-button @click="remove3" variant="danger" class="mr-2">Supprimer</b-button>
  </b-form-group>

      <button type="submit" class="btn btn-success btn-lg btn-block">
        Ajouter le produit
      </button>
      <br>
      <!-- <button type="button" class="btn btn-danger btn-lg btn-block">
        ANNULER
      </button> -->
    </b-form>


  </b-container>
</template>

<script>
import axios from "axios";
export default {
  name: "createProduct",
  data() {
    return {
      product: {
        name: "",
        type: "",
        price: "",
        description: "",
      },
      FILE1: null,
      FILE2: null,
      FILE3: null,
      previewImage1: null,
      previewImage2: null,
      previewImage3: null,
    };
  },
  methods: {
    handleSubmitForm() {
      const formData = new FormData();
      formData.append("name", this.product.name);
      formData.append("type", this.product.type);
      formData.append("price", this.product.price);
      formData.append("description", this.product.description);

      // upload file

      if (this.FILE1) {
        let fileName =
          Math.floor(Date.now() / 1000) +
          "-" +
          "image1" +
          this.FILE1.name.trim();
        formData.append("image1", fileName);
        formData.append("files", this.FILE1, fileName);
      }
      if (this.FILE2) {
        let fileName =
          Math.floor(Date.now() / 1000) +
          "-" +
          "image2" +
          this.FILE2.name.trim();
        formData.append("image2", fileName);
        formData.append("files", this.FILE2, fileName);
      }
      if (this.FILE3) {
        let fileName =
          Math.floor(Date.now() / 1000) +
          "-" +
          "image3" +
          this.FILE3.name.trim();
        formData.append("image3", fileName);
        formData.append("files", this.FILE3, fileName);
      }

      let apiURL = "http://localhost:4000/api/products/create-product";

      axios
        .post(apiURL, formData, {})
        .then(() => {
          // alert(res);
          // this.$router.push({ path: '/' })
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error), console.log(error);
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
      this.$refs["file-input1"].reset();
      this.FILE1 = null;
      this.previewImage1 = null;
    },
    remove2() {
      this.$refs["file-input2"].reset();
      this.FILE2 = null;
      this.previewImage2 = null;
    },
    remove3() {
      this.$refs["file-input3"].reset();
      this.FILE3 = null;
      this.previewImage3 = null;
    },
  },
};
</script>
