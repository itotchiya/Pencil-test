<script setup lang="ts">
import { Check } from 'lucide-vue-next';
import Button from './Button.vue';

const tiers = [
  {
    name: 'Gratuit',
    price: '0€',
    period: '/ mois',
    description: 'Parfait pour les particuliers et les petits projets personnels.',
    features: [
      'Jusqu\'à 3 projets',
      'Gestion de tâches de base',
      '1 Go de stockage',
      'Support par email'
    ],
    cta: 'Commencer gratuitement',
    popular: false
  },
  {
    name: 'Pro',
    price: '12€',
    period: '/ mois',
    description: 'Pour les équipes en croissance qui ont besoin de plus de puissance et de flexibilité.',
    features: [
      'Projets illimités',
      'Automatisation avancée',
      '10 Go de stockage par utilisateur',
      'Support prioritaire',
      'Accès API'
    ],
    cta: 'Essai gratuit',
    popular: true
  },
  {
    name: 'Équipe',
    price: '29€',
    period: '/ mois',
    description: 'Pour les équipes qui ont besoin de contrôles avancés et de tout illimité.',
    features: [
      'Tout inclus dans Pro',
      'SSO & sécurité avancée',
      'Stockage illimité',
      'Responsable client dédié',
      'Intégrations personnalisées'
    ],
    cta: 'Contacter les ventes',
    popular: false
  }
];
</script>

<template>
  <section id="pricing" class="py-24 px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col items-center gap-16">
        <!-- Header -->
        <div class="section-header text-center max-w-2xl">
          <div class="flex items-center justify-center gap-4 mb-4">
            <div class="w-10 h-0.5 bg-border"></div>
            <span class="text-[13px] font-semibold text-primary tracking-[1px] uppercase">Tarifs</span>
            <div class="w-10 h-0.5 bg-border"></div>
          </div>
          <h2 class="font-heading text-4xl sm:text-[44px] font-semibold text-text-primary leading-[1.15] tracking-[-1px] mb-4">
            Tarifs simples et transparents
          </h2>
          <p class="text-lg text-text-secondary">
            Commencez gratuitement, passez à la version supérieure quand vous en avez besoin. Pas de frais cachés.
          </p>
        </div>

        <!-- Pricing Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div 
            v-for="(tier, index) in tiers" 
            :key="index"
            :data-popular="tier.popular"
            :class="[
              'pricing-card rounded-3xl p-9',
              tier.popular 
                ? 'bg-dark-bg text-white' 
                : 'bg-card-bg border border-border'
            ]"
          >
            <!-- Popular badge -->
            <div v-if="tier.popular" class="mb-4">
              <span class="inline-block px-3.5 py-1.5 bg-primary text-white text-xs font-semibold rounded-full">
                Le plus populaire
              </span>
            </div>

            <!-- Tier name -->
            <span 
              :class="[
                'text-sm font-semibold tracking-[1px] uppercase',
                tier.popular ? 'text-text-muted' : 'text-text-muted'
              ]"
            >
              {{ tier.name }}
            </span>

            <!-- Price -->
            <div class="flex items-end gap-1 mt-3 mb-3">
              <span 
                :class="[
                  'font-heading text-5xl font-semibold',
                  tier.popular ? 'text-[#FFFBF7]' : 'text-text-primary'
                ]"
              >
                {{ tier.price }}
              </span>
              <span class="text-[15px] text-text-muted mb-2">{{ tier.period }}</span>
            </div>

            <!-- Description -->
            <p 
              :class="[
                'text-[15px] leading-[1.6] mb-6',
                tier.popular ? 'text-text-muted' : 'text-text-secondary'
              ]"
            >
              {{ tier.description }}
            </p>

            <!-- Divider -->
            <div 
              :class="[
                'h-px w-full mb-6',
                tier.popular ? 'bg-[#4A3F3C]' : 'bg-border'
              ]"
            ></div>

            <!-- Features -->
            <ul class="space-y-3 mb-8">
              <li 
                v-for="(feature, fIndex) in tier.features" 
                :key="fIndex"
                class="flex items-center gap-3"
              >
                <Check 
                  :class="[
                    'w-5 h-5',
                    tier.popular ? 'text-primary' : 'text-primary'
                  ]" 
                />
                <span 
                  :class="[
                    'text-[15px]',
                    tier.popular ? 'text-[#A89890]' : 'text-text-secondary'
                  ]"
                >
                  {{ feature }}
                </span>
              </li>
            </ul>

            <!-- CTA -->
            <Button 
              href="#"
              :variant="tier.popular ? 'primary' : 'secondary'"
              size="sm"
              full-width
            >
              {{ tier.cta }}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
