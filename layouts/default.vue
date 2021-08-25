<template>
  <v-app >
    <Header/>
    <v-main align-center justify-center  class="pt-15">
      <nuxt />
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Header from "~/components/shared/header";
import Footer from "~/components/shared/footer";

export default {
  head () {
    return {
      title: 'Meerab Properties',
      titleTemplate: ''
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
    Header,Footer
  },
  // middleware: ["check-auth", "auth"],
};
</script>
