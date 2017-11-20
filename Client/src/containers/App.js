import styles from "./App.css";
import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import NewTask from '../components/NewTask'
import TaskCreater from '../components/TaskCreater'
import Tasks from '../components/Tasks'
import * as TasksActions from '../actions'

const App = ({tasks, bloks, currentTask, actions}) => (
 
  <div className='appmap'>
    <NewTask open={actions.openTask} clearEditor={actions.clearEditor}/>
    <TaskCreater isOpen={bloks.taskEditor.open} taskProps={currentTask} save={actions.saveTask} close={actions.closeTaskEditor} setProp={actions.setProp}/>
    <Tasks taskslist={tasks} openEditior={actions.openEditor} openTask={actions.openTask} deleteTask={actions.deleteTask}/>

  </div>
)
App.propTypes = {
  tasks: PropTypes.array.isRequired,
  currentTask:PropTypes.object.isRequired,
  bloks:PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
  tasks: state.tasks,
  bloks: state.bloks,
  currentTask:state.currentTask
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TasksActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
