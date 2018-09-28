<template>
  <v-card
    flat
    class="metadatas"
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

<style lang="scss">
  .metadatas {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin: 6px 8px;
  }
</style>
