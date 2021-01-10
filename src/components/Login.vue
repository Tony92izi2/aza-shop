<template>
  <b-container>
    <b-form @submit="login">
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

      <b-button
        type="submit"
        variant="primary"
        class="btn btn-dark btn-lg btn-block"
        >Connexion</b-button
      >
    </b-form>
    <p class="forgot-password text-right mt-2 mb-4">
      Vous n'avez pas de compte ?
      <router-link to="/signup">Créer un compte</router-link>
    </p>

    <p class="forgot-password text-right mt-2 mb-4">
      <router-link to="/forgot-password">Mot de passe oublié?</router-link>
    </p>
  </b-container>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login: function () {
      let apiURL = `http://localhost:4000/api/users/login`;
      console.log(this.user);
      axios
        .post(apiURL, this.user)
        .then((res) => {
          if (res.data) {
            localStorage.setItem("userLogged", JSON.stringify(res.data));
            this.$router.push("/");
            // vm.$forceUpdate();
            location.reload();
          } else {
            alert("Login failed !");
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
