
import styles from "./Tasks.css";
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Task from './Task'


export default class Tasks extends Component {
  // static propTypes = {
  //   actions: PropTypes.object.isRequired
  // }
    constructor(){
    super();
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick  ()  {
    this.props.actions.createTask()
  }

  render() {
    const openEditor=this.props.openEditior;
    const openTask=this.props.openTask

    const del=this.props.deleteTask;
    let block=this.props.taskslist.map((task)=><Task key={task.id} id={task.id} taskProps={task} openEditor={openEditor} openTask={openTask} delete={del}/>);
    return (
      <div className='flex-col appmap-Tasks-block'>
     {block}
      </div>
    )
  }
}
