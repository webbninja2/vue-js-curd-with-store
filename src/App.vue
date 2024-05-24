<script setup>
import {RouterView} from "vue-router"
import { RouterLink } from "vue-router";
</script>

<template>
  <ul class="main-menu">
<RouterLink to="/products-list">Product List</RouterLink>
<RouterLink to="/curd">Crud Operation</RouterLink>
</ul>
<div class="templateView">

  <RouterView/>
</div>

</template>

<style setup>
ul.main-menu a {
    color: #272727;
} 
ul.main-menu {
    gap: 16px;
    width: 100%;
    border-bottom: 1px solid #cd928d;
    display: flex;
    margin: 0;
    padding: 0;
}   
ul.main-menu a.router-link-active {
    background: #df473a;
    color: white;
}   
</style>


