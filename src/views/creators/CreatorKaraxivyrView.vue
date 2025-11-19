<!-- src/views/CreatorKaraxivyrView.vue -->
<script setup>
import L21Button from "@/components/ui/L21Button.vue";
import L21Card from "@/components/ui/L21Card.vue";
</script>

<template>
  <div class="creator-shell">
    <div class="l21-page creator">
      <!-- HERO -->
      <section class="creator-hero">
        <div class="creator-hero-layout">
          <!-- LEFT: NAME + VIBE -->
          <div class="creator-hero-main">
            <p class="creator-pill">Creator Lounge</p>

            <h1>Karaxivyr</h1>
            <p class="creator-handle">@Karaxivyr</p>

            <p class="creator-tagline">
              Tactical storycraft, moody sci-fi worlds, and late-night
              theorycraft.
            </p>

            <div class="creator-tags">
              <span class="creator-tag">Storycraft</span>
              <span class="creator-tag">Sci-Fi</span>
              <span class="creator-tag">Tactical</span>
            </div>
          </div>

          <!-- RIGHT: STATUS / QUICK GLANCE -->
          <aside class="creator-hero-side">
            <div class="creator-status-card">
              <h2>Current vibe</h2>
              <p>
                Semi-nocturnal strategist, usually found deep in a campaign,
                tinkering with systems, or writing the next chapter of a world
                that probably has too many factions.
              </p>

              <ul class="creator-status-list">
                <li>
                  <span class="status-label">Core focus</span>
                  <span class="status-value"
                    >Strategy & narrative-driven games</span
                  >
                </li>
                <li>
                  <span class="status-label">Session energy</span>
                  <span class="status-value"
                    >Chill, analytical, lore-heavy</span
                  >
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <!-- BODY LAYOUT -->
      <section class="creator-layout">
        <!-- LEFT COLUMN -->
        <div class="creator-column creator-column--primary">
          <section class="creator-section">
            <h2>About Karaxivyr</h2>
            <p>
              Karaxivyr is the kind of storyteller who treats every save file
              like a living campaign. Expect long-form runs, careful
              decision-making, and the kind of worldbuilding that makes you
              wonder if there’s a hidden wiki somewhere.
            </p>
            <p>
              Sessions lean into slower, intentional pacing—breaking down lore,
              mechanics, and character motivations while still leaving room for
              dry humor and the occasional chaos choice.
            </p>
          </section>

          <section class="creator-section">
            <h3>Signature vibes</h3>
            <ul class="creator-list">
              <li>
                Long-form campaigns with persistent worlds and evolving stakes.
              </li>
              <li>
                Systems talk: builds, theorycraft, and “what if” scenarios.
              </li>
              <li>
                Heavy emphasis on atmosphere—soundtracks, lighting, and mood to
                match the story beats.
              </li>
            </ul>
          </section>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="creator-column creator-column--secondary">
          <L21Card class="creator-card">
            <h3>Current focus</h3>
            <ul class="creator-list">
              <li>Worldbuilding and campaign prep for future sessions.</li>
              <li>Digging into strategy / tactics heavy titles.</li>
              <li>Refining a cohesive sci-fi setting for shared stories.</li>
            </ul>
          </L21Card>

          <L21Card class="creator-card creator-card--links">
            <h3>Where to find Karaxivyr</h3>
            <p class="creator-links-note">
              Add platform links here when you’re ready to go live.
            </p>
            <div class="creator-links-actions">
              <!-- Replace these href values with real links when ready -->
              <L21Button variant="primary" size="sm">
                Primary platform (coming soon)
              </L21Button>
              <L21Button variant="secondary" size="sm">
                More links (coming soon)
              </L21Button>
            </div>
          </L21Card>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/_tokens.scss" as *;

/* PAGE WRAP */
.creator-shell {
  padding-block: $l21-space-48 $l21-space-64;
}

/* HERO */
.creator-hero {
  border-radius: 32px;
  background: linear-gradient(
    120deg,
    #050814 0%,
    #07162f 32%,
    #102a57 68%,
    #22275a 100%
  );
  box-shadow: 0 26px 80px rgba(0, 0, 0, 0.95), 0 0 0 1px rgba(11, 18, 52, 0.7);
  margin-bottom: $l21-space-32;
}

.creator-hero-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1.2fr);
  gap: $l21-space-32;
  padding: $l21-space-32;
  align-items: center;
}

/* HERO LEFT */
.creator-hero-main {
  max-width: 32rem;
}

.creator-pill {
  display: inline-flex;
  align-items: center;
  gap: $l21-space-8;
  padding: 4px 14px;
  border-radius: 999px;
  border: none;
  background: linear-gradient(
    90deg,
    rgba(255, 191, 92, 0.9),
    rgba(32, 215, 228, 0.95)
  );
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: #05091a;
}

.creator-hero-main h1 {
  margin-top: $l21-space-16;
  margin-bottom: $l21-space-4;
  font-family: $l21-font-family-display;
  font-size: $l21-font-size-h1;
}

.creator-handle {
  font-size: 0.9rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: $l21-color-text-muted;
  margin-bottom: $l21-space-12;
}

.creator-tagline {
  color: $l21-color-text-muted;
  margin-bottom: $l21-space-16;
}

/* TAG CHIPS */
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

/* HERO RIGHT STATUS */
.creator-hero-side {
  display: flex;
  align-items: stretch;
}

.creator-status-card {
  border-radius: 24px;
  padding: $l21-space-16;
  background: linear-gradient(135deg, #050814, #06142c);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(10, 18, 40, 0.7);
}

.creator-status-card h2 {
  font-size: $l21-font-size-h3;
  margin-bottom: $l21-space-8;
}

.creator-status-card p {
  font-size: 0.9rem;
  color: $l21-color-text-muted;
  margin-bottom: $l21-space-12;
}

.creator-status-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: $l21-space-8;
  font-size: 0.85rem;
}

.creator-status-list li {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.status-label {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.7rem;
  color: $l21-color-text-muted;
}

.status-value {
  color: $l21-color-text-main;
}

/* BODY LAYOUT */
.creator-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(0, 1.1fr);
  gap: $l21-space-24;
}

/* COLUMNS */
.creator-column {
  display: flex;
  flex-direction: column;
  gap: $l21-space-16;
}

/* SECTIONS */
.creator-section {
  padding: $l21-space-16;
  border-radius: 20px;
  background: linear-gradient(135deg, #050814, #050b1c);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(9, 18, 40, 0.7);
}

.creator-section h2,
.creator-section h3 {
  margin-bottom: $l21-space-8;
}

.creator-section p {
  font-size: 0.95rem;
  color: $l21-color-text-muted;
}

/* LISTS */
.creator-list {
  margin: 0;
  padding-left: 1.1rem;
  font-size: 0.9rem;
  color: $l21-color-text-muted;
}

.creator-list li + li {
  margin-top: 6px;
}

/* RIGHT COLUMN CARDS */
.creator-card {
  margin-bottom: $l21-space-8;
}

.creator-card :deep(h3) {
  margin-bottom: $l21-space-8;
}

/* Links card content */
.creator-card--links {
  margin-top: $l21-space-8;
}

.creator-links-note {
  font-size: 0.85rem;
  color: $l21-color-text-muted;
  margin-bottom: $l21-space-12;
}

.creator-links-actions {
  display: flex;
  flex-wrap: wrap;
  gap: $l21-space-8;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .creator-hero-layout {
    grid-template-columns: minmax(0, 1fr);
  }

  .creator-layout {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 640px) {
  .creator-shell {
    padding-block: $l21-space-32 $l21-space-48;
  }

  .creator-hero-layout {
    padding: $l21-space-24;
  }

  .creator-hero-main h1 {
    font-size: 2.4rem;
  }
}
</style>
