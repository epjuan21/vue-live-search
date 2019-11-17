<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col>
          <v-card outlined class="blue">
            <v-card-title>
              <v-icon large left color="white">
                mdi-pill
              </v-icon>
              <h1 class="subtitle-1 font-weight-bold white--text">
                Buscador Códigos Únicos de Médicamentos Vigentes
              </h1>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col>
          <v-row class="space-between mx-0">
            <v-card class="align-stretch flex-grow-1 mr-1">
              <v-card-title class="subtitle-1">
                <SearchBox />
              </v-card-title>
            </v-card>

            <v-card class="align-stretch">
              <v-card-title class="display-6 text-center"
                >Resultados</v-card-title
              >
              <v-card-subtitle class="display-2 text-center">{{
                filteredData.length
              }}</v-card-subtitle>
            </v-card>
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <Results />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";
import Results from "@/components/Results.vue";
import { mapGetters } from "vuex";
export default {
  name: "home",
  components: {
    SearchBox,
    Results
  },
  computed: {
    ...mapGetters(["filteredData"])
  }
};
</script>
