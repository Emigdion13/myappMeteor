<template>
  <v-footer padless>
      <v-col class="d-flex justify-center" cols="12">
          <span class="white-text">
              Eso es :)
          </span>
      </v-col>
  </v-footer>
</template>

<script>
export default {
    name: "FooterView"
}
</script>

<style scoped>
footer{
    position: absolute;
    bottom : 0;
    left: 0;
    width:100vw;
    height: 50px;
    background-color: #8c191d !important;
}
</style>