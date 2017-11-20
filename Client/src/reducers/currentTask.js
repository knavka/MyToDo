import {SET_PROP, CLEAR_CURRENT_TASK, SET_CURRENT_TASK} from '../constants/ActionTypes'

const initialCurrentTask ={
 id:0,
 location: '',
 serviceType: '',
 serviceTask: '',
 description: '',
 date: Date.now()
  }

export default function currentTask(state = initialCurrentTask, action) {

  switch (action.type) {
    case SET_PROP: {
    	let addObj={};
    	addObj[action.propName]=action.propVal;
    return Object.assign({}, state, addObj);
	}
	case CLEAR_CURRENT_TASK: {
		return Object.assign({}, state, initialCurrentTask);
	}

	case SET_CURRENT_TASK:{
      return  Object.assign({}, state, {id:action.id}, action.props);
	}
      

    default:
      return state
  }
}