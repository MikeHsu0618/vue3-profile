<template>
  <section class="experience section" id="experience">
    <h2 class="section-title">Experience</h2>

    <div class="experience__container bd-grid">
      <div class="experience__content">
        <div class="experience__time">
          <span class="experience__rounder"></span>
          <span class="experience__line"></span>
        </div>

        <div class="experience__data bd-grid">
          <h3 class="experience__title">25sprout(SurveyCake)</h3>
          <span class="experience__company">Backend Developer | From 2021/5 to Current</span>
          <p class="experience__description">
            使用 Laravel + Vue 於本公司專案部門規模最大的多語系專案
          </p>
          <p class="experience__description">
            世界知名跨國自行車製造商全球品牌官網 後台建置 + 前台 API
          </p>
          <p class="experience__description">負責該專案的金流串接, 資料庫規劃, 訂單系統, 庫存系統... 等應用開發。</p>
          <br>
          <p class="experience__description">- 測試撰寫 : 將持續開發一年半的專案測試覆蓋率從 20% 提高至 40%</p>
          <p class="experience__description">- Cache (Redis) : 除了資料快取外, 獨立於訂單系統導入分佈鎖避免 Race Condition</p>
          <p class="experience__description">- 協助 CI 流程 :</p>
          <p class="experience__description" style="margin-left: 3%">- 將 15-20 分鐘的佈署時間, 降低至 4-6 分鐘 (平均)</p>
          <p class="experience__description" style="margin-left: 3%">- 擁有獨立建立 CI / CD 流程經驗 ( Github Action + Docker )</p>
          <p class="experience__description">- 跨部門溝通協調 : </p>
          <p class="experience__description" style="margin-left: 3%">- 與前端工程師合作，一起定義 API 規格</p>
          <p class="experience__description" style="margin-left: 3%">- 與PM一起設定專案時程</p>
          <p class="experience__description">- AWS 應用 : 以 AWS 服務實現系統需求功能</p>
          <p class="experience__description" style="margin-left: 3%">- Schedule -> CloudWatch + SNS</p>
          <p class="experience__description" style="margin-left: 3%">- Queue -> SNS + SQS</p>
          <p class="experience__description" style="margin-left: 3%">- 獨立佈署個人伺服器能力 (EC2, RDS, ElactiCache, Route53 ...)</p>
        </div>
      </div>

      <div class="experience__content">
        <div class="experience__time">
          <span class="experience__rounder"></span>
<!--          <span class="experience__line"></span>-->
        </div>

        <div class="experience__data bd-grid">
          <h3 class="experience__title">SmartBeB</h3>
          <span class="experience__company">Fullstack Developer | From 2020/11 to 2021/5 </span>
          <p class="experience__description">
            SmartBeB 當時是個成立兩年, 八人左右的新創小團隊, 提供了一套市面上獨有的影像文字辨識保單資訊查詢服務
          </p>
          <p class="experience__description">
            由於種種前因, 進入公司之時是團隊中即是唯一一個開發人員, 在開發維護的方面完全沒有經歷過交接, 於是在這份轉職後第一份工作中扛下全部有關開發的所有事務, 用了一個多月了解商業邏輯並同持擔起 PM 職責與第三方廠商 (OCR 文字辨識服務商, 保單資料服務商) 溝通協作開發, 並於最短時間內投入重構該服務和開發前後端功能
          </p>
          <p class="experience__description">
            當服務上線時間增長, 隨之而來的是日益明顯的效能瓶頸, 於在職期間對資料庫一系列相關優化, 使其每筆查詢效率提升數倍, 每筆新增資料量縮減至三分之一
          </p>
          <br>
          <p class="experience__description">- 徹底了解商業邏輯, 優化 query</p>
          <p class="experience__description">- 重新設計資料表結構(欄位設計, 拆表)</p>
          <p class="experience__description">- 對關鍵查詢欄位使用聯合索引</p>
          <p class="experience__description">- 索引優化 (Optimize Table)</p>
          <p class="experience__description">- 重新設計 Log 系統</p>
          <p class="experience__description">- 前端工具頁面開發 (Vue)</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>

</style>