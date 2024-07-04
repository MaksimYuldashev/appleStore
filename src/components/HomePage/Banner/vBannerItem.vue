<template>
  <div class="bg-[#101010] dark:border-2 md:w-full h-[150px] md:h-[200px] rounded-[30px] px-5 flex items-center justify-center">
    <div>
      <h1 class="font-semibold text-white text-[14px] md:text-[30px]">{{ $t('bannerTitle') }}</h1>
      <h4 class="font-semibold text-white text-[14px] md:text-[30px]">{{ $t('bannerSubTitle') }}</h4>
    </div>
    <div class="max-w-[220px] h-[175px] md:max-w-[320px] md:h-[236px]">
      <img class="w-full h-full object-center" src="/Banner/iPhone-13-Pro-Max-silver.png">
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

</style>