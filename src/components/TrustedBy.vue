<script setup lang="ts">
const logos = ['Stripe', 'Notion', 'Linear', 'Vercel', 'Figma', 'Slack', 'Stripe', 'Notion', 'Linear', 'Vercel', 'Figma', 'Slack'];
</script>

<template>
  <section id="trusted" class="py-10 px-6 lg:px-8 border-y border-border overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col items-center gap-6">
        <span class="text-[13px] font-semibold text-text-muted tracking-[1px] uppercase">
          Fait confiance par les équipes de
        </span>
        
        <!-- Infinite scrolling logo marquee -->
        <div class="logo-marquee relative w-full">
          <div class="logo-track flex items-center gap-14">
            <span 
              v-for="(logo, index) in logos" 
              :key="index"
              class="trusted-logo text-xl font-bold text-[#D4CFCA] whitespace-nowrap flex-shrink-0"
            >
              {{ logo }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.logo-marquee {
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.logo-track {
  animation: scroll 20s linear infinite;
}

.logo-track:hover {
  animation-play-state: paused;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
