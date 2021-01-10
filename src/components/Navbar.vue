<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <a class="navbar-brand" href="#">Azarmet</a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/"
              >Accueil <span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="products">Produits</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="telephonie"
              >Téléphonie</router-link
            >
          </li>

          <b-nav-item-dropdown id="dropdown-1" text="Alimentation">
            <b-dropdown-item>Boisson</b-dropdown-item>
            <b-dropdown-item>Boites de conserve</b-dropdown-item>
            <b-dropdown-item>Charcuterie</b-dropdown-item>
            <b-dropdown-item>Epices-Condiments-Assaisonnements</b-dropdown-item>
            <b-dropdown-item>Lait-Sucre</b-dropdown-item>
            <b-dropdown-item>Riz-Pâtes</b-dropdown-item>
            <b-dropdown-item>Santé & Beauté</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown id="dropdown-1" text="Electroménagers">
            <b-dropdown-item>
              <b-nav-item-dropdown
                id="dropdown-2"
                text="Gros Electroménagers"
                dropright
              >
                <b-dropdown-item>Climatiseurs</b-dropdown-item>
                <b-dropdown-item>Congélateurs</b-dropdown-item>
                <b-dropdown-item>Machine à laver</b-dropdown-item>
                <b-dropdown-item>Réfrigérateurs</b-dropdown-item>
                <b-dropdown-item>Sonorisations</b-dropdown-item>
                <b-dropdown-item>Téléviseurs</b-dropdown-item>
                <b-dropdown-item>Ustensiles de cuisine</b-dropdown-item>
                <b-dropdown-item>Ventilateurs</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-dropdown-item>
            <b-dropdown-item>
              <b-nav-item-dropdown
                id="dropdown-2"
                text="Petits Electroménagers"
                dropright
              >
                <b-dropdown-item>Permutateur de Menu</b-dropdown-item>
                <b-dropdown-item>Appareil photo</b-dropdown-item>
                <b-dropdown-item>Chauffe eau-Bouilloire</b-dropdown-item>
                <b-dropdown-item>Fer à repasser</b-dropdown-item>
                <b-dropdown-item>Machine à café</b-dropdown-item>
                <b-dropdown-item>Mixeur</b-dropdown-item>
                <b-dropdown-item>Micro onde</b-dropdown-item>
                <b-dropdown-item>Thermos</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown id="dropdown-1" text="Informatique">
            <b-dropdown-item>Ordinateur de bureau</b-dropdown-item>
            <b-dropdown-item>Ordinateurs portables</b-dropdown-item>
            <b-dropdown-item>
              <b-nav-item-dropdown
                id="dropdown-2"
                text="Stockage-Réseau"
                dropright
              >
                <b-dropdown-item>Disque dur-Clé USB-SSD</b-dropdown-item>
                <b-dropdown-item>Réseau-CPL-NAS-WIFI</b-dropdown-item>
                <b-dropdown-item>Caméras de surveillance IP</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-dropdown-item>
            <b-dropdown-item>
              <b-nav-item-dropdown
                id="dropdown-2"
                text="Composants-Périphériques"
                dropright
              >
                <b-dropdown-item>Composants</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-dropdown-item>
            <b-dropdown-item>
              <b-nav-item-dropdown
                id="dropdown-2"
                text="Impression-Bureautique"
                dropright
              >
                <b-dropdown-item>Imprimantes-Scanners</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown id="dropdown-1" text="Mode">
            <b-dropdown-item>
              <b-nav-item-dropdown
                id="dropdown-2"
                text="Accessoires de modes"
                dropright
              >
                <b-dropdown-item>Bazin</b-dropdown-item>
                <b-dropdown-item>Meubles & décorations</b-dropdown-item>
                <b-dropdown-item>Rideaux</b-dropdown-item>
                <b-dropdown-item>Sacs et valises</b-dropdown-item>
                <b-dropdown-item>Tissu</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-dropdown-item>
            <b-dropdown-item>
              <b-nav-item-dropdown id="dropdown-2" text="Mode femme" dropright>
                <b-dropdown-item>Chaussures</b-dropdown-item>
                <b-dropdown-item>Vêtements</b-dropdown-item>
                <b-dropdown-item>Sacs femme</b-dropdown-item>
                <b-dropdown-item>Bijoux femme</b-dropdown-item>
                <b-dropdown-item>Lingérie</b-dropdown-item>
                <b-dropdown-item>Wax</b-dropdown-item>
                <b-dropdown-item>Parfums et déodorants</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-dropdown-item>
            <b-dropdown-item>
              <b-nav-item-dropdown id="dropdown-2" text="Mode homme" dropright>
                <b-dropdown-item>Chaussures</b-dropdown-item>
                <b-dropdown-item>Vêtements</b-dropdown-item>
                <b-dropdown-item>Sacs homme</b-dropdown-item>
                <b-dropdown-item>Bijoux homme</b-dropdown-item>
                <b-dropdown-item>Lingérie</b-dropdown-item>
                <b-dropdown-item>Wax</b-dropdown-item>
                <b-dropdown-item>Parfums et déodorants</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-dropdown-item>
            <b-dropdown-item>
              <b-nav-item-dropdown id="dropdown-2" text="Mode enfant" dropright>
                <b-dropdown-item>Vêtements</b-dropdown-item>
                <b-dropdown-item>Chaussures</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown id="dropdown-1" text="Meuble Déco">
            <b-dropdown-item>Armoires</b-dropdown-item>
            <b-dropdown-item>Canapés</b-dropdown-item>
            <b-dropdown-item>Coiffeuses</b-dropdown-item>
            <b-dropdown-item>Décoration</b-dropdown-item>
            <b-dropdown-item>Lits</b-dropdown-item>
            <b-dropdown-item>Luminaires</b-dropdown-item>
            <b-dropdown-item>Tables</b-dropdown-item>
            <b-dropdown-item>Tapis</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown id="dropdown-1" text="Sports & Loisirs">
            <b-dropdown-item>Chaussures</b-dropdown-item>
            <b-dropdown-item>Ballons </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown
            id="my-nav-dropdown"
            text="Espace Admin"
            v-if="currentUser"
          >
            <b-dropdown-item>
              <router-link class="nav-link" to="createProduct"
                >Ajouter Produit</router-link
              ></b-dropdown-item
            >
            <b-dropdown-item>
              <router-link class="nav-link" to="createCategory"
                >Ajouter Catégorie</router-link
              ></b-dropdown-item
            >
            <b-dropdown-item
              ><router-link class="nav-link" to="users"
                >Gestion des utilisateurs</router-link
              ></b-dropdown-item
            >
          </b-nav-item-dropdown>

          <b-nav-item-dropdown
            id="my-nav-dropdown"
            text="Mon compte"
            v-if="currentUser"
          >
            <b-dropdown-item>
              <router-link class="nav-link" to="account"
                >Mes informations
              </router-link></b-dropdown-item
            >
            <b-dropdown-item
              ><router-link class="nav-link" to="commands"
                >Mes commandes</router-link
              ></b-dropdown-item
            >
            <b-dropdown-item>
              <router-link class="nav-link" to="#" @click.native="logout"
                >Se déconnecter</router-link
              ></b-dropdown-item
            >
          </b-nav-item-dropdown>

          <li class="nav-item" v-if="!currentUser">
            <router-link class="nav-link" to="login">Connexion</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="cart">Mon panier</router-link>
          </li>
          <li class="nav-item">
            <b
              ><router-link
                class="nav-link"
                to="cart"
                style="margin-left: 350px"
                >Tél: 99552121</router-link
              ></b
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  mounted: function () {
    this.$root.$on("bv::dropdown::show", (bvEvent) => {
      if (bvEvent.componentId === "dropdown-2") {
        this.isDropdown2Visible = true;
      }
    });
    this.$root.$on("bv::dropdown::hide", (bvEvent) => {
      if (bvEvent.componentId === "dropdown-2") {
        this.isDropdown2Visible = false;
      }
      if (this.isDropdown2Visible) {
        bvEvent.preventDefault();
      }
    });
  },
  data() {
    return {
      currentUser: null,
    };
  },
  created() {
    var userLogged = localStorage.getItem("userLogged");
    if (!userLogged) {
      this.currentUser = null;
    } else {
      this.currentUser = JSON.stringify(JSON.parse(userLogged));
    }
  },
  props: {
    msg: String,
  },
  methods: {
    logout: function () {
      this.currentUser = null;
      localStorage.removeItem("userLogged");
      this.$router.push("/");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
