<template>
  <header class="l21-header">
    <!-- subtle glow behind the nav -->
    <div class="l21-header-glow" aria-hidden="true"></div>

    <div class="l21-header-shell">
      <!-- center-floating nav pill -->
      <nav class="l21-nav" aria-label="Main navigation">
        <RouterLink
          to="/"
          class="l21-nav-link"
          active-class="is-active"
          exact-active-class="is-active"
        >
          Home
        </RouterLink>

        <RouterLink
          to="/creators"
          class="l21-nav-link"
          active-class="is-active"
        >
          Creators
        </RouterLink>

        <RouterLink to="/about" class="l21-nav-link" active-class="is-active">
          About
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
// RouterLink comes from vue-router (globally available in your app)
</script>

<style scoped lang="scss">
.l21-header {
  position: sticky;
  top: 0;
  z-index: 40;

  padding: 0.75rem 1.25rem 0.9rem;

  @media (min-width: 1024px) {
    padding-inline: 4.5rem;
  }

  /* let the page background breathe through, just add a soft veil */
  background: radial-gradient(
        circle at 50% -40%,
        rgba(33, 74, 155, 0.6),
        transparent 60%
      )
      0 0 / 160% 160% no-repeat,
    linear-gradient(to bottom, rgba(1, 3, 10, 0.92), rgba(1, 3, 10, 0.82));
  backdrop-filter: blur(18px);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.95);
}

/* container that keeps the nav centered on large screens */
.l21-header-shell {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
}

/* soft horizontal glow across the top of the content area */
.l21-header-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: -1;

  background: radial-gradient(
    circle at 50% 0%,
    rgba(146, 214, 255, 0.25),
    transparent 60%
  );
  opacity: 0.9;
}

/* main nav pill */
.l21-nav {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  padding: 0.22rem;
  border-radius: 999px;

  background: radial-gradient(
        circle at 0% 0%,
        rgba(255, 210, 123, 0.35),
        transparent 60%
      )
      0 0 / 150% 150% no-repeat,
    radial-gradient(circle at 100% 0%, rgba(89, 240, 255, 0.4), transparent 60%)
      0 0 / 150% 150% no-repeat,
    rgba(5, 12, 32, 0.98);

  box-shadow: 0 18px 55px rgba(0, 0, 0, 0.98),
    0 0 0 1px rgba(75, 101, 165, 0.75);
}

/* nav links */
.l21-nav-link {
  position: relative;
  border-radius: 999px;
  padding: 0.48rem 1.4rem;

  font-size: 0.76rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  text-decoration: none;

  color: rgba(192, 210, 255, 0.88);
  text-shadow: 0 0 12px rgba(0, 0, 0, 0.9);

  transition: color 150ms ease-out, background 150ms ease-out,
    box-shadow 150ms ease-out, transform 150ms ease-out;
}

.l21-nav-link:hover {
  color: #ffffff;
}

/* active tab highlight */
.l21-nav-link.is-active {
  color: #020713;
  background: linear-gradient(90deg, #ffd27b, #59f0ff);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.98), 0 0 0 1px rgba(0, 0, 0, 0.65);
  transform: translateY(-1px);
}

/* smaller screens – tighten the nav */
@media (max-width: 640px) {
  .l21-header {
    padding-inline: 1rem;
  }

  .l21-nav-link {
    padding-inline: 1rem;
    font-size: 0.7rem;
    letter-spacing: 0.15em;
  }
}
</style>
