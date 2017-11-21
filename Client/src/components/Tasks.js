
import styles from "../styles/Tasks.css";
import React, { Component } from 'react'
import Task from './Task'
import { getTasksFromServer } from '../serveractions/ServerActions'


export default class Tasks extends Component {
  constructor(props){
    super(props);
    getTasksFromServer(this.props.loadTasks);
  }


  render() {
    const openEditor=this.props.openEditior;
    const openTask=this.props.openTask;

    const del=this.props.deleteTask;
    let block=this.props.taskslist.map((task)=><Task key={task.id} id={task.id} taskProps={task} openEditor={openEditor} openTask={openTask} delete={del}/>);
      return (
      <div className='flex-col appmap-Tasks-block'>
      {block}
      </div>
      )
    }
  }
