import {OPEN_TASK_CREATER, CLOSE_TASK_CREATER} from '../constants/ActionTypes'

const initialBlocks = {
  taskEditor:{
    open:true,
    // id:0,
    // props:{
    //  location: '',
    //  serviceType: '',
    //  serviceTask: '',
    //  description: '',
    //  createDate: '',
    // }
  }
}

export default function blocks(state = initialBlocks, action) {
 console.log(action);
  switch (action.type) {

    case OPEN_TASK_CREATER:{
      console.log(action);
      return Object.assign({}, state, {taskEditor:{open:true}})
}

    case CLOSE_TASK_CREATER:
      return Object.assign({}, state, {taskEditor:{open:false}})

    default:
      return state
  }
}
