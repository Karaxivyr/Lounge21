<!-- src/App.vue -->
<template>
  <div class="app-shell">
    <TheSiteHeader />

    <main class="app-shell__main">
      <RouterView />
    </main>

    <TheSiteFooter />
  </div>
</template>

<script>
import TheSiteHeader from "./components/layout/TheSiteHeader.vue";
import TheSiteFooter from "./components/layout/TheSiteFooter.vue";

export default {
  name: "App",
  components: {
    TheSiteHeader,
    TheSiteFooter,
  },
};
</script>

<style lang="scss">
.app-shell {
  min-height: 100vh; /* makes the shell at least full screen */
  display: flex;
  flex-direction: column;
}

/* This pushes the footer to the bottom when content is short */
.app-shell__main {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
}
</style>
