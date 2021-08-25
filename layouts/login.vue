<template>
    <v-app class="" id="login">  
      <v-main class="blue-grey lighten-5">
        <nuxt/>
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
  }
};
</script>


<style scoped>
#login {
  height: 100%;
  position: absolute;
  width: 100%;
}
</style>
