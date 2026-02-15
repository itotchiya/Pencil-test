<script setup lang="ts">
import { LayoutDashboard, Users, Zap } from 'lucide-vue-next';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Tableaux & Listes',
    description: 'Alternez entre les tableaux Kanban, les listes et les vues calendrier. Organisez votre travail comme bon vous semble.'
  },
  {
    icon: Users,
    title: 'Collaboration d\'équipe',
    description: 'Attribuez des tâches, laissez des commentaires et partagez des fichiers — tout le monde reste aligné sans réunions inutiles.'
  },
  {
    icon: Zap,
    title: 'Automatisation intelligente',
    description: 'Définissez des règles pour déplacer des tâches, envoyer des rappels et mettre à jour les statuts — votre équipe se concentre sur l\'essentiel.'
  }
];
</script>

<template>
  <section id="features" class="py-24 px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col items-center gap-16">
        <!-- Header -->
        <div class="section-header text-center max-w-2xl">
          <div class="flex items-center justify-center gap-4 mb-4">
            <div class="w-10 h-0.5 bg-border"></div>
            <span class="text-[13px] font-semibold text-primary tracking-[1px] uppercase">Fonctionnalités</span>
            <div class="w-10 h-0.5 bg-border"></div>
          </div>
          <h2 class="font-heading text-4xl sm:text-[44px] font-semibold text-text-primary leading-[1.15] tracking-[-1px] mb-4">
            Tout ce dont vous avez besoin<br />pour livrer plus vite
          </h2>
          <p class="text-lg text-text-secondary leading-[1.7]">
            Des simples tâches aux projets complexes, Taskflow s\'adapte à la façon dont votre équipe travaille.
          </p>
        </div>

        <!-- Feature Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            class="feature-card bg-card-bg rounded-3xl border border-border p-9"
          >
            <div class="w-12 h-12 bg-primary-light rounded-[14px] flex items-center justify-center mb-5">
              <component :is="feature.icon" class="w-6 h-6 text-primary" />
            </div>
            <h3 class="font-heading text-[22px] font-semibold text-text-primary mb-3">
              {{ feature.title }}
            </h3>
            <p class="text-[15px] text-text-secondary leading-[1.6]">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
