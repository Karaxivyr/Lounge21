<template>
  <div class="l21-creators">
    <section class="l21-creators-shell">
      <!-- Page header -->
      <header class="l21-creators-header">
        <p class="l21-creators-kicker">The lineup</p>
        <h1 class="l21-creators-title">Meet the anchors of the Lounge.</h1>
        <p class="l21-creators-body">
          Three core creators, each with their own flavor of cozy chaos.
        </p>
      </header>

      <div class="l21-creators-divider"></div>

      <!-- Creator cards -->
      <div class="l21-creators-grid">
        <article
          v-for="creator in creators"
          :key="creator.id"
          class="l21-creator-card"
        >
          <div class="l21-creator-header">
            <div class="l21-creator-avatar" aria-hidden="true">
              <span>{{ creator.initial }}</span>
            </div>

            <div class="l21-creator-meta">
              <h2 class="l21-creator-name">{{ creator.name }}</h2>
              <p class="l21-creator-tagline">{{ creator.tagline }}</p>
            </div>
          </div>

          <div class="l21-creator-footer">
            <RouterLink
              v-if="creator.status === 'active'"
              :to="creator.link"
              class="l21-creator-pill l21-creator-pill--primary"
            >
              Join their lounge
            </RouterLink>

            <span v-else class="l21-creator-pill l21-creator-pill--ghost">
              Coming soon
            </span>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

const creators = [
  {
    id: "karaxivyr",
    name: "Karaxivyr",
    initial: "K",
    tagline: "Host • Late-night chaos",
    status: "active",
    link: "/creators/karaxivyr",
  },
  {
    id: "abelix",
    name: "Abelix",
    initial: "A",
    tagline: "Storycraft • Cozy worlds",
    status: "coming",
    link: "",
  },
  {
    id: "vaelora",
    name: "Vaelora",
    initial: "V",
    tagline: "Vibes • Watch nights",
    status: "coming",
    link: "",
  },
];
</script>

<style scoped lang="scss">
.l21-creators {
  display: flex;
  justify-content: center;
  padding: 2.8rem 1.5rem 4.2rem;
}

.l21-creators-shell {
  width: 100%;
  max-width: 1120px;
  border-radius: 2.25rem;
  padding: 2.4rem 3rem 2.8rem;
  background: radial-gradient(circle at 0% 0%, #2f325c 0, transparent 45%),
    radial-gradient(circle at 100% 0%, #5a315f 0, transparent 50%),
    linear-gradient(135deg, #071024 0%, #041225 40%, #071d3d 70%, #1e234e 100%);
  box-shadow: 0 24px 80px rgba(2, 5, 16, 0.9),
    0 0 0 1px rgba(255, 255, 255, 0.02);
}

/* Header */
.l21-creators-header {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.l21-creators-kicker {
  margin: 0;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(219, 232, 255, 0.76);
}

.l21-creators-title {
  margin: 0;
  font-size: 1.9rem;
  line-height: 1.2;
  font-weight: 700;
  color: #f9fbff;
}

.l21-creators-body {
  margin: 0.25rem 0 0;
  font-size: 0.95rem;
  line-height: 1.7;
  max-width: 32rem;
  color: rgba(222, 234, 255, 0.84);
}

/* Divider line */
.l21-creators-divider {
  margin: 1.6rem 0 1.9rem;
  height: 1px;
  width: 100%;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    #f8c977 0%,
    #41e4ff 35%,
    #7b7dff 70%,
    #f173b6 100%
  );
  opacity: 0.9;
}

/* Cards layout */
.l21-creators-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.l21-creator-card {
  flex: 1 1 0;
  min-width: 240px;
  border-radius: 1.6rem;
  padding: 1.5rem 1.7rem 1.4rem;
  background: radial-gradient(
      circle at 0% 0%,
      rgba(255, 255, 255, 0.08),
      transparent 55%
    ),
    #050814;
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.9),
    0 0 0 1px rgba(255, 255, 255, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Card header */
.l21-creator-header {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.l21-creator-avatar {
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 999px;
  background: conic-gradient(from 220deg, #41e4ff, #f8c977, #f173b6, #41e4ff);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.7);
}

.l21-creator-avatar span {
  font-size: 0.95rem;
  font-weight: 700;
  color: #02030a;
}

.l21-creator-meta {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.l21-creator-name {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: #f7f8ff;
}

.l21-creator-tagline {
  margin: 0;
  font-size: 0.82rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(190, 204, 255, 0.9);
}

/* Card footer */
.l21-creator-footer {
  margin-top: 1.4rem;
}

.l21-creator-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.55rem 1.5rem;
  border-radius: 999px;
  font-size: 0.78rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  border: 1px solid transparent;
  text-decoration: none;
  white-space: nowrap;
  transition: background 150ms ease, color 150ms ease, box-shadow 150ms ease,
    transform 120ms ease;
}

.l21-creator-pill--primary {
  background: linear-gradient(90deg, #f7c86e, #41e4ff);
  color: #02030a;
  box-shadow: 0 14px 38px rgba(0, 0, 0, 0.85),
    0 0 0 1px rgba(255, 255, 255, 0.18);
}

.l21-creator-pill--primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 18px 46px rgba(0, 0, 0, 0.95),
    0 0 0 1px rgba(255, 255, 255, 0.22);
}

.l21-creator-pill--ghost {
  background: rgba(3, 6, 18, 0.7);
  color: rgba(214, 226, 255, 0.92);
  border-color: rgba(118, 151, 255, 0.5);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.85);
}

/* Responsiveness */
@media (max-width: 1024px) {
  .l21-creators {
    padding-top: 2.4rem;
  }

  .l21-creators-shell {
    padding: 2.2rem 2.2rem 2.6rem;
  }
}

@media (max-width: 768px) {
  .l21-creators-shell {
    padding: 2rem 1.6rem 2.4rem;
    border-radius: 1.9rem;
  }

  .l21-creators-title {
    font-size: 1.7rem;
  }

  .l21-creators-grid {
    gap: 1.2rem;
  }
}
</style>
