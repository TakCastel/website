<template>
  <v-card
    flat
    class="metadatas ma-1 pa-1"
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
