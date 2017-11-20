
import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Task extends Component {
  constructor(){
    super();
    console.log(this.props);
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
      return (       
        <div className='flex-col appmap-Task-block'>
              <div className='appmap-block-title'>
              {Date(this.props.taskProps.date).toString().split('GMT')[0]}     
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