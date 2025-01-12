<template>
  <header class="bg-sage-50 shadow-soft fixed w-full top-0 z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <router-link
          :to="{ name: 'home' }"
          class="flex items-center gap-2 text-herb-dark font-semibold text-xl hover:text-herb transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>Flavor Finder</span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-1">
          <router-link
            v-for="(item, index) in navigationItems"
            :key="index"
            :to="item.to"
            class="px-4 py-2 rounded-md text-sm font-medium text-sage-700 hover:bg-herb-light hover:text-herb-dark transition-all"
            :class="{ 'bg-herb-light text-herb-dark': isCurrentRoute(item.to.name) }"
          >
            {{ item.text }}
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <button
          @click="isOpen = !isOpen"
          class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-6 w-6"
            :class="{ 'hidden': isOpen, 'block': !isOpen }"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            class="h-6 w-6"
            :class="{ 'block': isOpen, 'hidden': !isOpen }"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Navigation -->
    <div class="md:hidden" v-show="isOpen">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link
          v-for="(item, index) in navigationItems"
          :key="index"
          :to="item.to"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600 transition-all"
          :class="{ 'bg-primary-50 text-primary-600': isCurrentRoute(item.to.name) }"
          @click="isOpen = false"
        >
          {{ item.text }}
        </router-link>
      </div>
    </div>
  </header>

  <!-- Spacer to prevent content from hiding under fixed navbar -->
  <div class="h-16"></div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isOpen = ref(false);

const navigationItems = [
  { text: 'Search Meals', to: { name: 'byName' } },
  { text: 'Meals By Letter', to: { name: 'byLetter' } },
  { text: 'Ingredients', to: { name: 'ingredients' } },
];

const isCurrentRoute = (name) => route.name === name;
</script>

<style scoped>
/* Add any additional component-specific styles here */
</style>