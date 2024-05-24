<template>
    <div>
      <h2>Item Management</h2>
      <form @submit.prevent="createItem" class="custom-form">
        <input v-model="newItem.name" placeholder="Name" required />
        <input v-model="newItem.phone" placeholder="Phone" required />
        <input v-model="newItem.email" placeholder="Email" required />
        <input v-model="newItem.username" placeholder="Username" required />
        <input v-model="newItem.address" placeholder="Address" required />
        <button type="submit">Add Item</button>
      </form>
      <table class="table-auto custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Username</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.username }}</td>
            <td>{{ item.address }}</td>
            <td>
              <button class="btn btn-primary" @click="deleteItem(item.id)">Delete</button> &nbsp;
              <button class="btn btn-danger" @click="editItem(item)">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- Modal for editing item -->
      <div v-if="editingItem" class="modal edit-Item-form">
        <div class="modal-content">
          <span class="close " @click="closeModal">&times;</span>
          <h2>Edit Item</h2>
          <form @submit.prevent="updateItem">
            <input v-model="editedItem.name" placeholder="Name" required />
            <input v-model="editedItem.phone" placeholder="Phone" required />
            <input v-model="editedItem.email" placeholder="Email" required />
            <input v-model="editedItem.username" placeholder="Username" required />
            <input v-model="editedItem.address" placeholder="Address" required />
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  import { useStore } from 'vuex'
  
  const store = useStore()
  
  const newItem = ref({ name: '', phone: '', email: '', username: '', address: '' })
  const items = computed(() => store.state.items)
  
  const editingItem = ref(null)
  const editedItem = ref({})
  
  const createItem = () => {
    store.dispatch('createItem', newItem.value)
    newItem.value = { name: '', phone: '', email: '', username: '', address: '' }
  }
  
  const deleteItem = (itemId) => {
    store.dispatch('deleteItem', itemId)
  }
  
  const editItem = (item) => {
    editingItem.value = item
    editedItem.value = { ...item }
  }
  
  const updateItem = () => {
    store.dispatch('updateItem', editedItem.value)
    editingItem.value = null
  }
  
  const closeModal = () => {
    editingItem.value = null
  }


  </script>
  
  
  