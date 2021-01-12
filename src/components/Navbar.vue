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
 <b-nav-item-dropdown id="dropdown-1" text="Téléphones & Gadgets">
            <b-dropdown-item>
              <b-nav-item-dropdown
                id="dropdown-2"
                text="Téléphones"
                dropright
              >
                <b-dropdown-item>Iphone</b-dropdown-item>
                <b-dropdown-item>Samsung</b-dropdown-item>
                <b-dropdown-item>Techno</b-dropdown-item>
                <b-dropdown-item>Nokia</b-dropdown-item>
                <b-dropdown-item>Huawei</b-dropdown-item>
                <b-dropdown-item>Autres</b-dropdown-item>
                
              </b-nav-item-dropdown>
            </b-dropdown-item>
            <b-dropdown-item>
              <b-nav-item-dropdown
                id="dropdown-2"
                text="Tablettes"
                dropright
              >
                <b-dropdown-item>Tablettes Educatives</b-dropdown-item>
                <b-dropdown-item>Nos Tablettes</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-dropdown-item>
            <b-dropdown-item>
              <b-nav-item-dropdown
                id="dropdown-2"
                text="Accessoires"
                dropright
              >
                <b-dropdown-item>Airpods</b-dropdown-item>
                <b-dropdown-item>Powerbanks</b-dropdown-item>
                <b-dropdown-item>Ecouteurs</b-dropdown-item>
                <b-dropdown-item>Casques</b-dropdown-item>
                <b-dropdown-item>Chargeurs et Câbles</b-dropdown-item>
                <b-dropdown-item>Pochettes pour Téléphones</b-dropdown-item>
                
              </b-nav-item-dropdown>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          
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
                <b-dropdown-item>Humidificateurs</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-dropdown-item>
            <b-dropdown-item>
              <b-nav-item-dropdown
                id="dropdown-2"
                text="Petits Electroménagers"
                dropright
              >
                <b-dropdown-item>Permutateur de Menu</b-dropdown-item>
                <b-dropdown-item>Appareil Photo</b-dropdown-item>
                <b-dropdown-item>Chauffe Eau-Bouilloire</b-dropdown-item>
                <b-dropdown-item>Fer à Repasser</b-dropdown-item>
                <b-dropdown-item>Machine à Café</b-dropdown-item>
                <b-dropdown-item>Mixeur</b-dropdown-item>
                <b-dropdown-item>Micro Onde</b-dropdown-item>
                <b-dropdown-item>Thermos</b-dropdown-item>
                <b-dropdown-item>Speakers</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown id="dropdown-1" text="Informatique">
            <b-dropdown-item>
              <b-nav-item-dropdown
                id="dropdown-2"
                text="Ordinateurs Portables"
                dropright
              >
                <b-dropdown-item>Dell</b-dropdown-item>
                <b-dropdown-item>Lenovo</b-dropdown-item>
                <b-dropdown-item>HP</b-dropdown-item>
                <b-dropdown-item>Toshiba</b-dropdown-item>
                <b-dropdown-item>Mac Book</b-dropdown-item>
                <b-dropdown-item>Autres</b-dropdown-item>
                
              </b-nav-item-dropdown>
            </b-dropdown-item>
            <b-dropdown-item>
              <b-nav-item-dropdown
                id="dropdown-2"
                text="Ordinateurs de Bureau"
                dropright
              >
                <b-dropdown-item>Dell</b-dropdown-item>
                <b-dropdown-item>Lenovo</b-dropdown-item>
                <b-dropdown-item>HP</b-dropdown-item>
                <b-dropdown-item>Toshiba</b-dropdown-item>
                <b-dropdown-item>Mac Book</b-dropdown-item>
                <b-dropdown-item>Autres</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-dropdown-item>
            <b-dropdown-item>
              <b-nav-item-dropdown
                id="dropdown-2"
                text="Accessoires"
                dropright
              >
                <b-dropdown-item>Périphériques d'Ordinateurs</b-dropdown-item>
                <b-dropdown-item>Répétiteur Wifi</b-dropdown-item>
                <b-dropdown-item>Réseaux</b-dropdown-item>
                <b-dropdown-item>Routeur Wifi</b-dropdown-item>
                <b-dropdown-item>Stockages</b-dropdown-item>
                <b-dropdown-item>Switch Commutateur</b-dropdown-item>
                
              </b-nav-item-dropdown>
            </b-dropdown-item>
            <b-dropdown-item>
              <b-nav-item-dropdown
                id="dropdown-2"
                text="Imprimantes & Cartouches"
                dropright
              >
                <b-dropdown-item>Imprimantes Lasers</b-dropdown-item>
                <b-dropdown-item>Imprimantes Multi-Fonctions</b-dropdown-item>
                <b-dropdown-item>Cartouches d'Encres</b-dropdown-item>
                <b-dropdown-item>Encres & Consommables</b-dropdown-item>
                <b-dropdown-item>Photocopieuses</b-dropdown-item>
                <b-dropdown-item>Scanners</b-dropdown-item>
                
              </b-nav-item-dropdown>
            </b-dropdown-item>
            <b-dropdown-item>
              <b-nav-item-dropdown
                id="dropdown-2"
                text="Divers"
                dropright
              >
                <b-dropdown-item>Clé USB</b-dropdown-item>
                <b-dropdown-item>Lecteur de Code Barre</b-dropdown-item>
                <b-dropdown-item>Onduleur</b-dropdown-item>
                <b-dropdown-item>VideoProjecteur</b-dropdown-item>
                <b-dropdown-item>Batteries</b-dropdown-item>
                <b-dropdown-item>Chargeurs</b-dropdown-item>
                <b-dropdown-item>Claviers & Souris</b-dropdown-item>
                <b-dropdown-item>Disques Durs Externes</b-dropdown-item>
                <b-dropdown-item>Disques Durs Internes</b-dropdown-item>
                
              </b-nav-item-dropdown>
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown id="dropdown-1" text="Mode">
            <b-dropdown-item>
              <b-nav-item-dropdown
                id="dropdown-2"
                text="Accessoires de Modes"
                dropright
              >
                <b-dropdown-item>Bazin</b-dropdown-item>
                <b-dropdown-item>Meubles & Décorations</b-dropdown-item>
                <b-dropdown-item>Rideaux</b-dropdown-item>
                <b-dropdown-item>Sacs et Valises</b-dropdown-item>
                <b-dropdown-item>Tissu</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-dropdown-item>
            <b-dropdown-item>
              <b-nav-item-dropdown id="dropdown-2" text="Mode Femme" dropright>
                <b-dropdown-item>Chaussures</b-dropdown-item>
                <b-dropdown-item>Vêtements</b-dropdown-item>
                <b-dropdown-item>Sacs Femme</b-dropdown-item>
                <b-dropdown-item>Bijoux Femme</b-dropdown-item>
                <b-dropdown-item>Lingérie</b-dropdown-item>
                <b-dropdown-item>Wax</b-dropdown-item>
                <b-dropdown-item>Cadeau</b-dropdown-item>
                <b-dropdown-item>Parfums et Déodorants</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-dropdown-item>
            <b-dropdown-item>
              <b-nav-item-dropdown id="dropdown-2" text="Mode Homme" dropright>
                <b-dropdown-item>Chaussures</b-dropdown-item>
                <b-dropdown-item>Vêtements</b-dropdown-item>
                <b-dropdown-item>Sacs Homme</b-dropdown-item>
                <b-dropdown-item>Bijoux Homme</b-dropdown-item>
                <b-dropdown-item>Lunettes</b-dropdown-item>
                <b-dropdown-item>Cravate</b-dropdown-item>
                <b-dropdown-item>Shorts Hommes</b-dropdown-item>
                <b-dropdown-item>Parfums et Déodorants</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-dropdown-item>
            <b-dropdown-item>
              <b-nav-item-dropdown id="dropdown-2" text="Espace Enfant" dropright>
                <b-dropdown-item>Vêtements</b-dropdown-item>
                <b-dropdown-item>Chaussures</b-dropdown-item>
                <b-dropdown-item>Jeux</b-dropdown-item>
                <b-dropdown-item>Jouets</b-dropdown-item>
                <b-dropdown-item>Cadeaux Enfant</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-dropdown-item>
            <b-dropdown-item>
              <b-nav-item-dropdown id="dropdown-2" text="Montres & Bracelets" dropright>
                <b-dropdown-item>Bracelets</b-dropdown-item>
                <b-dropdown-item>Emballage Cadeau</b-dropdown-item>
                <b-dropdown-item>Montres Femmes</b-dropdown-item>
                <b-dropdown-item>Montres Hommes</b-dropdown-item>
                <b-dropdown-item>Smart Watch</b-dropdown-item>
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
