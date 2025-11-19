<script setup>
import TheSiteHeader from "./TheSiteHeader.vue";
import TheSiteFooter from "./TheSiteFooter.vue";
</script>

<template>
  <div class="l21-app">
    <TheSiteHeader />

    <main class="l21-main">
      <slot />
    </main>

    <TheSiteFooter />
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/_tokens.scss" as *;

.l21-app {
  background: transparent;
}
</style>
