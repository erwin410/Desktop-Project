<template>
    <main>
                    <div class="container-fluid px-4">
                        <h1 class="mt-4">Product</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Restauration Scolaire</li>
                        </ol>

                        

                        <div class="row">
                            <div class="col-xl-3 col-md-6">
                                <div class="card bg-primary text-white mb-4">
                                    <div class="card-body">
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Ajouter
                                        </button>
                                        <Add />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-header">
                                <i class="fas fa-table me-1"></i>
                                Liste de produits
                            </div>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Nom </th>
                                            <th scope="col">Categorie</th>
                                        </tr>
                                    </thead>
                                   
                                    <tbody>
                                        <tr v-for="product in products" :key="product.id">
                                            <th scope="row">{{ product.id }}</th>
                                            <td>{{ product.nom  }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                    </div>
    </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

import Add from './modal/Ajouter.vue';

const products = ref([] as any[]);
const apiUrl = 'http://127.0.0.1:8000/api/produits';

const fetchProducts = () => {
    axios.get(apiUrl)
        .then((response) => {
            products.value = response.data;
        })
        .catch((error) => {
            console.error("Erreur lors de la récupération des produits:", error);
            
        });
};

onMounted(() => {
    fetchProducts();
})
</script>