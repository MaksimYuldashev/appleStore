<template>
  <footer
      class="bg-white dark:bg-black dark:border-2 dark:border-b-0 shadow-custom rounded-tl-[30px] rounded-tr-[30px] py-2.5 px-8 flex flex-col lg:flex-row lg:items-center justify-between">
    <h1 class="font-bold text-[25px] text-[#101010] font-mono mb-4 md:mb-0 dark:text-white">QPICK</h1>
    <div class="flex flex-col md:flex-row mb-5 md:mb-2 lg:mb-0 justify-center items-center gap-5 md:gap-10">
      <div>
        <ul class="flex flex-col gap-5 md:gap-y-0 md:flex-row">
          <li><router-link :to="{name: 'favorite_page'}" class="text-[17px] font-mono dark:text-white" href="#">{{ $t('favorite') }}</router-link></li>
          <li><router-link :to="{name: 'basket_page'}" class="text-[17px] font-mono dark:text-white" href="#">{{ $t('basket') }}</router-link></li>
          <li><router-link :to="{name: 'basket_page'}" class="text-[17px] font-mono dark:text-white" href="#">{{ $t('contacts') }}</router-link></li>
        </ul>
      </div>
      <div class="flex flex-col mb-2 md:mb-0 md:flex-row items-center gap-5">
        <router-link :to="{name: 'about_page'}" class="text-sm dark:text-white">{{ $t('terms') }}</router-link>
        <div class="flex items-center gap-4">
          <img src="/Icons/RU.svg" class="w-6 h-6">
          <span :class="{'active-lang': currentLang === 'ru'}" class="text-sm dark:text-white cursor-pointer" @click="changeLanguage('ru')">Рус</span>
          <span :class="{'active-lang': currentLang === 'en'}" class="text-sm dark:text-white cursor-pointer" @click="changeLanguage('en')">Eng</span>
          <span :class="{'active-lang': currentLang === 'uzb'}" class="text-sm dark:text-white cursor-pointer" @click="changeLanguage('uzb')">UZB</span>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center gap-5 md:gap-10">
      <a href="https://vk.com/uk_pevchenko25" target="_blank" rel="noopener noreferrer" class="hover:border-blue-500 hover:rotate-12 transition-all border-2 rounded-full overflow-hidden bg-white">
        <img src="/Icons/VK.svg" alt="VK Icon" class="w-8 h-8 px-1.5">
      </a>
      <a href="https://www.instagram.com/crazy_pe4enbka?igsh=dzBvZWNkcHR2d3Ix" target="_blank" rel="noopener noreferrer" class="hover:border-red-500 hover:rotate-12 transition-all border-2 rounded-full overflow-hidden bg-white">
        <img src="/Icons/Instagram.svg" alt="VK Icon" class="w-8 h-8 px-1.5">
      </a>
      <a href="" target="_blank" rel="noopener noreferrer" class="hover:border-blue-500 hover:rotate-12 transition-all border-2 rounded-full overflow-hidden bg-white">
        <img src="/Icons/Telegram.svg" alt="VK Icon" class="w-8 h-8 px-1.5">
      </a>
      <button class="hover:border-green-500 hover:rotate-12 transition-all border-2 rounded-full overflow-hidden bg-white"><img src="/Icons/Whatsapp.svg" class="w-8 h-8 px-1.5"></button>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentLang: this.$i18n.locale
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang
      this.currentLang = lang
    },
  }
}
</script>

<style scoped>
.active-lang {
  border-bottom: 2px solid black;
}
.dark .active-lang {
  border-bottom: 2px solid white;
}
</style>
