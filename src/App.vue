<script setup>
import { useUsersStore } from './stores/useUsersStore';
import AddUser from './components/addUser.vue';
import ListUser from './components/listUser.vue';


const store = useUsersStore();




</script>

<template>
    <h1 class="text-center m-4">Firebase CRUD Humilde</h1>
    <div class="container">
        <AddUser />
        <ListUser :users="store.users" />
    </div>

   

</template>