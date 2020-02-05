
<template>
  <component
    :is="is"
    v-bind="props">
    <slot />
  </component>
</template>

<script>
import { isExternal } from '@/helpers/validate'

export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  computed: {
    is () {
      return isExternal(this.to) ? 'a' : 'router-link'
    },
    props () {
      return isExternal(this.to)
        ? { href: this.to, target: '_blank', rel: 'noopener' }
        : { to: this.to }
    }
  }
}
</script>
