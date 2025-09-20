<template>
  <div
    :class="[
      'fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out',
      isVisible ? 'translate-y-4' : '-translate-y-20',
    ]"
  >
    <nav class="relative">
      <!-- Outer glow -->
      <div
        class="absolute -inset-1 rounded-full blur-xl opacity-30 transition-all duration-500"
        :class="getOuterGlow()"
      ></div>

      <!-- Main background -->
      <div
        class="relative backdrop-blur-2xl rounded-full shadow-2xl border transition-all duration-300"
        :class="getBackgroundClasses()"
      >
        <div class="flex items-center gap-1 px-3 py-1.5">
          <!-- Home -->
          <router-link
            to="/"
            class="relative group"
            :class="getNavItemClasses('/')"
          >
            <!-- Active indicator -->
            <div
              v-if="route.path === '/'"
              class="absolute inset-0 rounded-full transition-all duration-300"
              :class="getActiveBackground()"
            ></div>

            <div class="relative flex items-center gap-2 px-3 py-1.5">
              <svg
                class="w-4 h-4 transition-colors duration-200"
                :class="getIconClasses('/', 'emerald')"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span class="text-sm font-medium hidden sm:block" :class="getTextClasses('/')">
                Home
              </span>
            </div>
          </router-link>

          <!-- Divider -->
          <div class="w-px h-5 bg-white/10"></div>

          <!-- API -->
          <router-link
            to="/api"
            class="relative group"
            :class="getNavItemClasses('/api')"
          >
            <div
              v-if="route.path === '/api'"
              class="absolute inset-0 rounded-full transition-all duration-300"
              :class="getActiveBackground()"
            ></div>

            <div class="relative flex items-center gap-2 px-3 py-1.5">
              <svg
                class="w-4 h-4 transition-colors duration-200"
                :class="getIconClasses('/api', 'cyan')"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span class="text-sm font-medium hidden sm:block" :class="getTextClasses('/api')">
                API
              </span>
            </div>
          </router-link>

          <!-- Divider -->
          <div class="w-px h-5 bg-white/10"></div>

          <!-- Terminal -->
          <router-link
            to="/terminal"
            class="relative group"
            :class="getNavItemClasses('/terminal')"
          >
            <div
              v-if="route.path === '/terminal'"
              class="absolute inset-0 rounded-full transition-all duration-300"
              :class="getActiveBackground()"
            ></div>

            <div class="relative flex items-center gap-2 px-3 py-1.5">
              <svg
                class="w-4 h-4 transition-colors duration-200"
                :class="getIconClasses('/terminal', 'violet')"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span class="text-sm font-medium hidden sm:block" :class="getTextClasses('/terminal')">
                Terminal
              </span>
            </div>
          </router-link>

          <!-- Enhanced Divider for Theme Separation -->
          <div class="flex items-center mx-1">
            <div class="w-px h-5 bg-white/15"></div>
            <div class="w-0.5 h-0.5 rounded-full bg-white/30 mx-1.5"></div>
            <div class="w-px h-5 bg-white/15"></div>
          </div>

          <!-- Theme Toggle - Slightly Different Style -->
          <button
            @click="toggleTheme"
            class="relative group flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-white/8 transition-all duration-200 border border-white/5 hover:border-white/10"
            :title="`Switch theme (${currentTheme})`"
          >
            <div class="relative">
              <!-- Theme Icons -->
              <svg
                v-if="currentTheme === 'dark'"
                class="w-4 h-4 text-slate-400 group-hover:text-slate-300 transition-colors"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>

              <svg
                v-else-if="currentTheme === 'midnight'"
                class="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>

              <svg
                v-else-if="currentTheme === 'ocean'"
                class="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>

              <svg
                v-else-if="currentTheme === 'forest'"
                class="w-4 h-4 text-green-400 group-hover:text-green-300 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>

              <svg
                v-else-if="currentTheme === 'purple'"
                class="w-4 h-4 text-pink-400 group-hover:text-pink-300 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>

              <svg
                v-else-if="currentTheme === 'amoled'"
                class="w-4 h-4 text-white group-hover:text-gray-300 transition-colors"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <circle cx="10" cy="10" r="8"/>
              </svg>
            </div>

            <span class="text-xs font-medium text-slate-300 group-hover:text-white hidden sm:block transition-colors capitalize">
              {{ currentTheme }}
            </span>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from '@/composables/useTheme'

const route = useRoute()
const { currentTheme, toggleTheme } = useTheme()

// Theme configurations
const themeConfig = {
  dark: {
    background: 'bg-gray-900/60 border-gray-700/50',
    outerGlow: 'bg-gray-400/20',
    activeGlow: 'bg-gradient-to-r from-blue-500/25 to-cyan-500/25',
    activeText: 'text-blue-200',
    activeIcon: 'text-blue-300'
  },
  midnight: {
    background: 'bg-slate-900/70 border-purple-500/30',
    outerGlow: 'bg-purple-500/25',
    activeGlow: 'bg-gradient-to-r from-purple-500/30 to-indigo-500/30',
    activeText: 'text-purple-200',
    activeIcon: 'text-purple-300'
  },
  ocean: {
    background: 'bg-slate-800/70 border-cyan-400/30',
    outerGlow: 'bg-cyan-500/25',
    activeGlow: 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30',
    activeText: 'text-cyan-200',
    activeIcon: 'text-cyan-300'
  },
  forest: {
    background: 'bg-slate-800/70 border-emerald-400/30',
    outerGlow: 'bg-emerald-500/25',
    activeGlow: 'bg-gradient-to-r from-emerald-500/30 to-green-500/30',
    activeText: 'text-emerald-200',
    activeIcon: 'text-emerald-300'
  },
  purple: {
    background: 'bg-slate-800/70 border-pink-400/30',
    outerGlow: 'bg-pink-500/25',
    activeGlow: 'bg-gradient-to-r from-pink-500/30 to-purple-500/30',
    activeText: 'text-pink-200',
    activeIcon: 'text-pink-300'
  },
  amoled: {
    background: 'bg-black/80 border-white/20',
    outerGlow: 'bg-white/15',
    activeGlow: 'bg-gradient-to-r from-white/25 to-gray-300/25',
    activeText: 'text-white',
    activeIcon: 'text-white'
  }
}

const getCurrentThemeConfig = () => themeConfig[currentTheme.value] || themeConfig.dark

const getOuterGlow = () => getCurrentThemeConfig().outerGlow
const getBackgroundClasses = () => getCurrentThemeConfig().background
const getActiveBackground = () => getCurrentThemeConfig().activeGlow

const getNavItemClasses = (path: string) => {
  return route.path === path
    ? 'rounded-full transition-all duration-300'
    : 'rounded-full hover:bg-white/5 transition-all duration-200'
}

const getIconClasses = (path: string, defaultColor: string) => {
  if (route.path === path) {
    return getCurrentThemeConfig().activeIcon
  }

  const colorMap = {
    emerald: 'text-emerald-500 group-hover:text-emerald-400',
    cyan: 'text-cyan-500 group-hover:text-cyan-400',
    violet: 'text-violet-500 group-hover:text-violet-400'
  }

  return colorMap[defaultColor] || 'text-gray-500 group-hover:text-gray-400'
}

const getTextClasses = (path: string) => {
  if (route.path === path) {
    return getCurrentThemeConfig().activeText
  }
  return 'text-slate-300 group-hover:text-white'
}

// Auto-hide functionality
const isVisible = ref(true)
const lastScrollY = ref(0)

const handleScroll = () => {
  const currentScrollY = window.scrollY

  if (currentScrollY <= 10) {
    isVisible.value = true
  } else if (currentScrollY > lastScrollY.value && currentScrollY > 60) {
    isVisible.value = false
  } else if (currentScrollY < lastScrollY.value) {
    isVisible.value = true
  }

  lastScrollY.value = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
