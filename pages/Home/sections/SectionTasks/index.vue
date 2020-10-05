<template>
  <section class="tasks-wrapper">
    <ContentTasksToolbar />
    <ContentTasksList />
    <ContentTasksArchive />
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import ContentTasksToolbar from './content/ContentTasksToolbar.vue'
import ContentTasksList from './content/ContentTasksList.vue'
import ContentTasksArchive from './content/ContentTasksArchive.vue'

export default defineComponent({
  components: {
    ContentTasksToolbar,
    ContentTasksList,
    ContentTasksArchive,
  },
})
</script>

<style lang="scss" scoped>
.tasks-wrapper {
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 4px;
  background: rgb(244, 253, 255);
}
</style>
