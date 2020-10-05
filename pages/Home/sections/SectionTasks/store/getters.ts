import { computed } from '@nuxtjs/composition-api'

import state from './state'

const getCompletedTasks = computed(() =>
  state.tasks.filter(({ completed }) => completed)
)

const getUncompletedTasks = computed(() =>
  state.tasks.filter(({ completed }) => !completed)
)

export default {
  getCompletedTasks,
  getUncompletedTasks,
}
