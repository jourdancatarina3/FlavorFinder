<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <router-view />
  </div>
</template>

<script setup>
</script>

<style>
/* Global styles */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

:root {
  --primary-color: #6366f1;
  --secondary-color: #4f46e5;
  --accent-color: #818cf8;
  --text-primary: #1f2937;
  --text-secondary: #4b5563;
}

body {
  font-family: 'Poppins', sans-serif;
  color: var(--text-primary);
  line-height: 1.6;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Better focus styles */
:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #c5c5c5;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
