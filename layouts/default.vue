<template>
  <div id="app" ref="app" >
    <main>

    <header>Header</header>
    <div class="site-content">
      <nuxt />
    </div>
    <footer>Footer</footer>

    </main>
  </div>
</template>

<script lang="ts">

import { defineComponent} from '@vue/composition-api'
export default defineComponent({
  name: 'layout',
  props: {

  },
  setup() {

  },
})
</script>

>
<style lang="postcss">
</style>
