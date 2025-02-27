<template>
  <footer class="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
    <aside>
      <RouterLink to="/" class="link link-hover text-6xl dm-serif-display-font">A.</RouterLink>
      <p>Copyright ⓒ {{ new Date().getFullYear() }} - All rights reserved.</p>
      <p>App Version: {{ appVersion }}</p>
    </aside>
    <nav>
      <h6 class="footer-title">Quick Links</h6>
      <RouterLink to="/" class="link link-hover">Home</RouterLink>
      <RouterLink to="/about" class="link link-hover">About</RouterLink>
      <RouterLink to="/contact" class="link link-hover">Contact</RouterLink>
      <RouterLink to="/blog" class="link link-hover">Blog</RouterLink>
    </nav>
    <nav>
      <h6 class="footer-title">Follow Me</h6>
      <a href="https://www.linkedin.com/in/adarsh--t" target="_blank" class="link link-hover"
        >Linkedin</a
      >
      <a href="https://www.instagram.com/adarshtnandhu" target="_blank" class="link link-hover"
        >Instagram</a
      >
      <a href="https://facebook.com/adarshtnandhu" target="_blank" class="link link-hover"
        >Facebook</a
      >
      <a href="https://x.com/adarshtnandhu" target="_blank" class="link link-hover">Twitter</a>
      <a href="https://youtube.com/@adarshtnandhu" target="_blank" class="link link-hover"
        >Youtube</a
      >
    </nav>
    <form>
      <h6 class="footer-title">Newsletter</h6>
      <fieldset class="w-80">
        <label>Enter your email address</label>
        <div class="join mt-2">
          <input
            type="text"
            placeholder="username@site.com"
            class="input input-bordered join-item"
          />
          <button class="btn btn-primary join-item">Subscribe</button>
        </div>
      </fieldset>
    </form>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { computed } from 'vue'

const appVersion = computed(() => import.meta.env.VITE_APP_VERSION)
</script>
