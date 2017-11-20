
import { SAVE_TASK, DELETE_TASK, LOAD_TASKS} from '../constants/ActionTypes'
import { getTasksFromServer } from '../serveractions/ServerActions'
import { postTaskToServer,deleteTaskFromServer } from '../serveractions/ServerActions'
     

const initialTasks = [];


export default function tasks(state = initialTasks, action) {


  switch (action.type) {

    case LOAD_TASKS: {
      return [...state,...action.tasks];
    }

    case DELETE_TASK:
    deleteTaskFromServer(action.id);
      return state.filter(task =>
        task.id !== action.id
      )

    case SAVE_TASK:{


    if (action.id){
      postTaskToServer(action.id,action.props);
      return state.map(task =>
        task.id === action.id ?
          { ...task, 
          location: action.props.location,
          serviceType: action.props.serviceType,
          serviceTask: action.props.serviceTask,
          description: action.props.description,
          date: Date.now()
          } :
          task
      )
    }
    else{
      const id=Date.now();
       postTaskToServer(id,action.props);
       return [
        ...state,
        {
          id: id,
          location: action.props.location,
          serviceType: action.props.serviceType,
          serviceTask: action.props.serviceTask,
          description: action.props.description,
          date: Date.now()

        }
      ]
    }

    }

    default:
      return state
  }
}

