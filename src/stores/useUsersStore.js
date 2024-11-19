import { defineStore } from 'pinia';
import { onMounted, ref } from 'vue';

import { getFirestore, getDocs, collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';

import firebaseApp from '../firebaseConfig.js'

const db = getFirestore(firebaseApp);

export const useUsersStore = defineStore('users', () => {

    const users = ref([]);

    const fetchUsers = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'users'));

            users.value = querySnapshot.docs.map((doc) => ({
                id: doc.id, ...doc.data()
            }));

        } catch (error) {
            console.log(error);
        }
    }

    const addUser = async (user) => {
        try {
            const userRef = await addDoc(collection(db, 'users'), user);
            users.value.push({ id: userRef.id, ...user });

        } catch (error) {
            console.log(error, 'No se pudo agregar al usuario');
        }
    }

    const deleteUser = async (id) => {
        try {
            await deleteDoc(doc(db, 'users', id));
            users.value = users.value.filter((u) => u.id !== id);

        } catch (error) {
            console.log(error, 'No se pudo eliminar el usuario')
        }
    }
    const updateUser = async (id, data) => {
        try {
            const docRef = doc(db, 'users', id)
            await updateDoc(docRef, data)
            console.log('Usuario actualizado');
    
        } catch (e) {
            console.error("Error al actualizar documento:", e);
        }
    }

    

    onMounted(fetchUsers);

    return { fetchUsers, users, addUser, deleteUser, updateUser };
});

