<template>
    <div v-if="showConfirmation" class="confirmation-message">
                            Données envoyées avec succès!
    </div>
    
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="submitForm">
            <div class="mb-3">
                <label class="form-label">Nom :</label>
                <input v-model="formData.nom" class="form-control" type="text" placeholder="Nom Du Produit" required>
            </div>

            <div class="mb-3">
                <label class="form-label">Categorie :</label>
                <input v-model="formData.categorie" class="form-control" type="text" placeholder="categorie" required>
            </div>

            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Ajouter</button>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
      </div>
    </div>
  </div>
</div>

</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';

const formData = ref({
    nom: '',
    categorie: ''
});

const showConfirmation = ref(false);

const submitForm = async () => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/produits', formData.value);
        console.log('Réponse de la requête', response.data);

        showConfirmation.value = true;

        setTimeout(() => {
            showConfirmation.value = false;
        }, 4000);

    } catch (error) {
        console.error('Erreur lors de l\'envoi des données', error);
        
    }
}
</script>