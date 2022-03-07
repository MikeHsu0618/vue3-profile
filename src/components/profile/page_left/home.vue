<template>
  <section class="home" id="home">
    <div class="home__container section bd-grid">
      <div class="home__data bd-grid">
        <img style="background: #8080808a" src="../../../assets/img/perfil.png" alt="" class="home__img">

        <h1 class="home__title">MIKE <b>HSU</b></h1>
        <h3 class="home__profession">Backend developer</h3>

        <!--        <div>-->
        <!--          &lt;!&ndash; Button to download your CV saved in the pdf folder. Available for mobile &ndash;&gt;-->
        <!--          <a-->
        <!--              @click="downloadProfile()"-->
        <!--              download-->
        <!--              href="../../../assets/pdf/ResumeCv.pdf"-->
        <!--              class="home__button-movil">Download Cv</a>-->
        <!--        </div>-->
      </div>

      <div class="home__address bd-grid">
        <span class="home__information">
            <i class='bx bx-map home__icon'></i> Taipei, Taiwan
        </span>
        <span class="home__information">
            <i class='bx bx-envelope home__icon'></i> a3698521tw11@gmail.com
        </span>
        <span class="home__information">
          <i class='bx bx-phone home__icon'></i> 0975-656-637
        </span>
        <span
            @click="openUrl('https://github.com/MikeHsu0618')"
            style="cursor: pointer"
            class="home__information">
          <i class='bx bxl-github home__icon'></i> MikeHsu0618
        </span>
      </div>
    </div>

    <!-- Theme change button -->
    <i @click="changeTheme" :class="['bx', 'bx-moon', 'change-theme', {'bx-sun': isLight}]" title="Theme"
       id="theme-button"></i>

    <!-- Button to generate and download the pdf. Available for desktop. -->
    <!--    <a-->
    <!--        download="ResumeCv.pdf"-->
    <!--        href="../../../assets/pdf/ResumeCv.pdf"-->
    <!--    >-->
    <!--      <i-->
    <!--          class='bx bx-download generate-pdf'-->
    <!--          title="Generate PDF"-->
    <!--          id="resume-button">-->
    <!--      </i>-->
    <!--    </a>-->
  </section>
</template>

<script setup>
import {onMounted} from "vue";
import {useTheme} from "../../../compositables/useTheme";
import {useDownloadPDF} from "../../../compositables/useDownloadPDF";

const {isLight, initTheme, changeTheme} = useTheme()
const {downloadProfile} = useDownloadPDF()

const openUrl = (url) => window.open(url);

onMounted(() => initTheme())

</script>

<style scoped>

</style>