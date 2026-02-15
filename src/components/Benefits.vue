<script setup lang="ts">
import { 
  TrendingUp, 
  Users2, 
  Clock, 
  Shield, 
  Puzzle, 
  Headphones 
} from 'lucide-vue-next';

const benefits = [
  {
    icon: TrendingUp,
    iconBg: 'bg-[#D4644E]/10',
    iconColor: 'text-[#D4644E]',
    dotColor: 'bg-[#D4644E]',
    title: 'Productivité accrue',
    description: 'Automatisez les tâches répétitives et concentrez-vous sur ce qui compte vraiment.',
    bullets: [
      'Automatisation intelligente',
      'Rappels personnalisés',
      'Rapports de productivité'
    ],
    stats: [
      { value: '40%', label: 'Gains de temps' },
      { value: '2x', label: 'Plus rapide' }
    ]
  },
  {
    icon: Users2,
    iconBg: 'bg-[#4A7C59]/10',
    iconColor: 'text-[#4A7C59]',
    dotColor: 'bg-[#4A7C59]',
    title: 'Collaboration fluide',
    description: 'Travaillez ensemble en temps réel avec des outils de communication intégrés.',
    bullets: [
      'Commentaires en temps réel',
      'Partage de fichiers',
      'Mentions @équipe'
    ],
    stats: [
      { value: '98%', label: 'Satisfaction' },
      { value: '50+', label: 'Utilisateurs actifs' }
    ]
  },
  {
    icon: Clock,
    iconBg: 'bg-[#2E5AAC]/10',
    iconColor: 'text-[#2E5AAC]',
    dotColor: 'bg-[#2E5AAC]',
    title: 'Gains de temps',
    description: 'Réduisez les réunions et les échanges d\'emails avec une visibilité complète.',
    bullets: [
      'Tableaux de bord visuels',
      'Suivi en temps réel',
      'Rapports automatiques'
    ],
    stats: [
      { value: '15h', label: 'Économisées/mois' },
      { value: '60%', label: 'Moins de réunions' }
    ]
  },
  {
    icon: Shield,
    iconBg: 'bg-[#7B68EE]/10',
    iconColor: 'text-[#7B68EE]',
    dotColor: 'bg-[#7B68EE]',
    title: 'Sécurité maximale',
    description: 'Vos données sont protégées avec un chiffrement de niveau entreprise et une conformité SOC 2.',
    bullets: [
      'Chiffrement AES-256',
      'Authentification SSO',
      'Conformité RGPD'
    ],
    stats: [
      { value: '99.9%', label: 'Disponibilité' },
      { value: 'SOC 2', label: 'Certifié' }
    ]
  },
  {
    icon: Puzzle,
    iconBg: 'bg-[#E8913A]/10',
    iconColor: 'text-[#E8913A]',
    dotColor: 'bg-[#E8913A]',
    title: 'Intégrations puissantes',
    description: 'Connectez Taskflow à vos outils préférés pour un flux de travail sans interruption.',
    bullets: [
      'Slack, Teams, Discord',
      'GitHub, GitLab, Jira',
      'Google, Notion, Figma'
    ],
    stats: [
      { value: '100+', label: 'Intégrations' },
      { value: 'API', label: 'Disponible' }
    ]
  },
  {
    icon: Headphones,
    iconBg: 'bg-[#3D9B8C]/10',
    iconColor: 'text-[#3D9B8C]',
    dotColor: 'bg-[#3D9B8C]',
    title: 'Support 24/7',
    description: 'Notre équipe d\'experts est disponible à tout moment pour vous aider à réussir.',
    bullets: [
      'Chat en direct',
      'Centre d\'aide complet',
      'Sessions de formation'
    ],
    stats: [
      { value: '2min', label: 'Temps de réponse' },
      { value: '95%', label: 'Satisfaction' }
    ]
  }
];
</script>

<template>
  <section id="benefits" class="py-24 px-6 lg:px-8 bg-[#FFFBF7]">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col items-center gap-16">
        <!-- Header -->
        <div class="section-header text-center max-w-2xl">
          <div class="flex items-center justify-center gap-4 mb-4">
            <div class="w-10 h-0.5 bg-border"></div>
            <span class="text-[13px] font-semibold text-primary tracking-[1px] uppercase">Avantages</span>
            <div class="w-10 h-0.5 bg-border"></div>
          </div>
          <h2 class="font-heading text-4xl sm:text-[44px] font-semibold text-text-primary leading-[1.15] tracking-[-1px] mb-4">
            Pourquoi les équipes choisissent Taskflow
          </h2>
          <p class="text-lg text-text-secondary leading-[1.7]">
            Taskflow vous offre tous les outils nécessaires pour optimiser votre workflow et atteindre vos objectifs plus rapidement.
          </p>
        </div>

        <!-- Benefits Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div 
            v-for="(benefit, index) in benefits" 
            :key="index"
            class="benefit-card bg-card-bg rounded-3xl border border-border p-8 flex flex-col gap-4"
          >
            <!-- Icon -->
            <div :class="['w-12 h-12 rounded-xl flex items-center justify-center', benefit.iconBg]">
              <component :is="benefit.icon" :class="['w-6 h-6', benefit.iconColor]" />
            </div>

            <!-- Content -->
            <h3 class="font-heading text-[22px] font-semibold text-text-primary">
              {{ benefit.title }}
            </h3>
            <p class="text-[15px] text-text-secondary leading-[1.6]">
              {{ benefit.description }}
            </p>

            <!-- Bullets -->
            <ul class="flex flex-col gap-2 mt-2">
              <li 
                v-for="(bullet, bIndex) in benefit.bullets" 
                :key="bIndex"
                class="flex items-center gap-2 text-sm text-text-secondary"
              >
                <span :class="['w-1.5 h-1.5 rounded-full', benefit.dotColor]"></span>
                {{ bullet }}
              </li>
            </ul>

            <!-- Stats -->
            <div class="flex gap-8 mt-4 pt-4 border-t border-border">
              <div 
                v-for="(stat, sIndex) in benefit.stats" 
                :key="sIndex"
                class="flex flex-col"
              >
                <span :class="['font-heading text-2xl font-semibold', benefit.iconColor]">
                  {{ stat.value }}
                </span>
                <span class="text-xs text-text-muted">{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
