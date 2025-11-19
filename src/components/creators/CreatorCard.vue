<!-- src/components/creators/CreatorCard.vue -->
<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  to: {
    type: [String, Object],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  handle: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <RouterLink :to="to" class="creator-card">
    <div class="creator-card-inner">
      <header class="creator-card-header">
        <p class="creator-handle">{{ handle }}</p>
        <p class="creator-name">{{ name }}</p>
      </header>

      <p class="creator-tagline">
        {{ tagline }}
      </p>

      <div class="creator-tags">
        <span v-for="tag in tags" :key="tag" class="creator-tag">
          {{ tag }}
        </span>
      </div>

      <div class="creator-footer">
        <span class="creator-cta-dot"></span>
        <span class="creator-cta-text">Enter their lounge</span>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
@use "@/styles/_tokens.scss" as *;

/* Shell link */
.creator-card {
  position: relative;
  display: block;
  text-decoration: none;
  border-radius: 24px;
  padding: 1px; // gradient border
  background: linear-gradient(
    135deg,
    rgba(14, 230, 255, 0.22),
    rgba(63, 123, 255, 0.22),
    rgba(255, 95, 158, 0.22)
  );
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(10, 18, 40, 0.7);
  transition: transform $l21-motion-normal $l21-ease-decelerate,
    box-shadow $l21-motion-normal $l21-ease-decelerate,
    background $l21-motion-normal $l21-ease-decelerate;
}

/* Inner surface */
.creator-card-inner {
  border-radius: 22px;
  padding: $l21-space-16 $l21-space-16 $l21-space-12;
  background: linear-gradient(135deg, #050814, #06142c);
  display: flex;
  flex-direction: column;
  gap: $l21-space-12;
}

/* Hover lift */
.creator-card:hover {
  transform: translateY(-6px);
  background: linear-gradient(
    135deg,
    rgba(255, 191, 92, 0.5),
    rgba(32, 215, 228, 0.6),
    rgba(255, 95, 158, 0.6)
  );
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.95), 0 0 0 1px rgba(20, 40, 90, 0.9);
}

/* Header */
.creator-card-header {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.creator-handle {
  font-size: 0.8rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: $l21-color-text-muted;
}

.creator-name {
  font-size: 1.15rem;
  font-weight: 600;
  color: $l21-color-text-main;
}

/* Body */
.creator-tagline {
  font-size: 0.9rem;
  color: $l21-color-text-muted;
}

/* Tags */
.creator-tags {
  display: flex;
  flex-wrap: wrap;
  gap: $l21-space-8;
}

.creator-tag {
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  color: #05091a;
  background: linear-gradient(
    135deg,
    rgba(255, 191, 92, 0.9),
    rgba(32, 215, 228, 0.95)
  );
}

/* Footer CTA */
.creator-footer {
  margin-top: $l21-space-8;
  display: inline-flex;
  align-items: center;
  gap: $l21-space-8;
  font-size: 0.78rem;
  color: $l21-color-text-main;
}

.creator-cta-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: linear-gradient(135deg, #ffbf5c, #ff5f9e);
  box-shadow: 0 0 10px rgba(255, 95, 158, 0.9);
}

.creator-cta-text {
  text-transform: uppercase;
  letter-spacing: 0.16em;
}
</style>
