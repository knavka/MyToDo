
import { SAVE_TASK, DELETE_TASK} from '../constants/ActionTypes'
//ADD_TASK, EDIT_TASK,
const initialTasks = []
// {
//  id:0,
//  location: '',
//  serviceType: '',
//  serviceTask: '',
//  description: '',
//  date: Date.now(),
//   }
// ]

export default function tasks(state = initialTasks, action) {
  switch (action.type) {

    case DELETE_TASK:
      return state.filter(task =>
        task.id !== action.id
      )

    case SAVE_TASK:{
    if (action.id)
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
    else
       return [
        ...state,
        {
          id: state.reduce((maxId, task) => Math.max(task.id, maxId), -1) + 1,
          location: action.props.location,
          serviceType: action.props.serviceType,
          serviceTask: action.props.serviceTask,
          description: action.props.description,
          date: Date.now()

        }
      ]
    }



   
    default:
      return state
  }
}

