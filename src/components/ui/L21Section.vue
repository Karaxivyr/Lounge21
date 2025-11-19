<template>
  <section class="l21-section">
    <slot />
  </section>
</template>

<style scoped lang="scss">
@use "@/styles/_tokens.scss" as *;

.l21-section {
  margin-block: $l21-space-32;
}
</style>
