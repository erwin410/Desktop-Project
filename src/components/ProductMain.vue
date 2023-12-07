<template>
    <main>
                    <div class="container-fluid px-4">
                        <h1 class="mt-4">Produit</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Restauration Scolaire</li>
                        </ol>
                        
                        <div class="row mb-3">
                            <div class="col-xl-3 col-md-6">
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Ajouter
                                </button>

                                <AddProductModal />
                                
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-header">
                                <i class="fas fa-table me-1"></i>
                                Liste des produits
                            </div>
                            <div class="card-body">
                                <table id="datatablesSimple" class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                   
                                    <tbody>
                                        <tr v-for="product in products" :key="product.id">
                                            <td>{{ product.name }}</td>
                                            <td>{{ product.description }}</td>
                                            <td>{{ product.price }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
    </main>
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue';
import axios from 'axios';

import AddProductModal from './modal/AddProductModal.vue';

const products = ref([] as any[]);
const apiUrl = 'http://localhost:3000/products';

const fecthProducts = () => {
    axios.get(apiUrl)
        .then((response: { data: Product[] }) => {
            products.value = response.data;
        })
        .catch((error: any) => {
            console.error('Erreur lors de la récupération des produits:', error);
            
        });
};

interface Product {
    id: number;
    name: string;
    price: number
}

onMounted(() => {
    fecthProducts();
});
</script>