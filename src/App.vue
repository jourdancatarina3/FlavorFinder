<template>
  <div class="min-h-screen bg-background">
    <router-view />
  </div>
</template>

<script setup>
</script>

<style>
/* Global styles */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

:root {
  --primary-color: #86B886;
  --secondary-color: #5A8C5A;
  --accent-color: #FF6B6B;
  --text-primary: #334033;
  --text-secondary: #4B594B;
  --background-color: #D0DDD0;
}

body {
  font-family: 'Poppins', sans-serif;
  color: var(--text-primary);
  line-height: 1.6;
  background-color: var(--background-color);
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
  background: #E5EBE5;
}

::-webkit-scrollbar-thumb {
  background: #9BAA9B;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #7E8F7E;
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
