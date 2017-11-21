
import React, { Component } from 'react'


export default class Task extends Component {
  constructor(){
    super();
    this.handleEdit=this.handleEdit.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
  }

  handleEdit = ()  => {
    this.props.openEditor();
    this.props.openTask(this.props.id, this.props.taskProps);
  };
  handleDelete = ()  => {
    this.props.delete(this.props.id);
  }
  
  render() {

   const days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   const month=['Jan','Feb','Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   const date=new Date(this.props.taskProps.date);
   let day=(+Date.now()-date<8400000)?day='Today':
   ((+Date.now()-date<2*8400000)?'Tomorrow':days[date.getDay()]);

   console.log(date);
   let formatDate=day+', '+month[date.getMonth()]+' '+date.getDate()+', '+date.getFullYear();   

   return (       
    <div className='flex-col appmap-Task-block'>
    <div className='appmap-block-title'>
    { formatDate }     
    </div>
    <div className='appmap-Task-descr'>
    {
      (this.props.taskProps.serviceType&&this.props.taskProps.serviceTask)
      ?'I need a '+this.props.taskProps.serviceType+' to '+this.props.taskProps.serviceTask.toLowerCase()+ (this.props.taskProps.description?', '+this.props.taskProps.description:'') 
      :(this.props.taskProps.serviceType
      ?'I need a '+this.props.taskProps.serviceType+(this.props.taskProps.description
      ?', '+this.props.taskProps.description
      :'')
      :this.props.taskProps.serviceTask+
      (this.props.taskProps.description
      ?this.props.taskProps.description
      :'')) 
    }

    </div>

    <div className='flex-row appmap-container-start'>

    <div className='appmap-button appmap-fillBut' onClick={() => this.handleEdit()}>
    EDIT       
    </div>
    <div className='appmap-button appmap-strokeBut' onClick={() => this.handleDelete()}>
    DELETE       
    </div>

    </div>




    </div>

    )
 }
}
