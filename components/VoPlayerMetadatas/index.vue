<template>
  <v-card
    :class="{ flex_center: isFullScreen }"
    class="metadatas overflow_hidden ma-1 pa-1"
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
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
</style>
