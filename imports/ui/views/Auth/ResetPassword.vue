<template>
  <p>esto es para resetel</p>
</template>

<script>
export default {
    name: "ResetPassword",
    mounted() {
        console.log("token: ", this.$route.params.token);
    }
}
</script>

<style>

</style>