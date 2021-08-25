<template>
  <v-app >
    <Header/>
    <v-main class="pt-4 grey lighten-4">
        <nuxt class="mt-n3" />
    </v-main>
  </v-app>
</template>

<script>
import Header from "~/components/shared/header";

export default {
  head () {
    return {
      title: 'Meerab Properties',
      titleTemplate: '',
        fab: false,
    }
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      isEmp: ''
    }
  },
  components: {
    Header
  },
  middleware: ["check-auth", "auth"],
};
</script>
