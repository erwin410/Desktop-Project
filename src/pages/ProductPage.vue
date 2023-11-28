<template>
  <div class="sb-nav-fixed">
    <Header />

    <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
        <SideBar />
      </div>
      <div id="layoutSidenav_content">
        <ProductMain />
        
        <Footer />
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import SideBar from '../components/SideBar.vue';
import ProductMain from '../components/ProductMain.vue';
import Footer from '../components/Footer.vue';
</script>