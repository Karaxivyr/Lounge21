<template>
  <main class="l21-home">
    <section class="l21-home-shell">
      <div class="l21-hero-layout">
        <!-- Logo side -->
        <figure class="l21-hero-logo-card">
          <img
            :src="communityLogo"
            alt="Lounge21 community logo – a cozy chair with game, story, and drink icons"
            class="l21-hero-logo-img"
          />
        </figure>

        <!-- Content side -->
        <div class="l21-hero-main">
          <p class="l21-hero-kicker-pill">Welcome to the Lounge</p>

          <h1 class="l21-hero-title">Settle in at Lounge21.</h1>

          <p class="l21-hero-body">
            A cozy, creator-focused space for late-night hangs, watch parties,
            storycrafting, and those “one more episode” nights that never end.
          </p>

          <div class="l21-hero-actions">
            <RouterLink to="/creators" class="l21-cta l21-cta--primary">
              Explore creators
            </RouterLink>

            <RouterLink to="/about" class="l21-cta l21-cta--ghost">
              Learn more
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import communityLogo from "@/assets/l21/logo/Lounge21-community-logo.webp";
</script>

<style scoped lang="scss">
.l21-home {
  display: flex;
  justify-content: center;
  padding: 2.8rem 1.5rem 4.2rem; // a bit closer to the navbar
}

/* Outer hero shell that sits on top of the global gradient background */
.l21-home-shell {
  width: 100%;
  max-width: 1120px;
  border-radius: 2.25rem;
  padding: 2.2rem 3rem 2.4rem; // was ~2.75rem top/bottom
  background: radial-gradient(circle at 0% 0%, #2f325c 0, transparent 45%),
    radial-gradient(circle at 100% 0%, #5a315f 0, transparent 50%),
    linear-gradient(135deg, #071024 0%, #041225 40%, #071d3d 70%, #1e234e 100%);
  box-shadow: 0 24px 80px rgba(2, 5, 16, 0.9),
    0 0 0 1px rgba(255, 255, 255, 0.02);
}

/* Two-column layout – logo + copy */
.l21-hero-layout {
  display: flex;
  align-items: stretch;
  gap: 2.25rem;
}

/* Left: logo card */
.l21-hero-logo-card {
  flex: 0 0 360px;
  margin: 0;
  border-radius: 2rem;
  padding: 0.75rem;
  background: radial-gradient(
      circle at 20% 0%,
      rgba(255, 255, 255, 0.1),
      transparent 55%
    ),
    #050814;
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.9),
    0 0 0 1px rgba(255, 255, 255, 0.03);
  display: flex;
  align-items: center;
  justify-content: center;
}

.l21-hero-logo-img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 1.75rem;
}

/* Right: main copy */
.l21-hero-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.9rem; // was 1.4rem – tighter stack
  min-width: 0;
}

.l21-hero-kicker-pill {
  align-self: flex-start;
  padding: 0.4rem 1.25rem;
  border-radius: 999px;
  font-size: 0.78rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
  background: linear-gradient(90deg, #f8c977, #52f0ff);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
  margin-bottom: 0.1rem; // keeps pill close to the title
}

.l21-hero-title {
  font-size: 2.5rem;
  line-height: 1.12;
  font-weight: 700;
  color: #f9fbff;
  margin: 0; // remove any default margin
}

.l21-hero-body {
  max-width: 34rem;
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(222, 234, 255, 0.85);
  margin: 0; // sit tighter to the title
}

.l21-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 0.4rem; // was 0.25–0.6; keeps buttons tucked in
}

/* CTA buttons */
.l21-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.8rem;
  border-radius: 999px;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid transparent;
  transition: background 160ms ease, color 160ms ease, box-shadow 160ms ease,
    transform 120ms ease;
  cursor: pointer;
}

.l21-cta--primary {
  background: linear-gradient(90deg, #f7c86e, #41e4ff);
  color: #02030a;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(255, 255, 255, 0.18);
}

.l21-cta--primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.9),
    0 0 0 1px rgba(255, 255, 255, 0.22);
}

.l21-cta--ghost {
  background: rgba(0, 0, 0, 0.45);
  color: rgba(231, 241, 255, 0.9);
  border-color: rgba(139, 170, 255, 0.4);
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.8);
}

.l21-cta--ghost:hover {
  background: rgba(0, 0, 0, 0.7);
  transform: translateY(-1px);
}

/* Responsiveness */
@media (max-width: 1024px) {
  .l21-home {
    padding-top: 2.4rem;
  }

  .l21-home-shell {
    padding: 2rem 2.4rem 2.2rem;
  }

  .l21-hero-logo-card {
    flex: 0 0 320px;
  }
}

@media (max-width: 860px) {
  .l21-hero-layout {
    flex-direction: column;
  }

  .l21-hero-logo-card {
    align-self: center;
    max-width: 360px;
    width: 100%;
  }

  .l21-hero-main {
    text-align: left;
  }

  .l21-hero-kicker-pill {
    align-self: flex-start;
  }
}

@media (max-width: 640px) {
  .l21-home {
    padding: 2.2rem 1rem 3.6rem;
  }

  .l21-home-shell {
    padding: 1.8rem 1.6rem 2rem;
    border-radius: 1.8rem;
  }

  .l21-hero-title {
    font-size: 2.1rem;
  }

  .l21-hero-actions {
    justify-content: flex-start;
  }
}
</style>
