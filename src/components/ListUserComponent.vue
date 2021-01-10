<template>
  <div class="row">
    <b-table
      id="example1"
      striped
      :fields="fields"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    >
      <!-- A custom formatted column -->
      <template #cell(actions)="data">
        <router-link :to="{ name: 'editUser', params: { id: data.item._id } }" class="btn btn-success"
          >Edit
        </router-link>
        <button @click.prevent="deleteUser(data.item._id)" class="btn btn-danger">Delete</button>
      </template>
    </b-table>
    <b-pagination
      right
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="example1"
    ></b-pagination>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "users",
  data() {
    return {
      fields: [
        {
          key: "nom",
          label: "Nom",
          sortable: true,
        },
        {
          key: "prenom",
          label: "Prenom",
          sortable: false,
        },
        {
          key: "email",
          label: "Email",
          sortable: true,
        },
        {
          key: "phone",
          label: "Téléphone",
          sortable: true,
        },
        {
          key: "adresse",
          label: "Adresse",
          sortable: true,
        },
        {
          key: "actions",
          label: "Actions",
          sortable: false,
        },
      ],
      items: [],
      perPage: 10,
      currentPage: 1,
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api/users";
    axios
      .get(apiURL)
      .then((res) => {
        this.items = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteUser(id) {
      let apiURL = `http://localhost:4000/api/users/delete-user/${id}`;
      let indexOfArrayItem = this.items.findIndex((i) => i._id === id);

      if (window.confirm("Voulez vous vraiment supprimer cet utilisateur ? ")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.items.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>

<style>
.btn-success {
  margin-right: 10px;
}
</style>
