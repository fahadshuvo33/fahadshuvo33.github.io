<template>
  <section class="relative mx-auto flex items-center justify-center overflow-hidden mb-0 pb-0">
    <!-- Main Content -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:pt-8 lg:pt-10">
      <div class="flex flex-col items-center justify-center gap-y-3">
        <!-- ASCII Name -->
        <div class="w-full flex justify-center overflow-hidden">
          <div class="transform scale-75 sm:scale-85 md:scale-95 lg:scale-100 origin-center">
            <DynamicAsciiName
              start-animation="dissolve"
              :start-speed="150"
              outline-color="#0F0F0F"
            />
          </div>
        </div>

        <!-- Role Title -->
        <div class="text-center w-full">
          <div class="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 flex items-center justify-center">
            <transition name="fade" mode="out-in">
              <h1
                :key="'role-' + currentRoleIndex"
                class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black leading-tight"
              >
                <span
                  class="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent min-w-0 inline-block"
                >
                  {{ roles[currentRoleIndex] }}
                </span>
              </h1>
            </transition>
          </div>
        </div>

        <!-- Status Row -->
        <div
          class="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 w-full"
        >
          <div class="group relative">
            <div
              class="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"
            ></div>
            <div
              class="relative flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-900/80 rounded-full border border-green-500/30"
            >
              <div class="relative">
                <div
                  class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"
                ></div>
                <div
                  class="absolute inset-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-ping"
                ></div>
              </div>
              <span class="text-green-300 font-medium text-xs">Available for hire</span>
            </div>
          </div>

          <div
            class="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-900/40 backdrop-blur-sm rounded-full border border-white/10"
          >
            <div class="w-3 h-3 text-purple-400">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                />
              </svg>
            </div>
            <span class="text-gray-300 font-medium text-xs">Dhaka, Bangladesh</span>
          </div>
        </div>

        <!-- Bio -->
        <div
          class="w-full flex justify-center text-center"
          style="margin-bottom: 1.5rem; margin-top: 1.5rem"
        >
          <p
            class="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed font-light text-center"
          >
            {{ bioText }}
          </p>
        </div>

        <!-- Stats -->
        <div class="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            <div class="text-center group cursor-pointer">
              <div class="relative">
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl opacity-0 group-hover:opacity-30 transition duration-300"
                ></div>
                <div
                  class="relative bg-slate-900/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-6 border border-white/5 group-hover:border-green-400/30 transition-all duration-300"
                >
                  <div
                    class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300"
                  >
                    3+
                  </div>
                  <div class="text-gray-400 font-medium text-xs sm:text-sm">Years Experience</div>
                </div>
              </div>
            </div>

            <div class="text-center group cursor-pointer">
              <div class="relative">
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-30 transition duration-300"
                ></div>
                <div
                  class="relative bg-slate-900/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-6 border border-white/5 group-hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div
                    class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300"
                  >
                    30+
                  </div>
                  <div class="text-gray-400 font-medium text-xs sm:text-sm">Projects Completed</div>
                </div>
              </div>
            </div>

            <div class="text-center group cursor-pointer sm:col-span-2 lg:col-span-1">
              <div class="relative">
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl opacity-0 group-hover:opacity-30 transition duration-300"
                ></div>
                <div
                  class="relative bg-slate-900/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-6 border border-white/5 group-hover:border-amber-400/30 transition-all duration-300"
                >
                  <div
                    class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center gap-2"
                  >
                    <span>∞</span>
                    <span class="text-base sm:text-lg md:text-xl lg:text-2xl">☕</span>
                  </div>
                  <div class="text-gray-400 font-medium text-xs sm:text-sm">Coffee Consumed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Primary Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 w-full max-w-2xl mx-auto">
          <!-- View Experience Button -->
          <button
            @click="showExperienceModal = true"
            class="group relative overflow-hidden rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex-1"
          >
            <div
              class="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div class="relative flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5">
              <div class="w-6 h-6 sm:w-7 sm:h-7 text-white">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 16H5V5h14v14z"
                  />
                  <path d="M11 11H9V9h2v2zm4 0h-2V9h2v2zm-4 4H9v-2h2v2zm4 0h-2v-2h2v2z" />
                </svg>
              </div>
              <span class="text-white font-bold text-lg sm:text-xl">My Experience</span>
            </div>
            <div
              class="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"
            ></div>
          </button>

          <!-- View Projects Button -->
          <button
            @click="showProjectsModal = true"
            class="group relative overflow-hidden rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 flex-1"
          >
            <div
              class="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div class="relative flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5">
              <div class="w-6 h-6 sm:w-7 sm:h-7 text-white">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
                  />
                </svg>
              </div>
              <span class="text-white font-bold text-lg sm:text-xl">My Projects</span>
            </div>
            <div
              class="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"
            ></div>
          </button>
        </div>

        <!-- Contact & Social Icons -->
        <div class="flex justify-center gap-4">
          <!-- CV/Resume -->
          <a
            @click="downloadCV"
            @mouseenter="hoveredIcon = 'cv'"
            @mouseleave="hoveredIcon = null"
            href="#"
            :class="['icon-button', hoveredIcon === 'cv' ? 'expanded' : '', 'animation-delay-0']"
            class="group relative bg-slate-900/60 backdrop-blur-sm border border-green-500/30 rounded-full transition-all duration-500 overflow-hidden"
          >
            <div class="icon-wrapper">
              <div class="w-5 h-5 text-green-400">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 9.414V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <span class="icon-text text-green-400 font-semibold text-sm whitespace-nowrap"
                >Download CV</span
              >
            </div>
          </a>

          <!-- GitHub -->
          <a
            href="https://github.com/fahadshuvo33"
            target="_blank"
            @mouseenter="hoveredIcon = 'github'"
            @mouseleave="hoveredIcon = null"
            :class="[
              'icon-button',
              hoveredIcon === 'github' ? 'expanded' : '',
              'animation-delay-1',
            ]"
            class="group relative bg-slate-900/60 backdrop-blur-sm border border-white/10 rounded-full transition-all duration-500 overflow-hidden"
          >
            <div class="icon-wrapper">
              <div
                class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300"
              >
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </div>
              <span
                class="icon-text text-gray-400 group-hover:text-white font-semibold text-sm whitespace-nowrap"
                >GitHub</span
              >
            </div>
          </a>

          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/fahad-hossain-8b162b182/"
            target="_blank"
            @mouseenter="hoveredIcon = 'linkedin'"
            @mouseleave="hoveredIcon = null"
            :class="[
              'icon-button',
              hoveredIcon === 'linkedin' ? 'expanded' : '',
              'animation-delay-2',
            ]"
            class="group relative bg-slate-900/60 backdrop-blur-sm border border-blue-500/30 rounded-full transition-all duration-500 overflow-hidden"
          >
            <div class="icon-wrapper">
              <div class="w-5 h-5 text-blue-400">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </div>
              <span class="icon-text text-blue-400 font-semibold text-sm whitespace-nowrap"
                >LinkedIn</span
              >
            </div>
          </a>

          <!-- Email -->
          <a
            href="mailto:fahadshuvo33@gmail.com"
            @mouseenter="hoveredIcon = 'email'"
            @mouseleave="hoveredIcon = null"
            :class="['icon-button', hoveredIcon === 'email' ? 'expanded' : '', 'animation-delay-3']"
            class="group relative bg-slate-900/60 backdrop-blur-sm border border-cyan-500/30 rounded-full transition-all duration-500 overflow-hidden"
          >
            <div class="icon-wrapper">
              <div class="w-5 h-5 text-cyan-400">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span class="icon-text text-cyan-400 font-semibold text-sm whitespace-nowrap"
                >Email Me</span
              >
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  <ExperienceModal :isVisible="showExperienceModal" @close="showExperienceModal = false" />
  <ProjectsModal :isVisible="showProjectsModal" @close="showProjectsModal = false" />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import DynamicAsciiName from '@/components/AsciiName.vue'
import ExperienceModal from '@/components/home/ExperienceModal.vue'
import ProjectsModal from '@/components/home/ProjectsModal.vue'
const hoveredIcon = ref<string | null>(null)

const roles = ['Python Developer', 'Django Developer', 'API Developer']
const currentRoleIndex = ref(0)

let intervalId: number | undefined = undefined

onMounted(() => {
  // Change role every 3 seconds with smooth fade transition
  intervalId = window.setInterval(() => {
    currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.length
  }, 3000)
})

onBeforeUnmount(() => {
  if (intervalId !== undefined) {
    clearInterval(intervalId)
  }
})

const bioText = ref(
  'I enjoy building digital solutions that are practical and useful. I take ideas and turn them into scalable, easy-to-use applications with modern web tools. With experience in Python, Django, and API development, I focus on creating solid backend systems that support great user experiences.',
)

const showExperienceModal = ref(false)
const showProjectsModal = ref(false)

const downloadCV = (event: Event) => {
  event.preventDefault()
  const link = document.createElement('a')
  link.href = '/fahad.pdf'
  link.download = 'Fahad_Hossain_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<style scoped>
/* Fade transition for role text */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

/* Existing animations */
.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

@keyframes gradient-fast {
  0%,
  100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

.animate-gradient-fast {
  animation: gradient-fast 4s ease infinite;
}

/* Icon button animations */
.icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
}

.icon-button.expanded {
  width: auto;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  gap: 0;
  padding: 0.75rem;
}

.icon-button .icon-text {
  max-width: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.5s ease;
  margin-left: 0;
}

.icon-button.expanded .icon-text {
  max-width: 150px;
  opacity: 1;
  margin-left: 0.5rem;
}

/* Wave animation when not hovered */
@keyframes icon-pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}

.icon-button:not(.expanded) {
  animation: icon-pulse 2s ease-in-out infinite;
}

.icon-button:hover {
  animation: none;
}

/* Stagger the animation delays */
.animation-delay-0:not(.expanded) {
  animation-delay: 0s;
}

.animation-delay-1:not(.expanded) {
  animation-delay: 0.5s;
}

.animation-delay-2:not(.expanded) {
  animation-delay: 1s;
}

.animation-delay-3:not(.expanded) {
  animation-delay: 1.5s;
}
</style>
