<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <input id="navbar-drawer" type="checkbox" class="drawer-toggle" />
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <label for="navbar-drawer" aria-label="open sidebar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-6 w-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>

      <div class="drawer-side">
        <label for="navbar-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="menu menu-lg bg-base-200 min-h-full w-80 p-4 gap-2">
          <RouterLink to="/" class="btn btn-ghost text-5xl dm-serif-display-font"> A. </RouterLink>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
          <li><RouterLink to="/blog">Blog</RouterLink></li>
        </ul>
      </div>
      <RouterLink to="/" class="btn btn-ghost text-5xl dm-serif-display-font"> A. </RouterLink>
    </div>
    <div class="flex-3 hidden lg:flex">
      <ul class="menu menu-lg menu-horizontal px-1 gap-2">
        <li><RouterLink to="/" class="text-lg">Home</RouterLink></li>
        <li><RouterLink to="/about" class="text-lg">About</RouterLink></li>
        <li><RouterLink to="/contact" class="text-lg">Contact</RouterLink></li>
        <li><RouterLink to="/blog" class="text-lg">Blog</RouterLink></li>
      </ul>
    </div>
    <div class="flex-none">
      <div class="tooltip tooltip-left" :data-tip="isdark ? 'Light mode' : 'Dark mode'">
        <label class="toggle text-base-content">
          <input type="checkbox" class="theme-controller" value="synthwave" v-model="isdark" />
          <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>
          <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const isdark = ref(JSON.parse(localStorage.getItem('isdark')) || false)

onMounted(() => {
  document.documentElement.setAttribute('data-theme', isdark.value ? 'dark' : 'light')
})

watch(isdark, (newValue) => {
  localStorage.setItem('isdark', JSON.stringify(newValue))
  document.documentElement.setAttribute('data-theme', newValue ? 'dark' : 'light')
})
</script>
