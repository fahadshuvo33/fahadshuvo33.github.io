// src/composables/useTheme.ts
import { ref, computed } from 'vue'

export type ThemeName = 'dark' | 'midnight' | 'ocean' | 'forest' | 'purple' | 'amoled'

export interface Theme {
  name: ThemeName
  bg: {
    primary: string
    secondary: string
    tertiary: string
  }
  text: {
    primary: string
    secondary: string
    muted: string
    accent: string
  }
  border: string
  accent: string
  icon: string
  animation: {
    orb1: string
    orb2: string
    orb3: string
    gradient: string
  }
}

const themes: Record<ThemeName, Theme> = {
  dark: {
    name: 'dark',
    bg: {
      primary: 'bg-gray-900',
      secondary: 'bg-gray-800',
      tertiary: 'bg-gray-700',
    },
    text: {
      primary: 'text-gray-100',
      secondary: 'text-gray-300',
      muted: 'text-gray-500',
      accent: 'text-green-400',
    },
    border: 'border-gray-700',
    accent: 'bg-green-600',
    icon: 'moon',
    animation: {
      orb1: 'bg-green-500/30',
      orb2: 'bg-emerald-500/20',
      orb3: 'bg-teal-500/20',
      gradient: 'from-gray-900 via-green-900/20 to-gray-900',
    },
  },
  midnight: {
    name: 'midnight',
    bg: {
      primary: 'bg-slate-950',
      secondary: 'bg-slate-900',
      tertiary: 'bg-slate-800',
    },
    text: {
      primary: 'text-slate-100',
      secondary: 'text-slate-300',
      muted: 'text-slate-500',
      accent: 'text-purple-400',
    },
    border: 'border-slate-700',
    accent: 'bg-purple-600',
    icon: 'stars',
    animation: {
      orb1: 'bg-purple-500/30',
      orb2: 'bg-indigo-500/20',
      orb3: 'bg-violet-500/20',
      gradient: 'from-slate-950 via-purple-900/20 to-slate-950',
    },
  },
  ocean: {
    name: 'ocean',
    bg: {
      primary: 'bg-blue-950',
      secondary: 'bg-blue-900',
      tertiary: 'bg-blue-800',
    },
    text: {
      primary: 'text-blue-100',
      secondary: 'text-blue-200',
      muted: 'text-blue-400',
      accent: 'text-cyan-400',
    },
    border: 'border-blue-700',
    accent: 'bg-cyan-600',
    icon: 'waves',
    animation: {
      orb1: 'bg-cyan-500/30',
      orb2: 'bg-blue-500/20',
      orb3: 'bg-teal-500/20',
      gradient: 'from-blue-950 via-cyan-900/20 to-blue-950',
    },
  },
  forest: {
    name: 'forest',
    bg: {
      primary: 'bg-emerald-950',
      secondary: 'bg-emerald-900',
      tertiary: 'bg-emerald-800',
    },
    text: {
      primary: 'text-emerald-100',
      secondary: 'text-emerald-200',
      muted: 'text-emerald-400',
      accent: 'text-green-400',
    },
    border: 'border-emerald-700',
    accent: 'bg-green-600',
    icon: 'tree',
    animation: {
      orb1: 'bg-green-500/30',
      orb2: 'bg-emerald-500/20',
      orb3: 'bg-lime-500/20',
      gradient: 'from-emerald-950 via-green-900/20 to-emerald-950',
    },
  },
  purple: {
    name: 'purple',
    bg: {
      primary: 'bg-rose-950',
      secondary: 'bg-rose-900',
      tertiary: 'bg-rose-800',
    },
    text: {
      primary: 'text-rose-100',
      secondary: 'text-rose-200',
      muted: 'text-rose-400',
      accent: 'text-orange-400',
    },
    border: 'border-rose-700',
    accent: 'bg-orange-600',
    icon: 'sparkles',
    animation: {
      orb1: 'bg-orange-500/30',
      orb2: 'bg-red-500/20',
      orb3: 'bg-amber-500/20',
      gradient: 'from-rose-950 via-orange-900/20 to-rose-950',
    },
  },
  amoled: {
    name: 'amoled',
    bg: {
      primary: 'bg-black',
      secondary: 'bg-gray-950',
      tertiary: 'bg-gray-900',
    },
    text: {
      primary: 'text-white',
      secondary: 'text-gray-200',
      muted: 'text-gray-500',
      accent: 'text-white',
    },
    border: 'border-gray-800',
    accent: 'bg-white',
    icon: 'void',
    animation: {
      orb1: 'bg-white/10',
      orb2: 'bg-gray-500/5',
      orb3: 'bg-white/5',
      gradient: 'from-black via-gray-950/30 to-black',
    },
  },
}

// Global theme state
const currentTheme = ref<ThemeName>('dark')

export function useTheme() {
  // Computed theme object
  const theme = computed(() => themes[currentTheme.value])

  // Set specific theme
  const setTheme = (name: ThemeName) => {
    // Update state
    currentTheme.value = name

    // Save to localStorage
    localStorage.setItem('portfolio-theme', name)

    // Remove old theme classes
    document.documentElement.classList.remove(
      'theme-dark',
      'theme-midnight',
      'theme-ocean',
      'theme-forest',
      'theme-purple',
      'theme-amoled',
    )

    // Add new theme class
    document.documentElement.classList.add(`theme-${name}`)

    // Update CSS variables for the theme
    const root = document.documentElement
    const selectedTheme = themes[name]
    
    // Set CSS custom properties for dynamic theming
    root.style.setProperty('--bg-primary', getColorValue(selectedTheme.bg.primary))
    root.style.setProperty('--bg-secondary', getColorValue(selectedTheme.bg.secondary))
    root.style.setProperty('--text-primary', getColorValue(selectedTheme.text.primary))
    root.style.setProperty('--text-secondary', getColorValue(selectedTheme.text.secondary))
    root.style.setProperty('--accent', getColorValue(selectedTheme.accent))
  }

  // Helper to extract color values from Tailwind classes
  const getColorValue = (className: string): string => {
    const colorMap: Record<string, string> = {
      'bg-gray-900': '#111827',
      'bg-gray-800': '#1f2937',
      'bg-slate-950': '#020617',
      'bg-slate-900': '#0f172a',
      'bg-blue-950': '#172554',
      'bg-blue-900': '#1e3a8a',
      'bg-emerald-950': '#022c22',
      'bg-emerald-900': '#064e3b',
      'bg-violet-950': '#2e1065',
      'bg-violet-900': '#4c1d95',
      'text-gray-100': '#f3f4f6',
      'text-slate-100': '#f1f5f9',
      'text-blue-100': '#dbeafe',
      'text-emerald-100': '#d1fae5',
      'text-violet-100': '#ede9fe',
    }
    return colorMap[className] || '#111827'
  }

  // Toggle through themes
  const toggleTheme = () => {
    const themeOrder: ThemeName[] = ['dark', 'midnight', 'ocean', 'forest', 'purple', 'amoled']
    const currentIndex = themeOrder.indexOf(currentTheme.value)
    const nextIndex = (currentIndex + 1) % themeOrder.length
    setTheme(themeOrder[nextIndex])
  }

  // Initialize theme from localStorage
  const initTheme = () => {
    const savedTheme = localStorage.getItem('portfolio-theme') as ThemeName
    const initialTheme = savedTheme && themes[savedTheme] ? savedTheme : 'dark'
    setTheme(initialTheme)
  }

  // Call init on composable creation
  initTheme()

  return {
    theme,
    currentTheme,
    themes,
    setTheme,
    toggleTheme,
  }
}
