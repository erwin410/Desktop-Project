<template>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="submitForm">
          <label for="productName">Nom du Produit:</label>
          <input type="text" v-model="newProductName" id="productName" placeholder="Product Name" required>

          <label for="productDescription">Description du Produit:</label>
          <input type="text" v-model="newProductDescription" id="productDescription" placeholder="Description" required>

          <label for="productPrice">Prix du Produit:</label>
          <input type="number" v-model="newProductPrice" id="productPrice" placeholder="Price Product" required>

          <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Ajouter produit</button>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import axios from 'axios';

const newProductName = ref('');
const newProductDescription = ref('');
const newProductPrice = ref('');

const apiUrl = 'http://localhost:3000/products';

const submitForm = () => {
  const newData = {
    name: newProductName.value,
    description: newProductDescription.value,
    price: newProductPrice.value
  };

  axios.post(apiUrl, newData)
    .then(() => {
      newProductName.value = '';
      newProductDescription.value = '';
      newProductPrice.value = '';
    })
    .catch((error) => {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
    });
};
</script>