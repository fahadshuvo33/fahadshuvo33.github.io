<!-- components/home/ExperienceModal.vue -->
<template>
  <Transition name="modal">
    <div v-if="isVisible" class="fixed inset-0 z-50 overflow-y-auto" @click="$emit('close')">
      <!-- Backdrop with reduced opacity -->
      <div
        class="fixed inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/60 to-slate-900/60 backdrop-blur-md"
      ></div>

      <!-- Modal Content -->
      <div class="relative min-h-screen flex items-center justify-center p-4">
        <div
          class="relative w-full max-w-4xl bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.2)] border border-slate-700/30 overflow-hidden"
          @click.stop
        >
          <!-- Decorative gradient orb -->
          <div
            class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          ></div>
          <div
            class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          ></div>

          <!-- Header with glass effect -->
          <div
            class="relative flex items-center justify-between border-b border-slate-700/30 bg-slate-900/20 backdrop-blur-md"
            :style="{ padding: '24px 32px' }"
          >
            <div>
              <h2 class="text-3xl font-bold text-white mb-2">
                <span
                  class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                >
                  My Experience
                </span>
              </h2>
              <div class="flex items-center gap-3 text-sm">
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span class="text-gray-200 font-medium">{{ experience.latestRole }}</span>
                </div>
                <span class="text-gray-500">•</span>
                <span class="text-cyan-400 font-medium">{{ experience.presentEmployer }}</span>
                <span
                  class="px-3 py-1 text-xs bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-full border border-cyan-500/30"
                >
                  {{ experience.availability }}
                </span>
              </div>
            </div>
            <button
              @click="$emit('close')"
              class="p-2 hover:bg-white/10 rounded-xl transition-all duration-200 group"
            >
              <svg
                class="w-6 h-6 text-gray-400 group-hover:text-white group-hover:rotate-90 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <!-- Experience Timeline -->
          <div
            class="relative max-h-[70vh] overflow-y-auto custom-scrollbar"
            :style="{ padding: '24px 32px' }"
          >
            <!-- Timeline line -->
            <div
              class="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent"
              :style="{ left: '48px' }"
            ></div>

            <!-- Experience Items -->
            <div class="flex flex-col gap-8">
              <!-- Recent Jobs -->
              <div
                v-for="(job, index) in experience.recentCareer"
                :key="`recent-${index}`"
                class="relative group"
                :style="{ paddingLeft: '48px' }"
              >
                <!-- Timeline dot -->
                <div
                  class="absolute left-0 top-2 w-6 h-6 bg-slate-800 border-2 border-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                >
                  <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                </div>

                <!-- Content card -->
                <div
                  class="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-xl border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                  :style="{ padding: '24px' }"
                >
                  <div class="flex items-start justify-between" :style="{ marginBottom: '16px' }">
                    <div>
                      <h3 class="text-xl font-semibold text-white mb-1">{{ job.position }}</h3>
                      <div class="flex items-center gap-3 text-sm">
                        <a
                          href="#"
                          class="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                        >
                          {{ job.employer }}
                        </a>
                        <span class="text-gray-600">•</span>
                        <span class="text-gray-400">{{ job.location }}</span>
                      </div>
                    </div>
                    <div class="text-right">
                      <div class="text-sm text-gray-400 font-medium mb-2">{{ job.duration }}</div>
                      <div class="flex gap-2">
                        <span
                          v-if="job.type"
                          class="px-3 py-1 text-xs bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-full border border-blue-500/30"
                        >
                          {{ job.type }}
                        </span>
                        <span
                          v-if="job.workplace"
                          class="px-3 py-1 text-xs bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 rounded-full border border-green-500/30"
                        >
                          {{ job.workplace }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p class="text-gray-200 leading-loose" :style="{ marginBottom: '16px' }">
                    {{ job.description }}
                  </p>

                  <!-- Key Points with icons -->
                  <ul v-if="job.highlights" class="space-y-2" :style="{ marginBottom: '16px' }">
                    <li
                      v-for="(highlight, hIdx) in job.highlights"
                      :key="hIdx"
                      class="text-sm text-gray-200 flex items-start group/item"
                    >
                      <svg
                        class="w-4 h-4 text-cyan-500 mr-2 mt-0.5 group-hover/item:text-cyan-400 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{{ highlight }}</span>
                    </li>
                  </ul>

                  <!-- Tech Stack with better styling -->
                  <div v-if="job.technologies" class="flex flex-wrap" style="gap: 16px">
                    <span
                      v-for="tech in job.technologies"
                      :key="tech"
                      class="px-3 py-1.5 text-xs bg-gradient-to-r from-slate-700/50 to-slate-800/50 text-gray-200 rounded-lg border border-slate-600/50 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-200"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Previous Jobs -->
              <div
                v-for="(job, index) in experience.entireCareer"
                :key="`prev-${index}`"
                class="relative group"
                :style="{ paddingLeft: '48px' }"
              >
                <!-- Timeline dot -->
                <div
                  class="absolute left-0 top-2 w-6 h-6 bg-slate-800 border-2 border-slate-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                >
                  <div class="w-2 h-2 bg-slate-500 rounded-full"></div>
                </div>

                <!-- Content card -->
                <div
                  class="bg-slate-800/20 rounded-xl border border-slate-700/20 hover:border-slate-600/30 transition-all duration-300"
                  :style="{ padding: '20px' }"
                >
                  <div class="flex items-start justify-between" :style="{ marginBottom: '12px' }">
                    <div>
                      <h3 class="text-lg font-medium text-gray-200 mb-1">{{ job.position }}</h3>
                      <div class="flex items-center text-sm" style="gap: 16px">
                        <a href="#" class="text-cyan-400/80 hover:text-cyan-300 transition-colors">
                          {{ job.employer }}
                        </a>
                        <span class="text-gray-600">•</span>
                        <span class="text-gray-400">{{ job.location }}</span>
                      </div>
                    </div>
                    <div class="text-sm text-gray-400 font-medium">{{ job.duration }}</div>
                  </div>

                  <p class="text-sm text-gray-300 leading-loose" :style="{ marginBottom: '12px' }">
                    {{ job.description }}
                  </p>

                  <!-- Achievements with star icons -->
                  <ul
                    v-if="job.achievements && job.achievements.length > 0"
                    class="space-y-1.5"
                    :style="{ marginBottom: '12px' }"
                  >
                    <li
                      v-for="(achievement, aIdx) in job.achievements"
                      :key="aIdx"
                      class="text-sm text-gray-300 flex items-start"
                    >
                      <svg
                        class="w-4 h-4 text-amber-400 mr-2 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      <span>{{ achievement }}</span>
                    </li>
                  </ul>

                  <!-- Tech Stack -->
                  <div v-if="job.technologies" class="flex flex-wrap" style="gap: 16px">
                    <span
                      v-for="tech in job.technologies"
                      :key="tech"
                      class="px-2.5 py-1 text-xs bg-slate-700/30 text-gray-300 rounded border border-slate-700/30 hover:border-slate-600/50 transition-colors"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { experience } from '@/data/experience'

interface Props {
  isVisible: boolean
}

defineProps<Props>()
defineEmits<{
  close: []
}>()
</script>

<style scoped>
/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .relative > div {
  transition: all 0.3s ease;
}

.modal-enter-from .relative > div {
  transform: translateY(20px) scale(0.95);
  opacity: 0;
}

/* Custom scrollbar with gradient */
.custom-scrollbar::-webkit-scrollbar {
  width: 10px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(30, 41, 59, 0.3);
  border-radius: 5px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, rgba(6, 182, 212, 0.5), rgba(59, 130, 246, 0.5));
  border-radius: 5px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, rgba(6, 182, 212, 0.7), rgba(59, 130, 246, 0.7));
}

/* Firefox scrollbar */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(6, 182, 212, 0.5) rgba(30, 41, 59, 0.3);
}

/* Smooth hover effects */
@media (hover: hover) {
  .group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
  }
}
</style>
