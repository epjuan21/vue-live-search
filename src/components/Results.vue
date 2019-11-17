<template>
  <div>
    <v-card
      class="mb-1"
      outlined
      v-for="item in displayedData"
      v-bind:key="item.getKeyInvima"
    >
      <v-container fluid pa-1>
        <v-row>
          <v-col class="pa-1">
            <v-card-title class="body-2">
              {{ item.producto }}
            </v-card-title>
            <v-card-subtitle>
              Producto
            </v-card-subtitle>
          </v-col>
          <v-col class="pa-1">
            <v-card-title class="body-2">
              {{ item.expedientecum }} - {{ item.consecutivocum }}
            </v-card-title>
            <v-card-subtitle>
              CUM
            </v-card-subtitle>
          </v-col>
          <v-col class="pa-1">
            <v-card-title class="body-2">
              {{ item.registrosanitario }}
            </v-card-title>
            <v-card-subtitle>
              INVIMA
            </v-card-subtitle>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-pagination
      v-if="filteredData.length > perPage"
      v-model="page"
      :length="pageLenght"
      :page="page"
      :total-visible="totalVisible"
    ></v-pagination>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      keyInvima: null,
      page: 1,
      pages: [],
      pageLenght: 10,
      perPage: 10,
      totalVisible: 10,
      dataPagination: []
    };
  },

  computed: {
    ...mapState(["data"]),
    ...mapGetters(["filteredData"]),

    // getKeyInvima: function() {
    //   return (this.keyInvima =
    //     filteredData.expedientecum + filteredData.consecutivocum);
    // },

    getKeyInvima: function() {
      return (this.keyInvima = data.expedientecum + data.consecutivocum);
    },

    displayedData() {
      return this.paginate(this.filteredData);
    }
  },
  methods: {
    ...mapActions(["fetchData"]),

    // getDataFromDataPagination() {
    //   this.dataPagination = this.filteredData;
    // },

    setPages() {
      let numberOfPages = Math.ceil(this.filteredData.length / this.perPage);
      this.pageLenght = numberOfPages;
      console.log('setPages: pageLength ' + this.pageLenght)
      console.log('segPage: numberOfPages ' + numberOfPages)
      this.pages.length = 0;
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },

    paginate(filteredData) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return this.filteredData.slice(from, to);
      // console.log('Paginate ' +  this.filteredData.length)
    }
  },

  watch: {
    filteredData() {
      this.setPages();
    }
  },
  created() {
    this.fetchData();
    this.$store.dispatch('fetchData')
    // this.getDataFromDataPagination();
  }
};
</script>
