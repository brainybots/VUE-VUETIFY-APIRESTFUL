<template>
  <v-app>
    <MenuBar />
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <Contenedor />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import MenuBar from "@/components/MenuBar/MenuBar.component.vue";
import Contenedor from "@/components/contenedor/contenedor.component.vue";

export default Vue.extend({
  name: "App",
  components: {
    MenuBar,
    Contenedor
  },
  data: () => ({
    //
  })
});
</script>
