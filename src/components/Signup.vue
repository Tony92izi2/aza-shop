<template>
  <b-container>
    <b-form @submit="signup">
      <b-form-group label="Nom">
        <b-form-input
          type="text"
          placeholder="Nom"
          v-model="user.nom"
          required
        />
      </b-form-group>
      <b-form-group label="Prenom">
        <b-form-input
          type="text"
          placeholder="Prenom"
          v-model="user.prenom"
          required
        />
      </b-form-group>
      <b-form-group label="Email">
        <b-form-input
          type="email"
          placeholder="Email"
          v-model="user.email"
          required
        />
      </b-form-group>
      <b-form-group label="Mot de passe">
        <b-form-input
          type="password"
          placeholder="Password"
          v-model="user.password"
          required
        />
      </b-form-group>
      <b-form-group label="Téléphone">
        <b-form-input
          type="number"
          placeholder="Téléphone"
          v-model="user.phone"
          required
        />
      </b-form-group>
      <b-form-group label="Adresse">
        <b-form-input
          type="text"
          placeholder="Adresse"
          v-model="user.adresse"
          required
        />
      </b-form-group>
      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Créer un compte
      </button>
    </b-form>
    <p class="forgot-password text-right mt-2 mb-4">
      Vous avez déjà un compte ?
      <router-link to="/login">Se connecter</router-link>
    </p>

    <p class="forgot-password text-right mt-2 mb-4">
      <router-link to="/forgot-password">Mot de passe oublié ?</router-link>
    </p>
  </b-container>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Signup",
  data() {
    return {
      user: {
        nom: "",
        prenom: "",
        email: "",
        password: "",
        phone: "",
        adresse: "",
      },
    };
  },
  methods: {
    signup: function () {
      let apiURL = "http://localhost:4000/api/users/create-user";

      axios
        .post(apiURL, this.user)
        .then((res) => {
          if (res.data && res.data.errorMessage) {
            alert(res.data.errorMessage);
          } else {
            alert("User created!");
            this.$router.push("/");
          }
        })
        .catch((error) => {
          alert(JSON.stringify(error));
          console.log(error);
        });
    },
  },
};
</script>
