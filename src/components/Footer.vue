<script setup lang="ts">
import { Check, Twitter, Github, Linkedin } from 'lucide-vue-next';

const productLinks = [
  { name: 'Fonctionnalités', href: '#features' },
  { name: 'Tarifs', href: '#pricing' },
  { name: 'Intégrations', href: '#' },
  { name: 'Journal des modifications', href: '#' }
];

const companyLinks = [
  { name: 'À propos', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Carrières', href: '#' },
  { name: 'Contact', href: '#' }
];

const legalLinks = [
  { name: 'Politique de confidentialité', href: '#' },
  { name: 'Conditions d\'utilisation', href: '#' },
  { name: 'Sécurité', href: '#' }
];

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' }
];
</script>

<template>
  <footer class="bg-background py-16 px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col gap-12">
        <!-- Top section -->
        <div class="flex flex-col md:flex-row justify-between gap-12">
          <!-- Brand -->
          <div class="max-w-xs">
            <a href="#" class="flex items-center gap-2.5 mb-4">
              <div class="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
                <Check class="w-4 h-4 text-white" />
              </div>
              <span class="font-heading text-xl font-semibold text-text-primary">Taskflow</span>
            </a>
            <p class="text-sm text-text-muted leading-[1.6]">
              L\'outil de gestion de tâches que votre équipe va vraiment adorer.
            </p>
          </div>

          <!-- Links -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
            <!-- Product -->
            <div>
              <h4 class="text-sm font-semibold text-text-primary mb-4">Produit</h4>
              <ul class="space-y-3">
                <li v-for="link in productLinks" :key="link.name">
                  <a 
                    :href="link.href" 
                    class="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {{ link.name }}
                  </a>
                </li>
              </ul>
            </div>

            <!-- Company -->
            <div>
              <h4 class="text-sm font-semibold text-text-primary mb-4">Entreprise</h4>
              <ul class="space-y-3">
                <li v-for="link in companyLinks" :key="link.name">
                  <a 
                    :href="link.href" 
                    class="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {{ link.name }}
                  </a>
                </li>
              </ul>
            </div>

            <!-- Legal -->
            <div>
              <h4 class="text-sm font-semibold text-text-primary mb-4">Légal</h4>
              <ul class="space-y-3">
                <li v-for="link in legalLinks" :key="link.name">
                  <a 
                    :href="link.href" 
                    class="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {{ link.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="h-px bg-border w-full"></div>

        <!-- Bottom section -->
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="text-[13px] text-text-muted">
            © 2026 Taskflow. Tous droits réservés.
          </p>
          
          <div class="flex items-center gap-5">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.href"
              class="text-text-muted hover:text-text-primary transition-colors"
              :aria-label="social.name"
            >
              <component :is="social.icon" class="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
