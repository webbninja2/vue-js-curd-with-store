<template>
    <div>
      <ItemTable />
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { useStore } from 'vuex'
  import ItemTable from '../components/ItemTable.vue'
  
  const store = useStore()
  
  onMounted(() => {
    store.dispatch('fetchItems')
  })
  </script>
  