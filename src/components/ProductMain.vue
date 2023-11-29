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
                                    <div class="card-body"><a class="text-white" href="ajouter.html">Ajouter</a></div>
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
                                Piéce auto
                            </div>
                            <div class="card-body">
                                <table id="datatablesSimple">
                                    <thead>
                                        <tr>
                                            <th>Nom </th>
                                            <th>Categorie</th>
                                        </tr>
                                    </thead>
                                   
                                    <tbody id="liste">
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
    </main>
</template>

<script setup lang="ts">
</script>