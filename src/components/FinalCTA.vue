<script setup lang="ts">
import { onMounted } from 'vue';
import Button from './Button.vue';

onMounted(() => {
  if (typeof window !== 'undefined' && window.gsap) {
    gsap.fromTo('.cta-title',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#final-cta',
          start: 'top 70%',
          once: true
        }
      }
    );

    gsap.fromTo('.cta-buttons',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: '#final-cta',
          start: 'top 70%',
          once: true
        }
      }
    );
  }
});
</script>

<template>
  <section id="final-cta" class="py-24 px-6 lg:px-8 bg-dark-bg">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col items-center text-center gap-8">
        <h2 class="cta-title font-heading text-4xl sm:text-[52px] font-semibold text-[#FFFBF7] leading-[1.1] tracking-[-1px] max-w-2xl">
          Prêt à prendre le contrôle<br />de votre travail ?
        </h2>
        
        <p class="text-lg text-text-muted max-w-xl">
          Rejoignez plus de 10 000 équipes qui livrent plus vite avec Taskflow.
        </p>

        <div class="cta-buttons flex flex-col sm:flex-row items-center gap-4">
          <Button href="#pricing" variant="primary" size="md">
            Commencer gratuitement
          </Button>
          <Button href="#" variant="outline" size="md">
            Contacter les ventes
          </Button>
        </div>

        <p class="text-[13px] font-medium text-text-secondary">
          Pas de carte bancaire requise · Gratuit à vie pour les particuliers · Annulation à tout moment
        </p>
      </div>
    </div>
  </section>
</template>
