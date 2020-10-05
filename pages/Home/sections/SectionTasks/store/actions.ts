import { ITask } from './interfaces'

import state from './state'

const createTodo = (task: ITask) => state.tasks.push(task)

export default {
  createTodo,
}
