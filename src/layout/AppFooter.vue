<template>
  <footer class="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
    <nav class="grid grid-flow-col gap-4">
      <RouterLink to="/" class="link link-hover">Home</RouterLink>
      <RouterLink to="/about" class="link link-hover">About</RouterLink>
      <RouterLink to="/contact" class="link link-hover">Contact</RouterLink>
      <RouterLink to="/blog" class="link link-hover">Blog</RouterLink>
    </nav>
    <nav>
      <div class="grid grid-flow-col gap-4">
        <a href="https://www.instagram.com/adarshtnandhu" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M6.5 1h11A6.5 6.5 0 0124 7.5v9A6.5 6.5 0 0117.5 23h-11A6.5 6.5 0 011 16.5v-9A6.5 6.5 0 016.5 1zm0 3A3.5 3.5 0 003 7.5v9A3.5 3.5 0 006.5 20h11A3.5 3.5 0 0021 16.5v-9A3.5 3.5 0 0017.5 4h-11zm5.5 3a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.5-2.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"
            ></path>
          </svg>
        </a>
        <a href="https://x.com/adarshtnandhu" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 300 271"
            class="fill-current"
          >
            <path
              d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
            />
          </svg>
        </a>
        <a href="https://youtube.com/@adarshtnandhu" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
            ></path>
          </svg>
        </a>
        <a href="https://facebook.com/adarshtnandhu" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 32 32"
            class="fill-current"
          >
            <path d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path>
          </svg>
        </a>
      </div>
    </nav>
  </footer>
  <footer
    class="footer sm:footer-horizontal footer-center bg-neutral text-neutral-content items-center p-4"
  >
    <aside class="grid-flow-col items-center">
      <p>Copyright ⓒ {{ new Date().getFullYear() }} - All right reserved</p>
      <p>|</p>
      <p>App Version: {{ appVersion }}</p>
    </aside>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { computed } from 'vue'

const appVersion = computed(() => import.meta.env.VITE_APP_VERSION)
</script>
