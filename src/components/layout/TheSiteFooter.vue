<template>
  <footer class="l21-footer">
    <div class="l21-footer-shell">
      <!-- gradient rail that mirrors the header energy -->
      <div class="l21-footer-rail" aria-hidden="true"></div>

      <div class="l21-footer-body">
        <span class="l21-footer-brand">Lounge21</span>
        <span class="l21-footer-dot" aria-hidden="true">•</span>
        <span class="l21-footer-copy">© 2025 Lounge21</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
// no script needed
</script>

<style scoped lang="scss">
.l21-footer {
  width: 100%;
  padding: 2rem 1.25rem 2.4rem;

  @media (min-width: 1024px) {
    padding-inline: 4.5rem;
  }

  /* smooth fade into the page background at the bottom */
  background: linear-gradient(
    to top,
    rgba(1, 4, 12, 0.98),
    rgba(1, 4, 12, 0.9),
    transparent 70%
  );
  box-shadow: 0 -18px 55px rgba(0, 0, 0, 0.95);
}

.l21-footer-shell {
  max-width: 1180px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
}

/* the neon line */
.l21-footer-rail {
  width: 100%;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, #ffd27b, #59f0ff, #9b7bff, #ff6ec7);
  box-shadow: 0 0 18px rgba(110, 226, 255, 0.6),
    0 0 32px rgba(255, 110, 199, 0.4);
}

/* text row */
.l21-footer-body {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.65rem 1.4rem;
  border-radius: 999px;

  background: radial-gradient(
        circle at 0% 0%,
        rgba(255, 210, 123, 0.12),
        transparent 60%
      )
      0 0 / 150% 150% no-repeat,
    rgba(3, 7, 21, 0.96);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.95), 0 0 0 1px rgba(66, 92, 152, 0.65);
}

/* tiny, quiet brand – no menu, no clutter */
.l21-footer-brand {
  font-size: 0.8rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(211, 224, 255, 0.92);
}

.l21-footer-dot {
  font-size: 0.8rem;
  color: rgba(151, 174, 220, 0.9);
}

.l21-footer-copy {
  font-size: 0.8rem;
  color: rgba(172, 192, 232, 0.9);
}

/* mobile tweaks */
@media (max-width: 640px) {
  .l21-footer {
    padding-bottom: 2.1rem;
  }

  .l21-footer-body {
    padding-inline: 1.1rem;
  }

  .l21-footer-brand,
  .l21-footer-copy {
    font-size: 0.75rem;
  }
}
</style>
