<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Check } from 'lucide-vue-next';
import Button from './Button.vue';

const isScrolled = ref(false);

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 20;
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});
</script>

<template>
  <header 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-2.5">
          <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Check class="w-5 h-5 text-white" />
          </div>
          <span class="font-heading text-[22px] font-semibold text-text-primary">Taskflow</span>
        </a>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center gap-10">
          <a href="#features" class="text-[15px] font-medium text-text-secondary hover:text-text-primary transition-colors">Fonctionnalités</a>
          <a href="#pricing" class="text-[15px] font-medium text-text-secondary hover:text-text-primary transition-colors">Tarifs</a>
          <a href="#how-it-works" class="text-[15px] font-medium text-text-secondary hover:text-text-primary transition-colors">À propos</a>
        </nav>

        <!-- Right side -->
        <div class="flex items-center gap-6">
          <a href="#" class="hidden sm:block text-[15px] font-medium text-text-secondary hover:text-text-primary transition-colors">
            Se connecter
          </a>
          <Button href="#pricing" variant="primary" size="sm">
            Commencer
          </Button>
        </div>
      </div>
    </div>
  </header>
</template>
