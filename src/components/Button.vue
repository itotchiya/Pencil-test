<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'outlineDark';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  fullWidth: false,
  disabled: false,
  type: 'button'
});

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-[28px] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shrink-0';

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-primary text-white hover:bg-[#c55a45]';
    case 'secondary':
      return 'bg-white text-text-primary border border-border hover:bg-[#f5f0ed]';
    case 'outline':
      return 'bg-transparent text-[#FFFBF7] border border-[#4A3F3C] hover:bg-[#3d3330]';
    case 'outlineDark':
      return 'bg-white text-text-primary border border-border hover:bg-[#f5f0ed]';
    case 'ghost':
      return 'bg-transparent text-text-secondary hover:text-text-primary';
    default:
      return 'bg-primary text-white hover:bg-[#c55a45]';
  }
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-8 py-3 text-[15px] min-h-[44px]';
    case 'md':
      return 'px-10 py-4 text-base min-h-[52px]';
    case 'lg':
      return 'px-12 py-5 text-base min-h-[56px]';
    default:
      return 'px-8 py-3 text-[15px] min-h-[44px]';
  }
});

const classes = computed(() => [
  baseClasses,
  variantClasses.value,
  sizeClasses.value,
  props.fullWidth ? 'w-full' : ''
].join(' '));

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event);
  }
};
</script>

<template>
  <a
    v-if="href"
    :href="href"
    :class="classes"
    @click="handleClick"
  >
    <slot />
  </a>
  
  <button
    v-else
    :type="type"
    :class="classes"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
