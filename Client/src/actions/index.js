import * as types from '../constants/ActionTypes'

export const saveTask = (id, props) => ({ type: types.SAVE_TASK, id:id, props:props });
export const deleteTask = (id) => ({ type: types.DELETE_TASK, id:id });
export const openTask = (id, props) => ({ type: types.SET_CURRENT_TASK, id:id, props:props});
export const closeTaskEditor = (id, props) => ({ type: types.CLOSE_TASK_CREATER });
export const setProp = (propName, propVal) => ({ type: types.SET_PROP, propName:propName, propVal:propVal });
export const clearEditor = () => ({ type: types.CLEAR_CURRENT_TASK });
export const openEditor = () => ({ type: types.OPEN_TASK_CREATER});
export const loadTasks = (tasks) => ({ type: types.LOAD_TASKS, tasks:tasks});
export const errorSave = (fields) => ({ type: types.ERROR_TASK_CREATER, fields:fields});
