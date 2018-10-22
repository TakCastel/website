<template>
  <v-card
    :class="{ 'mobile_flex_1 overflow_hidden': !isFullScreen, 'flex_center metadatas_visible' : isFullScreen }"
    class="transparent metadatas ma-1 pa-1"
    flat
  >
    <span>
      {{ metadatas.title }}
    </span>
    <span>
      {{ metadatas.author }}
    </span>
  </v-card>
</template>

<script>
export default {
  props: {
    metadatas: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
  .metadatas {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    &_visible {
      overflow: unset;
    }
  }
</style>
