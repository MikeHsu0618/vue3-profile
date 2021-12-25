<template>
  <header class="l-header" id="header">
    <nav class="nav bd-container">
      <a href="#" class="nav__logo">Smith</a>
      <div :class="['nav__menu' , {'show-menu': showMenu}]" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item"  v-for="nav in nav_list">
            <a :href="nav.id" :class="['nav__link', {'active-link':nav.active}]">
              <i :class="['bx', nav.icon, 'nav__icon']"></i>
              {{ nav.title }}
            </a>
          </li>
        </ul>
      </div>

      <div
          @click="showMenu = !showMenu"
          class="nav__toggle"
          id="nav-toggle">
        <i class='bx bx-grid-alt'></i>
      </div>
    </nav>
  </header>
</template>

<script setup>
import {reactive, ref} from "vue";
const showMenu = ref(false)

const nav_list = reactive([
  {
    id: '#home',
    icon: 'bx-home',
    title: 'Home',
    active: false,
  },
  {
    id: '#profile',
    icon: 'bx-user',
    title: 'Profile',
    active: false,
  },
  {
    id: '#education',
    icon: 'bx-book',
    title: 'Education',
    active: false,
  },
  {
    id: '#skills',
    icon: 'bx-receipt',
    title: 'Skills',
    active: false,
  },
  {
    id: '#experience',
    icon: 'bx-briefcase-alt',
    title: 'Experience',
    active: false,
  },
  {
    id: '#certificates',
    icon: 'bx-award',
    title: 'Certificates',
    active: false,
  },
  {
    id: '#references',
    icon: 'bx-link-external',
    title: 'References',
    active: false,
  },
])
</script>

<style scoped>

</style>