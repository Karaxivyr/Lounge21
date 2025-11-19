<template>
  <div class="l21-about">
    <section class="l21-about-shell">
      <!-- Header -->
      <header class="l21-about-header">
        <p class="l21-about-kicker">About the lounge</p>
        <h1 class="l21-about-title">Why Lounge21 exists.</h1>
        <p class="l21-about-body">
          A small, invite-only, 21+ lounge for late-night games, watch nights,
          and storycrafting with people you trust.
        </p>
      </header>

      <div class="l21-about-divider"></div>

      <!-- Main content -->
      <div class="l21-about-layout">
        <!-- How nights feel -->
        <section class="l21-about-column l21-about-column--flow">
          <h2 class="l21-section-title">How nights feel.</h2>

          <ul class="l21-flow-list">
            <li class="l21-flow-item">
              <h3 class="l21-flow-label">Drop in</h3>
              <p class="l21-flow-copy">
                Say hey, shake off the day, and see what everyone feels like
                doing.
              </p>
            </li>

            <li class="l21-flow-item">
              <h3 class="l21-flow-label">Settle in</h3>
              <p class="l21-flow-copy">
                Co-op runs, campaigns, or “one more episode” nights that run
                long.
              </p>
            </li>

            <li class="l21-flow-item">
              <h3 class="l21-flow-label">Wind down</h3>
              <p class="l21-flow-copy">
                Soft chaos, debriefs, and “probably one more round” before bed.
              </p>
            </li>
          </ul>
        </section>

        <!-- Values / tags -->
        <section class="l21-about-column l21-about-column--values">
          <h2 class="l21-section-title">What we care about.</h2>
          <p class="l21-values-copy">
            Comfort, respect, and long-term vibes—not churn or clout.
          </p>

          <div class="l21-values-pills">
            <span class="l21-pill">21+ only</span>
            <span class="l21-pill">Invite-based</span>
            <span class="l21-pill">Low-drama</span>
            <span class="l21-pill">Camera-optional</span>
            <span class="l21-pill">Story-driven</span>
            <span class="l21-pill">Long-form friends</span>
          </div>
        </section>
      </div>

      <!-- CTA row -->
      <footer class="l21-about-cta">
        <p class="l21-cta-text">Want to pull up a chair?</p>
        <div class="l21-cta-actions">
          <RouterLink to="/creators" class="l21-cta-btn l21-cta-btn--primary">
            Join the lounge
          </RouterLink>
          <RouterLink to="/creators" class="l21-cta-btn l21-cta-btn--ghost">
            Meet our creators
          </RouterLink>
        </div>
      </footer>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped lang="scss">
.l21-about {
  display: flex;
  justify-content: center;
  padding: 2.8rem 1.5rem 4.2rem;
}

.l21-about-shell {
  width: 100%;
  max-width: 1120px;
  border-radius: 2.25rem;
  padding: 2rem 3rem 2.4rem;
  background: radial-gradient(circle at 0% 0%, #2f325c 0, transparent 45%),
    radial-gradient(circle at 100% 0%, #5a315f 0, transparent 50%),
    linear-gradient(135deg, #071024 0%, #041225 40%, #071d3d 70%, #1e234e 100%);
  box-shadow: 0 22px 72px rgba(2, 5, 16, 0.9),
    0 0 0 1px rgba(255, 255, 255, 0.02);
}

/* Header */
.l21-about-header {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.l21-about-kicker {
  margin: 0;
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(219, 232, 255, 0.76);
}

.l21-about-title {
  margin: 0;
  font-size: 1.7rem;
  line-height: 1.2;
  font-weight: 700;
  color: #f9fbff;
}

.l21-about-body {
  margin: 0.25rem 0 0;
  font-size: 0.92rem;
  line-height: 1.6;
  max-width: 32rem;
  color: rgba(222, 234, 255, 0.84);
}

/* Divider line */
.l21-about-divider {
  margin: 1.2rem 0 1.4rem;
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

/* Layout */
.l21-about-layout {
  display: flex;
  flex-wrap: wrap;
  gap: 1.8rem;
}

.l21-about-column {
  flex: 1 1 0;
  min-width: 260px;
}

.l21-section-title {
  margin: 0 0 0.6rem;
  font-size: 0.9rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: rgba(210, 224, 255, 0.9);
}

/* Flow list */
.l21-flow-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.l21-flow-item {
  padding: 0.45rem 0.15rem;
  border-radius: 0.8rem;
}

.l21-flow-label {
  margin: 0 0 0.1rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #f7f8ff;
}

.l21-flow-copy {
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.5;
  color: rgba(208, 222, 255, 0.88);
}

/* Values / pills */
.l21-values-copy {
  margin: 0 0 0.65rem;
  font-size: 0.88rem;
  line-height: 1.5;
  color: rgba(208, 222, 255, 0.88);
}

.l21-values-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.l21-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem 0.85rem;
  border-radius: 999px;
  font-size: 0.76rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: rgba(3, 6, 18, 0.8);
  color: rgba(214, 226, 255, 0.92);
  border: 1px solid rgba(118, 151, 255, 0.55);
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.85);
  white-space: nowrap;
}

/* CTA row */
.l21-about-cta {
  margin-top: 1.8rem;
  padding-top: 1.1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
}

.l21-cta-text {
  margin: 0;
  font-size: 0.88rem;
  color: rgba(220, 231, 255, 0.9);
}

.l21-cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.l21-cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.4rem;
  border-radius: 999px;
  font-size: 0.76rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  border: 1px solid transparent;
  text-decoration: none;
  white-space: nowrap;
  transition: background 150ms ease, color 150ms ease, box-shadow 150ms ease,
    transform 120ms ease;
}

/* Primary gradient button */
.l21-cta-btn--primary {
  background: linear-gradient(90deg, #f7c86e, #41e4ff);
  color: #02030a;
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.85),
    0 0 0 1px rgba(255, 255, 255, 0.18);
}

.l21-cta-btn--primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.95),
    0 0 0 1px rgba(255, 255, 255, 0.22);
}

/* Ghost button */
.l21-cta-btn--ghost {
  background: rgba(3, 6, 18, 0.7);
  color: rgba(214, 226, 255, 0.92);
  border-color: rgba(118, 151, 255, 0.55);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.85);
}

.l21-cta-btn--ghost:hover {
  transform: translateY(-1px);
}

/* Responsiveness */
@media (max-width: 1024px) {
  .l21-about {
    padding-top: 2rem;
  }

  .l21-about-shell {
    padding: 1.8rem 2rem 2.2rem;
  }
}

@media (max-width: 768px) {
  .l21-about-shell {
    padding: 1.7rem 1.4rem 2rem;
    border-radius: 1.9rem;
  }

  .l21-about-title {
    font-size: 1.55rem;
  }

  .l21-about-layout {
    gap: 1.5rem;
  }

  .l21-about-cta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
