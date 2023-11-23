<template>
  <div>
    <SideBar />
    <h1>Home Page</h1>
    <router-link to="/product">Product Page</router-link>
  </div>
</template>

<script setup lang="ts">
  import SideBar from "../components/SideBar.vue";
</script>
