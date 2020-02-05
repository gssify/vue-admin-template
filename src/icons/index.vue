<template>
  <svg
    :class="className"
    class="svg-icon"
    aria-hidden="true"
    v-on="$listeners">
    <use :href="iconName" />
  </svg>
</template>

<script>
import './index'

export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.name}`
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
