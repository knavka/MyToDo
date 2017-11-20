


import styles from "./TaskCreater.css";
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CurrentTask from './CurrentTask'
import Location from './Location'
import ServiceType from './ServiceType'
import ServiceTask from './ServiceTask'
import Description from './Description'

export default class TaskCreater extends Component {
  static propTypes = {
    save: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired
  }

  handleSave = () => {
    this.props.save()
  }
  handleClose = () => {
    this.props.close()
  }


  render() {
    const  isOpen = this.props.isOpen;
    if (isOpen)
      return (
        <div className='flex-col appmap-TaskCreater-block'>

        <CurrentTask 
        location={this.props.taskProps.location} 
        serviceType={this.props.taskProps.serviceType} 
        serviceTask={this.props.taskProps.serviceTask} 
        description={this.props.taskProps.description} 
        id={this.props.taskProps.id}
        save={this.props.save} 
        close={this.props.close}
        setProp={this.props.setProp}  
        />

        <Location 
        location={this.props.taskProps.location}
        setProp={this.props.setProp} 
        />

        <ServiceType 
        serviceType={this.props.taskProps.serviceType}
        setProp={this.props.setProp}  
        />

        <ServiceTask 
        serviceTask={this.props.taskProps.serviceTask}
        serviceType={this.props.taskProps.serviceType}
        setProp={this.props.setProp}
        />
        
        <Description 
        description={this.props.taskProps.description} 
        setProp={this.props.setProp}
        />



  
        </div>
        )

    else 
      return null
  }
}


