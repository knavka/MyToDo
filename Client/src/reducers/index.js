import { combineReducers } from 'redux'
import tasks from './tasks'
import bloks from './bloks'
import currentTask from './currentTask'

const rootReducer = combineReducers({
  tasks,
  bloks,
  currentTask
})

export default rootReducer
