<template>
  <section class="l21-card">
    <slot />
  </section>
</template>

<style scoped lang="scss">
@use "@/styles/_tokens.scss" as *;

.l21-card {
  border-radius: $l21-radius-lg;
  padding: $l21-space-24;
  background: radial-gradient(circle at 0 0, rgba(243, 215, 154, 0.04), transparent 55%),
    rgba(20, 26, 35, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.04);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.55);
}
</style>
