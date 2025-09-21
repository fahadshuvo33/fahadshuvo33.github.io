<!-- components/home/ProjectsModal.vue -->
<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isVisible" class="fixed inset-0 z-50 overflow-y-auto" @click="$emit('close')">
        <!-- Backdrop with click handler - matching theme -->
        <div class="fixed inset-0 bg-slate-950/70 backdrop-blur-md" @click="$emit('close')"></div>

        <!-- Modal Content -->
        <div class="relative min-h-screen flex items-center justify-center" style="padding: 16px">
          <div
            class="relative w-full max-w-4xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 backdrop-blur-xl rounded-2xl shadow-2xl border border-pink-500/10 overflow-hidden"
            @click.stop
          >
            <!-- Theme-matched gradient accent -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-cyan-500/10 pointer-events-none"
            ></div>

            <!-- Header -->
            <div class="relative border-b border-pink-500/10" style="padding: 24px">
              <div class="flex items-center justify-between">
                <div>
                  <h2
                    class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400"
                  >
                    My Projects
                  </h2>
                  <p class="text-gray-400 text-sm" style="margin-top: 4px">
                    Explore my work across different domains
                  </p>
                </div>
                <button
                  @click="$emit('close')"
                  class="rounded-lg hover:bg-pink-500/10 transition-colors group"
                  style="padding: 8px"
                >
                  <svg
                    class="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-colors"
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
            </div>

            <!-- Category Tabs -->
            <div class="border-b border-pink-500/10" style="padding: 12px 24px">
              <div class="flex gap-2 overflow-x-auto scrollbar-hide">
                <!-- All Projects Tab -->
                <button
                  @click="activeCategory = 'all'"
                  :class="[
                    'rounded-lg font-medium text-sm whitespace-nowrap transition-colors',
                    activeCategory === 'all'
                      ? 'bg-gradient-to-r from-pink-500/20 to-cyan-500/20 text-pink-300 border border-pink-500/30'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-white/5',
                  ]"
                  style="padding: 8px 16px"
                >
                  <div class="flex items-center gap-2">
                    <component :is="getIcon('all')" class="w-4 h-4" />
                    <span>All Projects</span>
                    <span class="text-xs opacity-70"> ({{ allProjectsCount }}) </span>
                  </div>
                </button>

                <!-- Dynamic Category Tabs -->
                <button
                  v-for="category in categories"
                  :key="category"
                  @click="activeCategory = category"
                  :class="[
                    'rounded-lg font-medium text-sm whitespace-nowrap transition-colors',
                    activeCategory === category
                      ? 'bg-gradient-to-r from-pink-500/20 to-cyan-500/20 text-pink-300 border border-pink-500/30'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-white/5',
                  ]"
                  style="padding: 8px 16px"
                >
                  <div class="flex items-center gap-2">
                    <component :is="getIcon(category)" class="w-4 h-4" />
                    <span>{{ formatCategoryName(category) }}</span>
                    <span class="text-xs opacity-70">
                      ({{ getProjectsByCategory(category).length }})
                    </span>
                  </div>
                </button>
              </div>
            </div>

            <!-- Projects Content -->
            <div
              class="max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-pink-500/20 scrollbar-track-transparent"
              style="padding: 24px"
            >
              <div class="flex flex-col" style="gap: 16px">
                <div
                  v-for="project in currentProjects"
                  :key="`${project.name}-${activeCategory}`"
                  class="group"
                >
                  <div
                    class="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-xl border border-white/5 hover:border-pink-500/30 transition-all"
                    style="padding: 20px"
                  >
                    <!-- Status Badge -->
                    <div class="flex items-start justify-between" style="margin-bottom: 12px">
                      <div class="flex-1">
                        <h3
                          class="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400 transition-all"
                        >
                          {{ project.name }}
                        </h3>
                      </div>
                      <span
                        :class="['rounded-full text-xs font-medium', statusClasses[project.status]]"
                        style="padding: 4px 10px; margin-left: 12px"
                      >
                        {{ statusLabels[project.status] }}
                      </span>
                    </div>

                    <!-- Full Description - Always visible -->
                    <p class="text-gray-400 text-sm leading-relaxed" style="margin-bottom: 16px">
                      {{ project.description || 'No description available for this project.' }}
                    </p>

                    <!-- Tech Stack -->
                    <div class="flex flex-wrap gap-2" style="margin-bottom: 16px">
                      <span
                        v-for="tech in project.tech"
                        :key="tech"
                        class="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-md text-xs text-cyan-400 border border-cyan-500/20"
                        style="padding: 4px 10px"
                      >
                        {{ tech }}
                      </span>
                    </div>

                    <!-- All Features - Always visible -->
                    <div v-if="project.features?.length" style="margin-bottom: 16px">
                      <h4 class="text-sm font-medium text-gray-300" style="margin-bottom: 8px">
                        Key Features:
                      </h4>
                      <ul class="space-y-1">
                        <li
                          v-for="(feature, index) in project.features"
                          :key="index"
                          class="text-sm text-gray-400 flex items-start gap-2"
                        >
                          <span class="text-pink-400" style="margin-top: 2px">•</span>
                          <span>{{ feature }}</span>
                        </li>
                      </ul>
                    </div>

                    <!-- Additional Details - Always visible -->
                    <div v-if="project.details" style="margin-bottom: 16px">
                      <p class="text-sm text-gray-400">{{ project.details }}</p>
                    </div>

                    <!-- Actions -->
                    <div class="flex items-center gap-3">
                      <a
                        v-if="project.github"
                        :href="`https://${project.github}`"
                        target="_blank"
                        class="flex items-center gap-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-sm text-gray-300 hover:text-white transition-colors group/link"
                        style="padding: 6px 12px"
                      >
                        <svg
                          class="w-4 h-4 group-hover/link:text-pink-400 transition-colors"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                          />
                        </svg>
                        <span>Code</span>
                      </a>

                      <a
                        v-if="project.live"
                        :href="`https://${project.live}`"
                        target="_blank"
                        class="flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 rounded-lg text-sm text-pink-300 hover:text-pink-200 transition-colors"
                        style="padding: 6px 12px"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>

                <!-- Empty State -->
                <div
                  v-if="currentProjects.length === 0"
                  class="text-center"
                  style="padding: 48px 0"
                >
                  <div class="w-20 h-20 mx-auto text-gray-600" style="margin-bottom: 16px">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                  </div>
                  <p class="text-gray-400">No projects in this category yet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, h } from 'vue'
import { projects } from '@/data/projects'
import type { Project } from '@/data/types'

interface Props {
  isVisible: boolean
}

defineProps<Props>()
defineEmits<{
  close: []
}>()

// Default to 'all' category
const activeCategory = ref('all')

// Get all categories dynamically
const categories = computed(() => {
  return Object.keys(projects).filter((key) =>
    Array.isArray(projects[key as keyof typeof projects]),
  )
})

// Icon definitions - expandable for future categories
const iconDefinitions = {
  all: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
  fullStack: 'M10 20l4-16m4 4l4 4-4 4M6 12l-4 4 4 4',
  frontend:
    'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
  bots: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  backend:
    'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
  mobile: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  database:
    'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
  cloud: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
  security:
    'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  ai: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  default: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
}

// Create icon component dynamically
const createIcon = (pathData: string) => {
  return () =>
    h(
      'svg',
      { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: pathData,
      }),
    )
}

// Get icon for category
const getIcon = (category: string) => {
  const pathData =
    iconDefinitions[category as keyof typeof iconDefinitions] || iconDefinitions.default
  return createIcon(pathData)
}

// Format category names
const formatCategoryName = (category: string) => {
  const names: Record<string, string> = {
    fullStack: 'Full Stack',
    frontend: 'Frontend',
    bots: 'Bots',
    backend: 'Backend',
    mobile: 'Mobile Apps',
    database: 'Database',
    cloud: 'Cloud',
    security: 'Security',
    ai: 'AI/ML',
  }
  return (
    names[category] ||
    category
      .split(/(?=[A-Z])/)
      .join(' ')
      .replace(/^\w/, (c) => c.toUpperCase())
  )
}

// Get projects by category
const getProjectsByCategory = (category: string) => {
  return projects[category as keyof typeof projects] || []
}

// Get all projects
const getAllProjects = () => {
  const allProjects: Project[] = []
  categories.value.forEach((category) => {
    const categoryProjects = getProjectsByCategory(category)
    allProjects.push(...categoryProjects)
  })
  return allProjects
}

// Count of all projects
const allProjectsCount = computed(() => getAllProjects().length)

// Current projects based on selected category
const currentProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return getAllProjects()
  }
  return getProjectsByCategory(activeCategory.value)
})

// Status styles matching theme
const statusClasses: Record<string, string> = {
  'in-progress':
    'bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/30',
  completed:
    'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30',
  maintained:
    'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/30',
}

const statusLabels: Record<string, string> = {
  'in-progress': 'In Progress',
  completed: 'Completed',
  maintained: 'Maintained',
}
</script>

<style scoped>
/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .relative > div {
  transition: all 0.3s ease;
}

.modal-enter-from .relative > div {
  transform: scale(0.95);
  opacity: 0;
}

/* Hide scrollbar for category tabs */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Thin scrollbar for content - matching theme */
.scrollbar-thin {
  scrollbar-width: thin;
}

.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, rgba(236, 72, 153, 0.2), rgba(168, 85, 247, 0.2));
  border-radius: 3px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, rgba(236, 72, 153, 0.3), rgba(168, 85, 247, 0.3));
}
</style>
