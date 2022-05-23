<template>
  <div class="flex flex-col items-center justify-start">
    <div
      class="img h-64 w-80 sm:w-3/5 rounded-md"
      :style="{
        'background-image':
          'url(../assets/images/' + props.detail.imageSRC + ')',
        'background-size': 'cover',
        'background-position': 'center',
      }"
    ></div>
    <div class="title mt-10 text-3xl sm:text-4xl font-semibold">
      <a target="_blank" :href="props.detail.live">
        {{ props.detail.title }}
      </a>
    </div>
    <div class="description1 mt-10 text-xl md:px-28">
      {{ props.detail.description[0] }}
    </div>
    <div class="description2 mt-5 text-xl">
      {{ props.detail.description[1] }}
      <a target="_blank" :href="props.detail.repo">
        <span class="underline">Source.</span></a
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["detail"]);
</script>
