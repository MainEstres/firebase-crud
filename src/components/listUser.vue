<script setup>
import { useUsersStore } from '@/stores/useUsersStore';
import { ref } from 'vue';
import firebaseApp from '../firebaseConfig.js'
import { getFirestore, } from 'firebase/firestore';

const db = getFirestore(firebaseApp);

const props = defineProps({
    users: Array
})

const store = useUsersStore();

const deleteUsers = async (id) => {
    try {
        await store.deleteUser(id)
    } catch (error) {
        console.log(error)
    }
}

const updateUsers = async (id)=>{
    if(newName.value.trim()== '' || newEmail.value.trim()== '') return
    try {
        await store.updateUser(id, {
            nombre: newName.value,
            email: newEmail.value
        })
        await store.fetchUsers();
        newEmail.value = '';
        newName.value = '';

    } catch (error) {
        
    }
}



const newName = ref('');
const newEmail = ref('');


</script>

<template>

    <table class="table">
        <thead>
            <tr class="table-primary">
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody v-for="user in users" :key="user.id">
            <tr class="table-success">
                <td>{{ user.id }}</td>
                <td>{{ user.nombre }}</td>
                <td>{{ user.email }}</td>
                <td>
                    <button @click="deleteUsers(user.id)">Eliminar</button>
                    <button data-bs-toggle="modal" data-bs-target="#exampleModal">Actualizar</button>
                </td>

            </tr>
        </tbody>
    </table>


    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Actualice sus datos</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input type="text" placeholder="Nuevo Nombre" v-model="newName">
                    <input type="text" placeholder="Nuevo Email" v-model="newEmail">
                </div>
                <div class="modal-footer" v-for="user in users" :key="user.id">
                    
                    <button @click="updateUsers(user.id)" data-bs-dismiss="modal" type="button" class="btn btn-primary">Actualizar</button>
                </div>
            </div>
        </div>
    </div>

</template>