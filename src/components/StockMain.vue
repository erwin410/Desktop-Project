<template>
  <main>
                    <div class="container-fluid px-4">
                        <h1 class="mt-4">Stock</h1>
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
                            <div class="col-xl-3 col-md-6">
                                <div class="card bg-warning text-white mb-4">
                                    <div class="card-body"><a class="text-white" href="modifier.html">Modifier</a></div>
                                </div>
                            </div>
                           
                            <div class="col-xl-3 col-md-6">
                                <div class="card bg-danger text-white mb-4">
                                    <div class="card-body"><a class="text-white" href="supprimer.html">Supprimer</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-header">
                                <i class="fas fa-table me-1"></i>
                                Stocks
                            </div>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id </th>
                                            <th scope="col">Nom</th>
                                        </tr>
                                    </thead>
                                   
                                    <tbody>
                                        <!-- <tr v-for="stock in stocks" :key="stock.id">
                                            <th scope="row">{{ stock.id }}</th>
                                            <td>{{ stock.nom  }}</td>
                                        </tr> -->
                                    </tbody>
                                </table>
                        </div>
                    </div>
    </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const stocks = ref([] as any[]);
const apiUrl = 'http://127.0.0.1:8000/api/stocks';

const fetchStocks = () => {
    axios.get(apiUrl)
        .then((response) => {
            stocks.value = response.data;
        })
        .catch((error) => {
            console.error("Erreur lors de la récupération des stocks:", error);
            
        });
};

onMounted(() => {
    fetchStocks();
})
</script>