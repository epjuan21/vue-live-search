<template>
  <v-text-field
    prepend-icon="mdi-magnify"
    :clearable="clearable"
    label="Digite el nombre del producto o el Registro Sanitario INVIMA"
    v-model="search"
    @click:clear="resetFilter()"
  >
  </v-text-field>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      clearable: true
    };
  },
  computed: {
    ...mapState(["data", "filter"]),

    search: {
      get() {
        return this.filter.query;
      },
      set(val) {
        if (val) {
          this.SET_QUERY(val);
        }
      }
    }
  },
  methods: {
    ...mapMutations(['SET_QUERY']),    
    ...mapActions(["fetchData"]),

    resetFilter() {
      this.SET_QUERY();
    }
  },
};
</script>
