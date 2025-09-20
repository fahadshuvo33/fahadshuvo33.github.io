<template>
  <div class="fixed inset-0 -z-10 overflow-hidden">
    <!-- Gradient Mesh -->
    <div 
      class="absolute inset-0 transition-all duration-1000"
      :style="gradientStyle"
    ></div>

    <!-- Animated Orbs -->
    <div
      class="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl animate-float-slow opacity-80"
      :style="orb1Style"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl animate-float-reverse opacity-60"
      :style="orb2Style"
    ></div>
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse-slow opacity-40"
      :style="orb3Style"
    ></div>

    <!-- Moving Particles -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        v-for="i in 12"
        :key="i"
        class="absolute w-2 h-2 rounded-full animate-float-particle opacity-30"
        :style="{
          backgroundColor: particleColor,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${15 + Math.random() * 10}s`,
        }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { theme } = useTheme()

const orb1Style = computed(() => {
  const colors = {
    dark: 'background: radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(34, 197, 94, 0.1) 70%, transparent 100%)',
    midnight: 'background: radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0.1) 70%, transparent 100%)',
    ocean: 'background: radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(6, 182, 212, 0.1) 70%, transparent 100%)',
    forest: 'background: radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(16, 185, 129, 0.1) 70%, transparent 100%)',
    purple: 'background: radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, rgba(249, 115, 22, 0.1) 70%, transparent 100%)',
    amoled: 'background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 70%, transparent 100%)'
  }
  return colors[theme.value.name] || colors.dark
})

const orb2Style = computed(() => {
  const colors = {
    dark: 'background: radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, rgba(16, 185, 129, 0.08) 70%, transparent 100%)',
    midnight: 'background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(99, 102, 241, 0.08) 70%, transparent 100%)',
    ocean: 'background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.08) 70%, transparent 100%)',
    forest: 'background: radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, rgba(34, 197, 94, 0.08) 70%, transparent 100%)',
    purple: 'background: radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, rgba(239, 68, 68, 0.08) 70%, transparent 100%)',
    amoled: 'background: radial-gradient(circle, rgba(156, 163, 175, 0.1) 0%, rgba(156, 163, 175, 0.03) 70%, transparent 100%)'
  }
  return colors[theme.value.name] || colors.dark
})

const orb3Style = computed(() => {
  const colors = {
    dark: 'background: radial-gradient(circle, rgba(20, 184, 166, 0.25) 0%, rgba(20, 184, 166, 0.06) 70%, transparent 100%)',
    midnight: 'background: radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, rgba(139, 92, 246, 0.06) 70%, transparent 100%)',
    ocean: 'background: radial-gradient(circle, rgba(20, 184, 166, 0.25) 0%, rgba(20, 184, 166, 0.06) 70%, transparent 100%)',
    forest: 'background: radial-gradient(circle, rgba(132, 204, 22, 0.25) 0%, rgba(132, 204, 22, 0.06) 70%, transparent 100%)',
    purple: 'background: radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, rgba(245, 158, 11, 0.06) 70%, transparent 100%)',
    amoled: 'background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 70%, transparent 100%)'
  }
  return colors[theme.value.name] || colors.dark
})

const gradientStyle = computed(() => {
  const gradients = {
    dark: 'background: linear-gradient(135deg, #111827 0%, rgba(20, 83, 45, 0.2) 50%, #111827 100%)',
    midnight: 'background: linear-gradient(135deg, #020617 0%, rgba(88, 28, 135, 0.2) 50%, #020617 100%)',
    ocean: 'background: linear-gradient(135deg, #172554 0%, rgba(22, 78, 99, 0.2) 50%, #172554 100%)',
    forest: 'background: linear-gradient(135deg, #022c22 0%, rgba(20, 83, 45, 0.2) 50%, #022c22 100%)',
    purple: 'background: linear-gradient(135deg, #4c0519 0%, rgba(154, 52, 18, 0.2) 50%, #4c0519 100%)',
    amoled: 'background: linear-gradient(135deg, #000000 0%, rgba(55, 65, 81, 0.1) 50%, #000000 100%)'
  }
  return gradients[theme.value.name] || gradients.dark
})

const particleColor = computed(() => {
  const colors = {
    dark: 'rgba(34, 197, 94, 0.6)',
    midnight: 'rgba(168, 85, 247, 0.6)',
    ocean: 'rgba(6, 182, 212, 0.6)',
    forest: 'rgba(16, 185, 129, 0.6)',
    purple: 'rgba(249, 115, 22, 0.6)',
    amoled: 'rgba(255, 255, 255, 0.4)'
  }
  return colors[theme.value.name] || colors.dark
})
</script>

<style>
@keyframes float-slow {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(30px, -30px) scale(1.05);
  }
  50% {
    transform: translate(-20px, 40px) scale(0.95);
  }
  75% {
    transform: translate(40px, 20px) scale(1.02);
  }
}

@keyframes float-reverse {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(-40px, 30px) scale(0.95);
  }
  50% {
    transform: translate(20px, -40px) scale(1.05);
  }
  75% {
    transform: translate(-30px, -20px) scale(0.98);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.4;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.7;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

@keyframes float-particle {
  0% {
    transform: translateY(100vh) translateX(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) translateX(100px) rotate(360deg);
    opacity: 0;
  }
}

.animate-float-slow {
  animation: float-slow 25s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse 30s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 12s ease-in-out infinite;
}

.animate-float-particle {
  animation: float-particle 20s linear infinite;
}
</style>
