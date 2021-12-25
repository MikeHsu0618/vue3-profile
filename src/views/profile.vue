<template>
<!--  ========== HEADER ==========-->
  <Menu></Menu>
  <main class="l-main bd-container">
    <!-- All elements within this div, is generated in PDF -->
    <div class="resume" id="area-cv">
      <div class="resume__left">
        <!--========== HOME ==========-->
        <Home></Home>
        <!--========== SOCIAL ==========-->
        <Social></Social>
        <!--========== PROFILE ==========-->
        <Profile></Profile>
        <!--========== EDUCATION ==========-->
        <Education></Education>
        <!--========== SKILLS  ==========-->
        <Skills></Skills>
      </div>

      <div class="resume__right">
        <!--========== EXPERIENCE ==========-->
        <Experience></Experience>
        <!--========== CERTIFICATES ==========-->
        <Certificates></Certificates>
        <!--========== REFERENCES ==========-->
        <References></References>
        <!--========== LANGUAGES ==========-->
        <Languages></Languages>
        <!--========== INTERESTS ==========-->
        <Interests></Interests>
      </div>
    </div>
  </main>
  <!--========== SCROLL TOP ==========-->
  <ScrollTop></ScrollTop>
</template>

<script setup>
import '../assets/css/profile.css'
import Menu from '../components/profile/menu.vue'
import Home from '../components/profile/page_left/home.vue'
import Social from '../components/profile/page_left/social.vue'
import Profile from '../components/profile/page_left/profile.vue'
import Skills from '../components/profile/page_left/skills.vue'
import Education from '../components/profile/page_left/education.vue'
import Experience from '../components/profile/page_right/experience.vue'
import Certificates from '../components/profile/page_right/certificates.vue'
import References from '../components/profile/page_right/references.vue'
import Languages from '../components/profile/page_right/laguages.vue'
import Interests from '../components/profile/page_right/interests.vue'
import ScrollTop from '../components/common/scroll_top.vue'

const name = 'profile';

</script>

<style scoped>

</style>