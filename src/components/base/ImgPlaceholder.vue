<template>
  <img :src="placeholderUrl" alt="Placeholder image" />
</template>

<script>
export default {
  name: 'Placeholder-Image',
  props: {
    width: {
      type: Number,
      default: 350
    },
    height: {
      type: Number,
      default: 350
    }
  },
  computed: {
    placeholderUrl() {
      return `http://via.placeholder.com/${this.width}x${this.height}`;
    }
  }
}
</script>