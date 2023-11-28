<template>
  <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">Accueil</div>
                            
                            <router-link to="/" class="nav-link">
                                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Tableau de Bord
                            </router-link>

                            <router-link to="/product" class="nav-link">
                                <div class="sb-nav-link-icon"><i class="fas fa-th-list"></i></div>
                                Product
                            </router-link>

                            <!-- <div class="sb-sidenav-menu-heading">Gestion</div> -->
                            <!-- <a class="nav-link" href="ajouter.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-plus-circle"></i></div>
                                Ajouter
                            </a>

                            <a class="nav-link" href="modifier.html">
                                <div class="sb-nav-link-icon"><i class="far fa-edit"></i></div>
                                Modifier
                            </a>

                            <a class="nav-link" href="supprimer.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-trash-alt"></i></div>
                                Supprimer
                            </a> -->

                            
                                                                                
                        </div>
                    </div>
                </nav>
</template>

<script setup lang="ts">
</script>