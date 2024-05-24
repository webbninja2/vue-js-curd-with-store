<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <table v-if="!loading && !error" class="table-auto custom-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Image</th>
          <th>Return Policy</th>
          <th>Title</th>
          <th>shipping Information</th>
          <th>warrantyInformation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td><img :src="item.thumbnail" alt="Thumbnail" width="50"  /></td> 
          <td>{{ item.returnPolicy }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.shippingInformation }}</td>
          <td>{{ item.warrantyInformation }}</td>
         
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import {onMounted, computed } from 'vue'
  import { useStore } from 'vuex'
  
  const store = useStore();
  const items = computed(() => store.state.data);
  console.log("items", items)
  const loading = computed(() => store.state.loading);
  const error = computed(() => store.state.error);
  onMounted(() => {
  store.dispatch('fetchData')
})
</script>