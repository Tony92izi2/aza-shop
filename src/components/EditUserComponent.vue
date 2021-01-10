<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Update user</h3>
      <form @submit.prevent="handleUpdateForm">
        <div class="form-group">
          <label>Nom</label>
          <input type="text" class="form-control" v-model="user.nom" required />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-control" v-model="user.email" required />
        </div>

        <div class="form-group">
          <label>Phone</label>
          <input type="text" class="form-control" v-model="user.phone" required />
        </div>

        <div class="form-group">
          <button class="btn btn-danger btn-block">Update</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {},
    };
  },
  created() {
    let apiURL = `http://localhost:4000/api/users/edit-user/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.user = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:4000/api/users/update-user/${this.$route.params.id}`;

      axios
        .post(apiURL, this.user)
        .then((res) => {
          console.log(res);
          this.$router.push("/users");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeRouteUpdate(to, from, next) {
    const url = "/" + to.params.id;
    next(url);
  },
};
</script>
