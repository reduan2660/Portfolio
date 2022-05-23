<template>
  <div
    class="header font-display w-screen h-20 sm:h-24 bg-gradient-to-b from-headerBlue to-black text-pureWhite flex flex-row justify-between items-center px-7 sm:px-20"
  >
    <div class="underline underline-offset-4 mt-2 sm:mt-4 sm:text-lg">
      Projects
    </div>
    <div class="text-2xl sm:text-3xl">AlveReduan</div>
    <div class="underline underline-offset-4 mt-2 sm:mt-4 sm:text-lg">
      Reach me
    </div>
  </div>
  <slot />
  <div class="footer"></div>
</template>
