<template>
    <v-app class="application  theme--light" id="login" style="
    background: url('/app-bg-compressor.jpg');
    background-size: cover;
    background-position:  right ;
    background-repeat: no-repeat;
">
        <v-main>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <nuxt/>
                </v-layout>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
  head () {
    return {
      title: 'Meerab Properties',
      titleTemplate: ''
    }
  },
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
    rightDrawer: false
};
</script>


<style scoped>
#login {
  height: 100%;
  position: absolute;
  width: 100%;
}
</style>
