<template>
  <div class="bg-sage-50 rounded-xl shadow-card transform hover:scale-[1.02] transition-all duration-300">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <div class="relative overflow-hidden rounded-t-xl group">
        <img
          class="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </router-link>
    <div class="p-5">
      <h3 class="font-bold text-xl text-sage-800 mb-2 line-clamp-1">{{ meal.strMeal }}</h3>
      <div class="flex items-center gap-2 mb-3">
        <span class="px-2 py-1 bg-herb-light text-herb-dark text-sm rounded-full">
          {{ meal.strCategory || 'Main Course' }}
        </span>
        <span class="px-2 py-1 bg-tomato-light text-tomato-dark text-sm rounded-full">
          {{ meal.strArea || 'International' }}
        </span>
      </div>
      <div class="flex items-center justify-between mt-4">
        <YoutubeButton :href="meal.strYoutube">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Watch Recipe
          </div>
        </YoutubeButton>
        <button class="p-2 text-gray-400 hover:text-spice rounded-full hover:bg-spice-light transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from './YoutubeButton.vue';

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
});
</script>