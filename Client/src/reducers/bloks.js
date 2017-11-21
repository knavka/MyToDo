import {OPEN_TASK_CREATER, CLOSE_TASK_CREATER, ERROR_TASK_CREATER} from '../constants/ActionTypes'

const initialBlocks = {
  taskEditor:true,
  errorFields:''
}

export default function blocks(state = initialBlocks, action) {
  switch (action.type) {

    case OPEN_TASK_CREATER:{
      return Object.assign({}, state, {taskEditor:true, errorFields:''})
    }

    case CLOSE_TASK_CREATER:{
      return Object.assign({}, state, {taskEditor:false,errorFields:''})
    }

    case ERROR_TASK_CREATER:{
      return Object.assign({}, state, {errorFields:action.fields})
    }  

    default:
      return state
  }
}
