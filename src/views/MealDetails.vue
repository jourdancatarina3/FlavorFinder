<template>
  <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-card p-8">
    <div class="relative mb-8">
      <img 
        :src="meal.strMealThumb" 
        :alt="meal.strMeal" 
        class="w-full h-[400px] object-cover rounded-xl shadow-md"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
      <h1 class="absolute bottom-6 left-6 text-5xl font-bold text-white">{{ meal.strMeal }}</h1>
    </div>

    <div class="flex flex-wrap gap-4 mb-8">
      <div class="px-4 py-2 bg-culinary-light rounded-full">
        <span class="font-medium text-culinary-dark">{{ meal.strCategory }}</span>
      </div>
      <div class="px-4 py-2 bg-spice-light rounded-full">
        <span class="font-medium text-spice-dark">{{ meal.strArea }}</span>
      </div>
      <div v-if="meal.strTags" class="px-4 py-2 bg-gray-100 rounded-full">
        <span class="font-medium text-gray-600">{{ meal.strTags }}</span>
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-8 mb-8">
      <div class="space-y-4">
        <h2 class="text-2xl font-bold text-gray-800">Ingredients</h2>
        <ul class="space-y-2">
          <template v-for="(el, ind) of new Array(20)" :key="ind">
            <li v-if="meal[`strIngredient${ind + 1}`]" class="flex items-center gap-2">
              <span class="w-6 h-6 flex items-center justify-center bg-culinary-light text-culinary-dark rounded-full text-sm">
                {{ ind + 1 }}
              </span>
              <span class="text-gray-700">
                {{ meal[`strMeasure${ind + 1}`] }} {{ meal[`strIngredient${ind + 1}`] }}
              </span>
            </li>
          </template>
        </ul>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-bold text-gray-800">Instructions</h2>
        <p class="text-gray-600 leading-relaxed">
          {{ meal.strInstructions }}
        </p>
      </div>
    </div>

    <div class="flex gap-4">
      <YoutubeButton :href="meal.strYoutube">
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          Watch on YouTube
        </div>
      </YoutubeButton>
      <a
        :href="meal.strSource"
        target="_blank"
        class="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        View Original Source
      </a>
    </div>
  </div>
</template>

<script setup>
import axiosClient from "../axiosClient";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import YoutubeButton from "../components/YoutubeButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>