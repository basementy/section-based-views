import { reactive } from '@nuxtjs/composition-api'
import { ITask } from './interfaces'

const state = reactive({
  tasks: [] as ITask[],
})

export default state
