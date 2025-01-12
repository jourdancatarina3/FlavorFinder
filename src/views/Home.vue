<template>
  <div class="flex flex-col px-10 pb-10 text-gray-700">
    <h1 class="text-4xl font-bold my-5">Categories:</h1>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      <div v-for="category in categories" :key="category.idCategory">
        <div class="shadow-lg bg-gray-100 cursor-pointer rounded-lg">
          <router-link :to="{ name: 'byName', params: { name: category.strCategory } }">
            <img
              class="rounded-t-xl w-full h-72 object-cover"
              :src="category.strCategoryThumb"
              :alt="category.strCategory"
            />
          </router-link>
          <div class="p-3">
            <h1 class="font-bold text-xl">{{ category.strCategory }}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient.js";
import store from "../store";

const categories = computed(() => store.state.mealCategories);

onMounted(async () => {
  axiosClient.get(`categories.php`).then(({ data }) => {
    store.commit("setMealCategories", data.categories);
    console.log(data.categories);
  });
});
</script>