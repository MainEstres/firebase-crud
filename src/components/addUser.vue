<script setup>
import { useUsersStore } from '@/stores/useUsersStore';
import { ref } from 'vue';

const nombre = ref('');
const email = ref('');
const store = useUsersStore();

const addUsers = async () => {
    if (nombre.value.trim() === '' || email.value.trim() === '') {
        alert('Completa los datos porfavor uwu')
    }
    try {
        await store.addUser({ nombre: nombre.value, email: email.value });
        nombre.value = '';
        email.value = '';
    } catch (error) {
        console.log(error)
    }

}


</script>


<template>
    <form @submit.prevent="addUsers">
        <input class="form-label" v-model="nombre" type="text" placeholder="Nombre">
        <input class="form-label" v-model="email" type="text" placeholder="Correo Electrónico">
        <button class="btn btn-primary" type="submit">Agregar</button>
    </form>
</template>