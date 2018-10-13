<template>
  <v-slider
    :class="{ overlapped: !isFullScreen }"
  />
</template>

<style lang="scss" scoped>
  .overlapped {
    position: absolute;
    top: -30px;
    left: 0;
    right: 0;
    margin-left: 0;
    margin-right: 0;
  }
</style>
