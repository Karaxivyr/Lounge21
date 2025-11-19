<!-- src/components/ui/L21Button.vue -->
<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "primary", // "primary" | "secondary" | "ghost" (optional)
  },
  size: {
    type: String,
    default: "md", // "sm" | "md"
  },
});
</script>

<template>
  <button
    class="l21-button"
    :class="[`l21-button--${variant}`, `l21-button--${size}`]"
    type="button"
  >
    <span class="l21-button-label">
      <slot />
    </span>
  </button>
</template>

<style scoped lang="scss">
@use "@/styles/_tokens.scss" as *;

.l21-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-family: $l21-font-family-body;
  font-size: 0.95rem;
  font-weight: 500;
  padding-inline: $l21-space-16;
  padding-block: 8px;
  white-space: nowrap;
  transition: transform $l21-motion-fast $l21-ease-standard,
    box-shadow $l21-motion-fast $l21-ease-standard,
    background $l21-motion-fast $l21-ease-standard,
    color $l21-motion-fast $l21-ease-standard;
}

/* Ensure the gradient goes all the way to the rounded edges */
.l21-button--primary {
  background-image: linear-gradient(
    90deg,
    #ffbf5c 0%,
    #ffe1a3 25%,
    #3fd2ff 75%,
    #20d7e4 100%
  );
  color: #05091a;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.6);
}

.l21-button--primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 14px 26px rgba(0, 0, 0, 0.7);
  background-image: linear-gradient(
    90deg,
    #ffd27f 0%,
    #ffe8bc 25%,
    #56ddff 75%,
    #33e0eb 100%
  );
}

.l21-button--primary:active {
  transform: translateY(0);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.6);
}

/* Secondary: dark pill with subtle border (no gradient edge issues) */
.l21-button--secondary {
  background: #050b1c;
  color: $l21-color-text-main;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.6);
}

.l21-button--secondary:hover {
  background: #08142e;
}

.l21-button--secondary:active {
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.6);
}

/* Sizes */
.l21-button--sm {
  font-size: 0.85rem;
  padding-inline: $l21-space-12;
  padding-block: 6px;
}

.l21-button--md {
  font-size: 0.95rem;
}

/* Label */
.l21-button-label {
  position: relative;
  z-index: 1;
}

/* Keyboard focus */
.l21-button:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.9);
  outline-offset: 2px;
}
</style>
