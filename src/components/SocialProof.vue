<script setup lang="ts">
const stats = [
  { value: 10, suffix: 'K+', label: 'Équipes actives' },
  { value: 2, suffix: 'M+', label: 'Tâches terminées' },
  { value: 99.9, suffix: '%', label: 'Disponibilité' }
];

const testimonials = [
  {
    quote: '"Taskflow a remplacé trois outils pour nous. Notre équipe a enfin un endroit pour tout — et nous aimons vraiment l\'utiliser."',
    author: 'Sarah Chen',
    role: 'Cheffe de produit chez Linear'
  },
  {
    quote: '"Nous avons livré 40% de fonctionnalités en plus au T3 après la migration. L\'automatisation seule nous fait gagner des heures chaque semaine."',
    author: 'Marcus Johnson',
    role: 'Responsable technique chez Vercel'
  }
];
</script>

<template>
  <section id="social-proof" class="py-24 px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col items-center gap-16">
        <!-- Header -->
        <div class="section-header text-center max-w-2xl">
          <div class="flex items-center justify-center gap-4 mb-4">
            <div class="w-10 h-0.5 bg-border"></div>
            <span class="text-[13px] font-semibold text-primary tracking-[1px] uppercase">Témoignages</span>
            <div class="w-10 h-0.5 bg-border"></div>
          </div>
          <h2 class="font-heading text-4xl sm:text-[44px] font-semibold text-text-primary leading-[1.15] tracking-[-1px]">
            Adoré par plus de 10 000 équipes<br />dans le monde
          </h2>
        </div>

        <!-- Stats -->
        <div class="flex flex-wrap justify-center gap-12 sm:gap-20">
          <div 
            v-for="(stat, index) in stats" 
            :key="index"
            class="text-center w-48"
          >
            <div 
              class="stat-number font-heading text-[44px] font-semibold text-primary mb-1"
              :data-value="stat.value"
              :data-suffix="stat.suffix"
            >
              0{{ stat.suffix }}
            </div>
            <div class="text-[15px] font-medium text-text-secondary">{{ stat.label }}</div>
          </div>
        </div>

        <!-- Testimonials -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="index"
            class="testimonial-card bg-card-bg rounded-3xl border border-border p-9"
          >
            <p class="text-base text-text-primary leading-[1.6] italic mb-5">
              {{ testimonial.quote }}
            </p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-border"></div>
              <div>
                <div class="text-[15px] font-semibold text-text-primary">{{ testimonial.author }}</div>
                <div class="text-[13px] text-text-muted">{{ testimonial.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
