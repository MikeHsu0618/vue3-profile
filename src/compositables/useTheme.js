import {ref} from "vue";

export function useTheme() {
  const isLight = ref(localStorage.selected_theme === 'light')
  
  const initTheme = () => {
    localStorage.selected_theme = localStorage.selected_theme || 'light'
    document.body.classList[localStorage.selected_theme === 'light' ? 'remove' : 'add']('dark-theme')
  }
  
  const changeTheme = () => {
    document.body.classList[localStorage.selected_theme === 'light' ? 'add' : 'remove']('dark-theme')
    localStorage.selected_theme = localStorage.selected_theme === 'light' ? 'dark' : 'light'
    isLight.value = localStorage.selected_theme === 'light'
  }
  
  return {
    initTheme,
    changeTheme,
    isLight
  }
}