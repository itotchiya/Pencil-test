<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Créez votre espace de travail',
    description: 'Inscrivez-vous en quelques secondes. Importez vos tâches existantes ou commencez avec nos modèles.'
  },
  {
    number: '02',
    title: 'Invitez votre équipe',
    description: 'Ajoutez vos collègues en un clic. Définissez les rôles, les permissions et mettez tout le monde à niveau.'
  },
  {
    number: '03',
    title: 'Commencez à livrer',
    description: 'Suivez les progrès, respectez les délais et célébrez les victoires — tout dans un seul endroit que votre équipe adore utiliser.'
  }
];
</script>

<template>
  <section id="how-it-works" class="py-24 px-6 lg:px-8 bg-dark-bg">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col items-center gap-16">
        <!-- Header -->
        <div class="section-header text-center max-w-2xl">
          <div class="flex items-center justify-center gap-4 mb-4">
            <div class="w-10 h-0.5 bg-[#4A3F3C]"></div>
            <span class="text-[13px] font-semibold text-primary tracking-[1px] uppercase">Comment ça marche</span>
            <div class="w-10 h-0.5 bg-[#4A3F3C]"></div>
          </div>
          <h2 class="font-heading text-4xl sm:text-[44px] font-semibold text-[#FFFBF7] leading-[1.15] tracking-[-1px]">
            Opérationnel en<br />trois étapes
          </h2>
        </div>

        <!-- Steps -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div 
            v-for="(step, index) in steps" 
            :key="index"
            class="step-card bg-dark-card rounded-[20px] p-9 hover:bg-dark-card/80 transition-colors"
          >
            <span class="step-number font-heading text-5xl font-semibold text-primary mb-5 block">
              {{ step.number }}
            </span>
            <h3 class="font-heading text-[22px] font-semibold text-[#FFFBF7] mb-3">
              {{ step.title }}
            </h3>
            <p class="text-[15px] text-text-muted leading-[1.6]">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
