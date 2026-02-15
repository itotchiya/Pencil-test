<script setup lang="ts">
import { Sparkles, Play } from 'lucide-vue-next';
import { onMounted } from 'vue';
import Button from './Button.vue';

onMounted(() => {
  // Hero entrance animation
  if (typeof window !== 'undefined' && window.gsap) {
    gsap.fromTo('.hero-badge',
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.7)', delay: 0.2 }
    );
    
    gsap.fromTo('.hero-headline',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.4 }
    );
    
    gsap.fromTo('.hero-sub',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.6 }
    );
    
    gsap.fromTo('.hero-cta',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.8 }
    );
    
    gsap.fromTo('.hero-screenshot',
      { opacity: 0, y: 60, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power2.out', delay: 1 }
    );
  }
});
</script>

<template>
  <section id="hero" class="pt-32 pb-16 px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col items-center text-center">
        <!-- Badge -->
        <div class="hero-badge inline-flex items-center gap-2 px-5 py-2 bg-primary-light rounded-full border border-[#E8C4B8] mb-8">
          <Sparkles class="w-3.5 h-3.5 text-primary" />
          <span class="text-[13px] font-medium text-primary">Désormais avec planification IA</span>
        </div>

        <!-- Headline -->
        <h1 class="hero-headline font-heading text-5xl sm:text-6xl lg:text-[72px] font-semibold text-text-primary leading-[1.05] tracking-[-2px] max-w-3xl mb-6">
          Enfin, gardez le contrôle<br class="hidden sm:block" /> de chaque projet
        </h1>

        <!-- Subtext -->
        <p class="hero-sub text-lg text-text-secondary leading-[1.7] max-w-xl mb-8">
          Taskflow réunit vos tâches, équipes et calendriers dans un espace de travail élégant — pour ne plus rien laisser passer.
        </p>

        <!-- CTAs -->
        <div class="hero-cta flex flex-col sm:flex-row items-center gap-4 mb-6">
          <Button href="#pricing" variant="primary" size="md">
            Commencer gratuitement
          </Button>
          <Button variant="secondary" size="md" @click="$emit('watchDemo')">
            <Play class="w-4 h-4 mr-2" />
            Voir la démo
          </Button>
        </div>

        <!-- Trust text -->
        <p class="hero-trust text-[13px] font-medium text-text-muted mb-14">
          Gratuit à vie pour les particuliers — Pas de carte bancaire requise
        </p>

        <!-- Screenshot -->
        <div class="hero-screenshot-container relative w-full max-w-5xl mx-auto overflow-visible">
          <div class="hero-screenshot bg-card-bg rounded-2xl border border-border p-6 shadow-screenshot will-change-transform">
            <div class="bg-white rounded-xl border border-border h-[500px] flex items-center justify-center">
              <span class="text-text-muted text-base font-medium">Capture d'écran du produit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
